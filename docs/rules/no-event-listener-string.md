# Require event listeners be initiailzed from the Constants object

Instead of creating event listeners with a literal, import and use the Constants object.

### Fail

```js
client.on('ready', () => console.log('Client is ready!'));
```

### Pass

```js
import { Constants } from 'discord.js';

client.on(Constants.Events.CLIENT_READY, () => console.log('Client is ready!'));

```
