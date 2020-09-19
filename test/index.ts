import test from 'ava';
import noEventListenerString from '../src/rules/no-event-listener-string';
import requireIntents from '../src/rules/require-intents';
const avaRuleTester = require('eslint-ava-rule-tester'); // eslint-disable-line

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

// @ts-ignore
tester.run('no-event-listener-string', noEventListenerString, {
	valid: [
		'client.on(Constants.Events.RATE_LIMIT, () => {})',
		'client.on(Constants.Events.CLIENT_READY, () => {})',
		'client.on(Constants.Events.RESUMED, () => {})',
		'client.on(Constants.Events.GUILD_CREATE, () => {})',
		'client.on(Constants.Events.GUILD_DELETE, () => {})',
	],
	invalid: [
		{
			code: "client.on('rateLimit', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.RATE_LIMIT instead of "rateLimit".',
				},
			],
		},
		{
			code: "client.on('ready', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.CLIENT_READY instead of "ready".',
				},
			],
		},
		{
			code: "client.on('resumed', () => {})",
			errors: [{ message: 'Use Constants.Events.RESUMED instead of "resumed".' }],
		},
		{
			code: "client.on('guildCreate', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.GUILD_CREATE instead of "guildCreate".',
				},
			],
		},
		{
			code: "client.on('guildDelete', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.GUILD_DELETE instead of "guildDelete".',
				},
			],
		},
		{
			code: "client.on('guildUpdate', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.GUILD_UPDATE instead of "guildUpdate".',
				},
			],
		},
	],
});
