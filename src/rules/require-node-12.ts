import { createRule } from '../util';
import { AST_NODE_TYPES } from '@typescript-eslint/typescript-estree';
import { SEMVER_REGEX } from '../util/constants';

const incompatible = () => {
	const version = process.version;
	const [, major] = SEMVER_REGEX.exec(version.replace('v', '')) ?? [null, null];
	if (!major) return true;
	return parseInt(major, 10) < 12;
};

export = createRule({
	meta: {
		docs: {
			name: 'require-node-12',
			description: 'Require a minimum Node.js version of 12.',
			category: 'Requirement',
			recommended: 'error',
			url: 'https://github.com/fyko/eslint-plugin-discordjs-v12/tree/main/docs/rules/require-node-12.md',
		},
		type: 'problem',
		messages: {
			notUpToDate: 'Discord.js v12 requiries a minimum Node.js verison of 12.',
		},
	},
	create(context) {
		return {
			ImportDeclaration(node) {
				if (node.source.value === 'discord.js' && !incompatible()) {
					return context.report({ node, messageId: 'notUpToDate' });
				}
			},
			VariableDeclaration(node) {
				const dec = node.declarations[0];
				if (
					// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
					dec &&
					dec.init?.type === AST_NODE_TYPES.CallExpression &&
					dec.init.arguments.length
				) {
					const args = dec.init.arguments[0];
					if (args.type === AST_NODE_TYPES.Literal && args.value === 'discord.js' && !incompatible()) {
						return context.report({ node, messageId: 'notUpToDate' });
					}
				}
			},
		};
	},
});
