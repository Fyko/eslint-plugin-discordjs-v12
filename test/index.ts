// import ava from 'ava';
// import { RuleTester } from 'eslint';
const avaRuleTester = require('eslint-ava-rule-tester'); // eslint-disable-line
import requireIntents from '../src/rules/require-intents';
import test from 'ava';

const tester = avaRuleTester(test, { parser: require.resolve('babel-eslint') });

const errors = [{ messageId: 'declareIntents' }];
// @ts-ignore
tester.run('require-intents', requireIntents, {
	valid: ['new Client({ ws: { intents: 5 } })', 'new Discord.Client({ ws: { intents: 5 } })'],
	invalid: [
		{
			code: 'new Client()',
			errors,
		},
		{
			code: 'new Discord.Client()',
			errors,
		},
		{
			code: 'new Client({})',
			errors,
		},
		{
			code: 'new Discord.Client({})',
			errors,
		},
	],
});
