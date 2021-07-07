import UaParser from 'ua-parser-js';
import * as OS from 'constants/OS';

function osChecker() {
  const parser = UaParser();
  const os = parser.os.name;
  const { architecture } = parser.cpu;

  if (os === 'Mac OS') {
    return OS.MAC;
  } else if (os === 'Windows') {
    return architecture === 'amd64' ? OS.WIN64 : OS.WIN32;
  }
  // when another OS
  return undefined;
}

export default osChecker;
