/**
 * modified from https://github.com/vitejs/vite/blob/main/scripts/release.ts
 */
import prompts from 'prompts';
import semver from 'semver';
import colors from 'picocolors';
import {
  getLatestTag,
  getPackageInfo,
  getTagSha,
  getVersionChoices,
  isDryRun,
  logRecentCommits,
  run,
  runIfNotDry,
  step,
  updateVersion,
} from './releaseUtils.js';

(async () => {

  const { currentVersion, pkgPath, pkgDir } = await getPackageInfo();

  const latestTag = await getLatestTag();
  if (latestTag) {
    const sha = await getTagSha(latestTag);
    await logRecentCommits(latestTag, sha);
  }

  const { release }: { release: string } = await prompts({
    type: 'select',
    name: 'release',
    message: 'Select release type',
    choices: getVersionChoices(currentVersion),
  });

  let targetVersion = release;
  if (release === 'custom') {
    const { version }: { version: string } = await prompts({
      type: 'text',
      name: 'version',
      message: 'Input custom version',
      initial: currentVersion,
    });
    targetVersion = version;
  }

  if (!semver.valid(targetVersion)) {
    console.error(`invalid target version: ${targetVersion}`);
    process.exit(1);
  }

  const tag = `v${targetVersion}`;

  const { yes }: { yes: boolean } = await prompts({
    type: 'confirm',
    name: 'yes',
    message: `Releasing ${colors.yellow(tag)} Confirm?`,
  });

  if (!yes) {
    process.exit();
  }

  step('\nUpdating package version...');
  updateVersion(pkgDir, pkgPath, targetVersion);

  const { stdout } = await run('git', ['diff'], { stdio: 'pipe' });
  if (stdout) {
    step('\nCommitting changes...');
    await runIfNotDry('git', ['add', '-A']);
    await runIfNotDry('git', ['commit', '-m', `release: ${tag}`]);
    await runIfNotDry('git', ['tag', tag]);
  } else {
    console.log('No changes to commit.');
    process.exit();
  }

  step('\nPushing to GitHub...');
  await runIfNotDry('git', ['push']);
  await runIfNotDry('git', ['push', 'origin', `refs/tags/${tag}`]);

  if (isDryRun) {
    console.log('\nDry run finished - run git diff to see package changes.');
  } else {
    console.log(
      colors.green(
        '\nPushed, publishing should starts shortly on CI.\nhttps://github.com/yext/search-core/blob/main/.github/workflows/publish.yml'
      )
    );
  }

  console.log();
})();