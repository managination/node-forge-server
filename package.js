Package.describe({
  name: 'mgn:node-forge-server',
  summary: 'require node-forge package on the server',
  version: '1.0.0',
  git: 'https://github.com/managination/node-forge-server.git'
});

Npm.depends({
              "node-forge": "0.6.18"
            });

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('node-forge-server.js', 'server');
  api.export("forge", "server");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mgn:node-forge-server');
  api.addFiles('node-forge-server-tests.js', 'server');
});
