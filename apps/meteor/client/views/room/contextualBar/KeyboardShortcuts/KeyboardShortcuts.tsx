import { useLanguage, useTranslation } from '@rocket.chat/ui-contexts';
import type { ReactElement } from 'react';
import React, { memo } from 'react';
import useOSInfo from '../hooks/useOSInfo'; 
import VerticalBar from '../../../../components/VerticalBar';
import KeyboardShortcutSection from './KeyboardShortcutSection';


const KeyboardShortcuts = ({ handleClose }: { handleClose: () => void }): ReactElement => {
	const t = useTranslation();
	let osName = useOSInfo();
	const lang = useLanguage();

	if (lang !== 'pt-BR' && lang !== 'en') {
		osName = '';
	}

	return (
		<>
			<VerticalBar.Header>
				<VerticalBar.Icon name='keyboard' />
				<VerticalBar.Text>{t('Keyboard_Shortcuts_Title')}</VerticalBar.Text>
				{handleClose && <VerticalBar.Close onClick={handleClose} />}
			</VerticalBar.Header>
			<VerticalBar.ScrollableContent>
				<KeyboardShortcutSection title={t('Keyboard_Shortcuts_Open_Channel_Slash_User_Search')} command={t(`Keyboard_Shortcuts_Keys_1${osName}`)} />
				<KeyboardShortcutSection title={t('Keyboard_Shortcuts_Mark_all_as_read')} command={t(`Keyboard_Shortcuts_Keys_8${osName}`)} />
				<KeyboardShortcutSection title={t('Keyboard_Shortcuts_Edit_Previous_Message')} command={t(`Keyboard_Shortcuts_Keys_2${osName}`)} />
				<KeyboardShortcutSection title={t('Keyboard_Shortcuts_Move_To_Beginning_Of_Message')} command={t(`Keyboard_Shortcuts_Keys_3${osName}`)} />
				<KeyboardShortcutSection title={t('Keyboard_Shortcuts_Move_To_Beginning_Of_Message')} command={t(`Keyboard_Shortcuts_Keys_4${osName}`)} />
				<KeyboardShortcutSection title={t('Keyboard_Shortcuts_Move_To_End_Of_Message')} command={t(`Keyboard_Shortcuts_Keys_5${osName}`)} />
				<KeyboardShortcutSection title={t('Keyboard_Shortcuts_Move_To_End_Of_Message')} command={t(`Keyboard_Shortcuts_Keys_6${osName}`)} />
				<KeyboardShortcutSection title={t('Keyboard_Shortcuts_New_Line_In_Message')} command={t(`Keyboard_Shortcuts_Keys_7${osName}`)} />
			</VerticalBar.ScrollableContent>
		</>
	);
};

export default memo(KeyboardShortcuts);
