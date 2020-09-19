/* eslint-disable @typescript-eslint/no-require-imports */

import noEventListenerString from './no-event-listener-string';
import requireIntents from './require-intents';
import requireNode12 from './require-node-12';

export const array = [noEventListenerString, requireIntents, requireNode12];

export default {
	'no-event-listener-string': noEventListenerString,
	'require-intents': requireIntents,
	'require-node-12': requireNode12,
};
