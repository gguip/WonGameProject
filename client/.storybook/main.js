module.exports = {
  "stories": [
    "../src/components/**/stories.tsx",
    "../src/components/**/stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-controls"
  ],
  "framework": "@storybook/react"
}