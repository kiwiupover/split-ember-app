module.exports = {
  'headerapp': [
    'split-app/helpers/**.*',
    'split-app/initializers/**.*',
    'split-app/instance-initializers/**.*',
    'split-app/services/**.*',
    'headerapp/templates/application.js',
    'headerapp/app.js',
    'headerapp/router.js',
    'headerapp/components/book-ends/*',
    'headerapp/resolver.js',
    'vendor/ember-cli/app-prefix.js',
    'vendor/ember-cli/app-suffix.js',
    'vendor/ember-cli/app-config.js',
    'vendor/ember-cli/app-boot.js'
  ],
  'lyrvapp': [
    // 'split-app/helpers/**.*',
    // 'split-app/initializers/**.*',
    // 'split-app/instance-initializers/**.*',
    // 'split-app/services/**.*',
    'lyrvapp/templates/application.js',
    'lyrvapp/app.js',
    'lyrvapp/router.js',
    'lyrvapp/resolver.js',
    'vendor/ember-cli/app-prefix.js',
    'vendor/ember-cli/app-suffix.js',
    'vendor/ember-cli/app-config.js',
    'vendor/ember-cli/app-boot.js'
  ]
}
