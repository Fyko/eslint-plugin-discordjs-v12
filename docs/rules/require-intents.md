# Require websocket intents upon Client initialization.

With the upcoming release of Discord Gateway v8, Gateway Intents are required. 

### Fail

```js
const client = new Client();
```

### Pass

```js
const client = new Client({ ws: { intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] } });
```
