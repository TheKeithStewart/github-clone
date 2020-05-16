const { override, babelInclude, addBundleVisualizer } = require('customize-cra');
const path = require('path');
const getYarnWorkspaces = require('get-yarn-workspaces');

module.exports = override(
  process.env.BUNDLE_VISUALIZE && addBundleVisualizer(),
  babelInclude(getYarnWorkspaces()),
);
