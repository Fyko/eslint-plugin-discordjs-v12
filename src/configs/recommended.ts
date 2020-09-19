import * as _rules from '../rules';

const rules = Object.keys(_rules.default).reduce((prev: Record<string, 'error'>, rule: string) => {
	prev[rule] = 'error';
	return prev;
}, {});

export default {
	plugins: ['discordjs-v12'],
	rules,
};
