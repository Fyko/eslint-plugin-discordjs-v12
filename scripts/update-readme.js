/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

const imptAll = require('import-modules');
const createIndex = require('create-eslint-index');
const { configs } = require('../dist/src/index');

const rules = imptAll('../dist/src/rules', { camelize: false });

const settings = {
	descriptionField: 'meta.docs.description',
	docPath: 'docs/rules',
};

const exampleConfiguration = {
	name: 'my-awesome-project',
	eslintConfig: {
		plugins: ['discordjs-v12'],
		rules: configs.recommended.rules,
	},
};

module.exports = {
	RULES: `\n${createIndex.createRulesDescription(settings, rules)}\n\n`,
	// eslint-disable-next-line prefer-template
	EXAMPLE_CONFIGURATION: '\n```json\n' + JSON.stringify(exampleConfiguration, null, 2) + '\n```\n',
};
