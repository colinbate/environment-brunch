'use strict';
// Documentation for Brunch plugins:
// https://github.com/brunch/brunch/blob/master/docs/plugins.md
const DEFAULT_TOKEN = /BRUNCH_ENVIRONMENT/g;
class BrunchPlugin {
  constructor(config) {
    this.config = config && config.plugins && config.plugins.environment || {};
    this.token = this.config.token || DEFAULT_TOKEN;
    if (this.token instanceof RegExp) {
      this.search = this.token;
    } else {
      this.search = new RegExp(this.token, 'g');
    }
    if (config.env && config.env.length) {
      this.env = config.env[0];
    } else {
      this.env = 'development';
    }
  }

  compile(file) {
    file.data = file.data.replace(this.search, this.env);
    return Promise.resolve(file);
  }
}

BrunchPlugin.prototype.brunchPlugin = true;
BrunchPlugin.prototype.type = 'javascript';
BrunchPlugin.prototype.pattern = /\.[jt]sx?$/;

// Indicates which environment a plugin should be applied to.
// The default value is '*' for usual plugins and
// 'production' for optimizers.
// BrunchPlugin.prototype.defaultEnv = 'production';

module.exports = BrunchPlugin;