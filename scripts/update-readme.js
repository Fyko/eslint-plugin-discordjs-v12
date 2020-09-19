/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

const imptAll = require('import-modules');
const createIndex = require('create-eslint-index');
const { default: recommended } = require('../dist/src/configs/recommended');
// const { default: rules } = require('../dist/src/rules');

const rules = imptAll('../dist/src/rules', { camelize: false });

const settings = {
	descriptionField: 'meta.docs.description',
	docPath: 'docs/rules',
};

const descirption = createIndex.createRulesDescription(settings, rules).split('\n');
descirption.shift();

module.exports = {
	RULES: `\n${descirption.join('\n')}\n\n`,
	// eslint-disable-next-line prefer-template
	EXAMPLE_CONFIGURATION: '\n```json\n' + JSON.stringify(recommended, null, 2) + '\n```\n',
};
