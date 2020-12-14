import { MasterSwitchApi } from '../../src/infra/MasterSwitchApi';

describe('MasterSwitchApi', () => {
  let masterSwitchApi;

  beforeEach(() => {
    masterSwitchApi = new MasterSwitchApi ({
      apiKey: 'mockKey',
      experienceKey: 'mockExperience'
    });
  });

  it('behaves correctly when JSON is present and disabled is true', async () => {
    fetch.mockResponseOnce(JSON.stringify({ disabled: true }));
    const isEnabled = await masterSwitchApi.isEnabled();
    expect(isEnabled).toBeFalsy();
  });

  it('behaves correctly when JSON is present and disabled is false', async () => {
    fetch.mockResponseOnce(JSON.stringify({ disabled: false }));
    const isEnabled = await masterSwitchApi.isEnabled();
    expect(isEnabled).toBeTruthy();
  });

  it('behaves correctly when status page contains JSON of empty object', async () => {
    fetch.mockResponseOnce(JSON.stringify({}));
    const isEnabled = await masterSwitchApi.isEnabled();
    expect(isEnabled).toBeTruthy();
  });

  it('behaves correctly when network call results in an error', async () => {
    fetch.mockRejectOnce(new Error('Page does not exist'));
    const isEnabled = await masterSwitchApi.isEnabled();
    expect(isEnabled).toBeTruthy();
  });

  it('behaves correctly when timeout is reached', async () => {
    function mockTimeout() {
      return new Promise(resolve => setTimeout(resolve, 200));
    }
    fetch.mockResponseOnce(mockTimeout);
    const isEnabled = await masterSwitchApi.isEnabled();
    expect(isEnabled).toBeTruthy();
  });
});
