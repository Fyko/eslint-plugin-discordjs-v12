import { readFileSync, writeFileSync } from 'fs';
// @ts-ignore
import inject from 'inject-in-tag';
import { join } from 'path';
import recommended from '../src/configs/recommended';
import { array } from '../src/rules';

const README = join(process.cwd(), 'README.md');
const readme = readFileSync(README);

const desc = array.map(
	(r) => `- [${r.meta.docs.name}](docs/rules/${r.meta.docs.name}.md) - ${r.meta.docs.description}`,
);

const injected = inject(
	{
		RULES: `\n${desc.join('\n')}\n\n`,
		EXAMPLE_CONFIGURATION: `\n\`\`\`json\n${JSON.stringify(recommended, null, 2)}\n\`\`\`\n`,
	},
	readme.toString('utf-8'),
);

writeFileSync(README, injected);
