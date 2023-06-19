module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "core": {
    "builder": "webpack5"
  },
  webpackFinal: async (config, { configType }) => {
    const ruleCssIndex = config.module.rules.findIndex(rule =>
      'test.css'.match(rule.test));
    const ruleScss = {
      ...config.module.rules[ruleCssIndex],
      test: /\.scss$/,
      use: [...config.module.rules[ruleCssIndex].use, 'sass-loader']
    };
    config.module.rules.splice(ruleCssIndex + 1, 0, ruleScss);
    return config;
  },
}


