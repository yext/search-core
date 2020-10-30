import { MasterSwitch } from '../../src/services/MasterSwitch';

describe('MasterSwitch', () => {
  let masterSwitchApi;

  beforeEach(() => {
    masterSwitchApi = new MasterSwitch({
      apiKey: 'mockKey',
      experienceKey: 'mockExperience'
    });
  });

  it('behaves correctly when JSON is present and disabled is true', async () => {
    fetch.mockResponseOnce(JSON.stringify({ disabled: true }));
    const isDisabled = await masterSwitchApi.checkIsDisabled();
    expect(isDisabled).toBeTruthy();
  });

  it('behaves correctly when JSON is present and disabled is false', async () => {
    fetch.mockResponseOnce(JSON.stringify({ disabled: false }));
    const isDisabled = await masterSwitchApi.checkIsDisabled();
    expect(isDisabled).toBeFalsy();
  });

  it('behaves correctly when status page contains JSON of empty object', async () => {
    fetch.mockResponseOnce(JSON.stringify({}));
    const isDisabled = await masterSwitchApi.checkIsDisabled();
    expect(isDisabled).toBeFalsy();
  });

  it('behaves correctly when network call results in an error', async () => {
    fetch.mockRejectOnce(new Error('Page does not exist'));
    const isDisabled = await masterSwitchApi.checkIsDisabled();
    expect(isDisabled).toBeFalsy();
  });

  it('behaves correctly when timeout is reached', async () => {
    function mockTimeout() {
      return new Promise(resolve => setTimeout(resolve, 200));
    }
    fetch.mockResponseOnce(mockTimeout);
    const isDisabled = await masterSwitchApi.checkIsDisabled();
    expect(isDisabled).toBeFalsy();
  });
});
