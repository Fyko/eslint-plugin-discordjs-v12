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
		"client.on('Constants.Events.RATE_LIMIT', () => {})",
		"client.on('Constants.Events.CLIENT_READY', () => {})",
		"client.on('Constants.Events.RESUMED', () => {})",
		"client.on('Constants.Events.GUILD_CREATE', () => {})",
		"client.on('Constants.Events.GUILD_DELETE', () => {})",
		"client.on('Constants.Events.GUILD_UPDATE', () => {})",
		"client.on('Constants.Events.INVITE_CREATE', () => {})",
		"client.on('Constants.Events.INVITE_DELETE', () => {})",
		"client.on('Constants.Events.GUILD_UNAVAILABLE', () => {})",
		"client.on('Constants.Events.GUILD_MEMBER_ADD', () => {})",
		"client.on('Constants.Events.GUILD_MEMBER_REMOVE', () => {})",
		"client.on('Constants.Events.GUILD_MEMBER_UPDATE', () => {})",
		"client.on('Constants.Events.GUILD_MEMBER_AVAILABLE', () => {})",
		"client.on('Constants.Events.GUILD_MEMBER_SPEAKING', () => {})",
		"client.on('Constants.Events.GUILD_MEMBERS_CHUNK', () => {})",
		"client.on('Constants.Events.GUILD_INTEGRATIONS_UPDATE', () => {})",
		"client.on('Constants.Events.GUILD_ROLE_CREATE', () => {})",
		"client.on('Constants.Events.GUILD_ROLE_DELETE', () => {})",
		"client.on('Constants.Events.GUILD_ROLE_UPDATE', () => {})",
		"client.on('Constants.Events.GUILD_EMOJI_CREATE', () => {})",
		"client.on('Constants.Events.GUILD_EMOJI_DELETE', () => {})",
		"client.on('Constants.Events.GUILD_EMOJI_UPDATE', () => {})",
		"client.on('Constants.Events.GUILD_BAN_ADD', () => {})",
		"client.on('Constants.Events.GUILD_BAN_REMOVE', () => {})",
		"client.on('Constants.Events.CHANNEL_CREATE', () => {})",
		"client.on('Constants.Events.CHANNEL_DELETE', () => {})",
		"client.on('Constants.Events.CHANNEL_UPDATE', () => {})",
		"client.on('Constants.Events.CHANNEL_PINS_UPDATE', () => {})",
		"client.on('Constants.Events.MESSAGE_CREATE', () => {})",
		"client.on('Constants.Events.MESSAGE_DELETE', () => {})",
		"client.on('Constants.Events.MESSAGE_UPDATE', () => {})",
		"client.on('Constants.Events.MESSAGE_BULK_DELETE', () => {})",
		"client.on('Constants.Events.MESSAGE_REACTION_ADD', () => {})",
		"client.on('Constants.Events.MESSAGE_REACTION_REMOVE', () => {})",
		"client.on('Constants.Events.MESSAGE_REACTION_REMOVE_ALL', () => {})",
		"client.on('Constants.Events.USER_UPDATE', () => {})",
		"client.on('Constants.Events.PRESENCE_UPDATE', () => {})",
		"client.on('Constants.Events.VOICE_STATE_UPDATE', () => {})",
		"client.on('Constants.Events.VOICE_BROADCAST_SUBSCRIBE', () => {})",
		"client.on('Constants.Events.VOICE_BROADCAST_UNSUBSCRIBE', () => {})",
		"client.on('Constants.Events.TYPING_START', () => {})",
		"client.on('Constants.Events.WEBHOOKS_UPDATE', () => {})",
		"client.on('Constants.Events.DISCONNECT', () => {})",
		"client.on('Constants.Events.RECONNECTING', () => {})",
		"client.on('Constants.Events.ERROR', () => {})",
		"client.on('Constants.Events.WARN', () => {})",
		"client.on('Constants.Events.DEBUG', () => {})",
		"client.on('Constants.Events.SHARD_DISCONNECT', () => {})",
		"client.on('Constants.Events.SHARD_ERROR', () => {})",
		"client.on('Constants.Events.SHARD_RECONNECTING', () => {})",
		"client.on('Constants.Events.SHARD_READY', () => {})",
		"client.on('Constants.Events.SHARD_RESUME', () => {})",
		"client.on('Constants.Events.INVALIDATED', () => {})",
		"client.on('Constants.Events.RAW', () => {})",
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
		{
			code: "client.on('inviteCreate', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.INVITE_CREATE instead of "inviteCreate".',
				},
			],
		},
		{
			code: "client.on('inviteDelete', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.INVITE_DELETE instead of "inviteDelete".',
				},
			],
		},
		{
			code: "client.on('guildUnavailable', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.GUILD_UNAVAILABLE instead of "guildUnavailable".',
				},
			],
		},
		{
			code: "client.on('guildMemberAdd', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.GUILD_MEMBER_ADD instead of "guildMemberAdd".',
				},
			],
		},
		{
			code: "client.on('guildMemberRemove', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.GUILD_MEMBER_REMOVE instead of "guildMemberRemove".',
				},
			],
		},
		{
			code: "client.on('guildMemberUpdate', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.GUILD_MEMBER_UPDATE instead of "guildMemberUpdate".',
				},
			],
		},
		{
			code: "client.on('guildMemberAvailable', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.GUILD_MEMBER_AVAILABLE instead of "guildMemberAvailable".',
				},
			],
		},
		{
			code: "client.on('guildMemberSpeaking', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.GUILD_MEMBER_SPEAKING instead of "guildMemberSpeaking".',
				},
			],
		},
		{
			code: "client.on('guildMembersChunk', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.GUILD_MEMBERS_CHUNK instead of "guildMembersChunk".',
				},
			],
		},
		{
			code: "client.on('guildIntegrationsUpdate', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.GUILD_INTEGRATIONS_UPDATE instead of "guildIntegrationsUpdate".',
				},
			],
		},
		{
			code: "client.on('roleCreate', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.GUILD_ROLE_CREATE instead of "roleCreate".',
				},
			],
		},
		{
			code: "client.on('roleDelete', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.GUILD_ROLE_DELETE instead of "roleDelete".',
				},
			],
		},
		{
			code: "client.on('roleUpdate', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.GUILD_ROLE_UPDATE instead of "roleUpdate".',
				},
			],
		},
		{
			code: "client.on('emojiCreate', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.GUILD_EMOJI_CREATE instead of "emojiCreate".',
				},
			],
		},
		{
			code: "client.on('emojiDelete', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.GUILD_EMOJI_DELETE instead of "emojiDelete".',
				},
			],
		},
		{
			code: "client.on('emojiUpdate', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.GUILD_EMOJI_UPDATE instead of "emojiUpdate".',
				},
			],
		},
		{
			code: "client.on('guildBanAdd', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.GUILD_BAN_ADD instead of "guildBanAdd".',
				},
			],
		},
		{
			code: "client.on('guildBanRemove', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.GUILD_BAN_REMOVE instead of "guildBanRemove".',
				},
			],
		},
		{
			code: "client.on('channelCreate', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.CHANNEL_CREATE instead of "channelCreate".',
				},
			],
		},
		{
			code: "client.on('channelDelete', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.CHANNEL_DELETE instead of "channelDelete".',
				},
			],
		},
		{
			code: "client.on('channelUpdate', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.CHANNEL_UPDATE instead of "channelUpdate".',
				},
			],
		},
		{
			code: "client.on('channelPinsUpdate', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.CHANNEL_PINS_UPDATE instead of "channelPinsUpdate".',
				},
			],
		},
		{
			code: "client.on('message', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.MESSAGE_CREATE instead of "message".',
				},
			],
		},
		{
			code: "client.on('messageDelete', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.MESSAGE_DELETE instead of "messageDelete".',
				},
			],
		},
		{
			code: "client.on('messageUpdate', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.MESSAGE_UPDATE instead of "messageUpdate".',
				},
			],
		},
		{
			code: "client.on('messageDeleteBulk', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.MESSAGE_BULK_DELETE instead of "messageDeleteBulk".',
				},
			],
		},
		{
			code: "client.on('messageReactionAdd', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.MESSAGE_REACTION_ADD instead of "messageReactionAdd".',
				},
			],
		},
		{
			code: "client.on('messageReactionRemove', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.MESSAGE_REACTION_REMOVE instead of "messageReactionRemove".',
				},
			],
		},
		{
			code: "client.on('messageReactionRemoveAll', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.MESSAGE_REACTION_REMOVE_ALL instead of "messageReactionRemoveAll".',
				},
			],
		},
		{
			code: "client.on('userUpdate', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.USER_UPDATE instead of "userUpdate".',
				},
			],
		},
		{
			code: "client.on('presenceUpdate', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.PRESENCE_UPDATE instead of "presenceUpdate".',
				},
			],
		},
		{
			code: "client.on('voiceStateUpdate', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.VOICE_STATE_UPDATE instead of "voiceStateUpdate".',
				},
			],
		},
		{
			code: "client.on('subscribe', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.VOICE_BROADCAST_SUBSCRIBE instead of "subscribe".',
				},
			],
		},
		{
			code: "client.on('unsubscribe', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.VOICE_BROADCAST_UNSUBSCRIBE instead of "unsubscribe".',
				},
			],
		},
		{
			code: "client.on('typingStart', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.TYPING_START instead of "typingStart".',
				},
			],
		},
		{
			code: "client.on('webhookUpdate', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.WEBHOOKS_UPDATE instead of "webhookUpdate".',
				},
			],
		},
		{
			code: "client.on('disconnect', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.DISCONNECT instead of "disconnect".',
				},
			],
		},
		{
			code: "client.on('reconnecting', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.RECONNECTING instead of "reconnecting".',
				},
			],
		},
		{
			code: "client.on('error', () => {})",
			errors: [{ message: 'Use Constants.Events.ERROR instead of "error".' }],
		},
		{
			code: "client.on('warn', () => {})",
			errors: [{ message: 'Use Constants.Events.WARN instead of "warn".' }],
		},
		{
			code: "client.on('debug', () => {})",
			errors: [{ message: 'Use Constants.Events.DEBUG instead of "debug".' }],
		},
		{
			code: "client.on('shardDisconnect', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.SHARD_DISCONNECT instead of "shardDisconnect".',
				},
			],
		},
		{
			code: "client.on('shardError', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.SHARD_ERROR instead of "shardError".',
				},
			],
		},
		{
			code: "client.on('shardReconnecting', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.SHARD_RECONNECTING instead of "shardReconnecting".',
				},
			],
		},
		{
			code: "client.on('shardReady', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.SHARD_READY instead of "shardReady".',
				},
			],
		},
		{
			code: "client.on('shardResume', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.SHARD_RESUME instead of "shardResume".',
				},
			],
		},
		{
			code: "client.on('invalidated', () => {})",
			errors: [
				{
					message: 'Use Constants.Events.INVALIDATED instead of "invalidated".',
				},
			],
		},
		{
			code: "client.on('raw', () => {})",
			errors: [{ message: 'Use Constants.Events.RAW instead of "raw".' }],
		},
	],
});
