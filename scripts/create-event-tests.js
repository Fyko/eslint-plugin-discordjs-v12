/* eslint-disable */ 

const { events } = require('../dist/src/util/constants');
const eventStringValues = Object.values(events);
const eventEntries = Object.entries(events);

const invalid = eventEntries.map(([constant, string]) => ({
	code: `client.on('${string}', () => {})`,
	errors: [{ message: `Use Constants.Events.${constant} instead of "${string}".` }],
}));

const valid = eventEntries.map(([constant]) => `client.on('Constants.Events.${constant}', () => {})`);
console.log(valid);
