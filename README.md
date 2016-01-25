# environment-brunch

Replaces a defined token with the current environment in your js/ts files in Brunch.

The environment defaults to `development` if not set.

It will replace the string `BRUNCH_ENVIRONMENT` by default, but this can be overridden by setting the `token` config.

```js
module.exports.config = {
  plugins: {
    environment: {
      token: /\$!ENV!\$/g
    }
  }
}
```

You can also provide a string value and that will work as well. If you provide a regular expression, make sure that you set the `g` flag to replace all occurences, not just the first one.

The replacement is not wrapped in anything so make sure you account for that in your files.