import {useEffect, useState} from 'react';

type osTypes = |'windows'|'linux'|'macos'|'';

function getOSPlatform(): osTypes{
    const { platform } = window.navigator;
    // let platform = navigator?.userAgentData?.platform || navigator?.platform || ''


	const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
	const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];

	if (macosPlatforms.indexOf(platform) !== -1) {
		return 'macos';
	} if (windowsPlatforms.indexOf(platform) !== -1) {
		return 'windows';
	} if (/Linux/.test(platform)) {
		return 'linux';
	}
	return '';
}

export default function useOsPlatform(): osTypes {
	const [osPlatform, setOsPlatform] = useState<osTypes>('');

	useEffect(() => {
		const plat = getOSPlatform();
		setOsPlatform(plat);
	}, []);

	return osPlatform;
}