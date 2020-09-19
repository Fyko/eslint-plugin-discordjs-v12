import { createRule } from '../util';
import { AST_NODE_TYPES } from '@typescript-eslint/typescript-estree';
import { events } from '../util/constants';

const eventStringValues = Object.values(events);
const eventEntries = Object.entries(events);

export = createRule({
	meta: {
		docs: {
			name: 'no-event-listener-string',
			description: 'Prefer to use Constants.Events from Discord.js.',
			category: 'Requirement',
			recommended: 'error',
			url: 'https://github.com/fyko/eslint-plugin-discordjs-v12/tree/main/docs/rules/require-intents.md',
		},
		type: 'problem',
		messages: {
			correct: 'Use Constants.Events.{{ constant }} instead of "{{ string }}".',
		},
	},
	create(context) {
		return {
			ExpressionStatement(node) {
				const { expression } = node;

				if (
					expression.type === AST_NODE_TYPES.CallExpression &&
					expression.callee.type === AST_NODE_TYPES.MemberExpression &&
					expression.callee.property.type === AST_NODE_TYPES.Identifier &&
					['once', 'on'].includes(expression.callee.property.name)
				) {
					const literal = expression.arguments.find((a) => a.type === AST_NODE_TYPES.Literal);

					if (
						literal?.type === AST_NODE_TYPES.Literal &&
						typeof literal.value === 'string' &&
						literal.value.length &&
						eventStringValues.includes(literal.value)
					) {
						// eslint-disable-next-line @typescript-eslint/no-unused-vars
						const [constant, string] = eventEntries.find(([_, v]) => v === literal.value) ?? [null, null];
						if (constant && string) return context.report({ node, messageId: 'correct', data: { constant, string } });
					}
				}
			},
		};
	},
});
