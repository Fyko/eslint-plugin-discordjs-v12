/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
const { createConfig } = require('create-eslint-index');

export const rules = {
	'require-intents': require('./rules/require-intents'),
	'no-event-listener-string': require('./rules/no-event-listener-string'),
};

const recommendedRules = createConfig(
	{
		plugin: 'discordjs-v12',
		field: 'meta.docs.recommended',
	},
	rules,
);

export const configs = {
	recommended: {
		rules: Object.assign({}, recommendedRules),
	},
};
