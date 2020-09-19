import { createRule } from '../util';
import { AST_NODE_TYPES } from '@typescript-eslint/typescript-estree';

export = createRule({
	meta: {
		docs: {
			name: 'require-intents',
			description: 'Require websocket intents upon Client initialization.',
			category: 'Requirement',
			recommended: 'error',
			url: 'https://github.com/fyko/eslint-plugin-discordjs-v12/tree/main/docs/rules/require-intents.md',
		},
		type: 'problem',
		messages: {
			declareIntents: 'Client initialization requires websocket intent specification.',
		},
	},
	create(context) {
		return {
			NewExpression(node) {
				const { callee } = node;

				// handle new Discord.Client() & new Discord.Client({})
				if (
					callee.type === AST_NODE_TYPES.MemberExpression &&
					callee.object.type === AST_NODE_TYPES.Identifier &&
					callee.object.name === 'Discord' &&
					(!node.arguments.length ||
						!node.arguments.every((a) => a.type === AST_NODE_TYPES.ObjectExpression && a.properties.length !== 0))
				) {
					return context.report({ node, messageId: 'declareIntents' });
				}

				if (callee.type === AST_NODE_TYPES.Identifier && ['Client'].includes(callee.name)) {
					if (!node.arguments.length) return context.report({ node, messageId: 'declareIntents' });

					const options = node.arguments[0];
					if (options.type === AST_NODE_TYPES.ObjectExpression) {
						const properties = options.properties;
						const ws = properties.find(
							(p) =>
								p.type === AST_NODE_TYPES.Property && p.key.type === AST_NODE_TYPES.Identifier && p.key.name === 'ws',
						);

						if (!ws) {
							return context.report({ node, messageId: 'declareIntents' });
						}

						if (
							ws.type === AST_NODE_TYPES.Property &&
							ws.value.type === AST_NODE_TYPES.ObjectExpression &&
							ws.value.properties.length
						) {
							const properties = ws.value.properties;
							const intents = properties.find(
								(p) =>
									p.type === AST_NODE_TYPES.Property &&
									p.key.type === AST_NODE_TYPES.Identifier &&
									p.key.name === 'intents',
							);

							if (!intents) {
								return context.report({ node, messageId: 'declareIntents' });
							}
						}
					}
				}
			},
		};
	},
});
