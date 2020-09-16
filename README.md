# eslint-plugin-discordjs-v12 
ESLint rules for Discord.js v12

## Install

```
$ npm install --save-dev eslint eslint-plugin-discordjs-v12
```

## Usage

Configure it in `package.json`.

<!-- EXAMPLE_CONFIGURATION:START -->
```json
{
  "name": "my-awesome-project",
  "eslintConfig": {
    "plugins": [
      "discordjs-v12"
    ],
    "rules": {
      "discordjs-v12/require-intents": "error",
      "discordjs-v12/no-event-listener-string": "error"
    }
  }
}
```
<!-- EXAMPLE_CONFIGURATION:END -->


## Rules

<!-- RULES:START -->
- [no-event-listener-string](docs/rules/no-event-listener-string.md) - Prefer to use Constants.Events from Discord.js.
- [require-intents](docs/rules/require-intents.md) - Require websocket intents upon Client initialization.

<!-- RULES:END -->

See [ESLint documentation](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information about extending configuration files.