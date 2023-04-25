import { useState, useEffect } from 'react';

function useOSInfo() {
  const [osName, setOSName] = useState('Unknown');

  useEffect(() => {
    const os = window.navigator.platform;
    let name = 'Unknown';

    if (os.startsWith('Win')) {
      name = '_win';
    } else if (os.startsWith('Mac')) {
      name = '_mac';
    } else if (os.startsWith('Linux')) {
      name = '_win';
    }

    setOSName(name);
  }, []);

  return osName;
}

export default useOSInfo;