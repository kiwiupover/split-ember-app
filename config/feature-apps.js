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
    'split-app/resolver.js',
    'vendor/ember-cli/app-prefix.js',
    'vendor/ember-cli/app-suffix.js',
    'vendor/ember-cli/app-config.js',
    'vendor/ember-cli/app-boot.js'
  ],
  'lyrvapp': [
    'split-app/helpers/**.*',
    'split-app/initializers/**.*',
    'split-app/instance-initializers/**.*',
    'split-app/services/**.*',
    'lyrvapp/templates/application.js',
    'lyrvapp/app.js',
    'lyrvapp/router.js',
    'split-app/resolver.js',
    'vendor/ember-cli/app-prefix.js',
    'vendor/ember-cli/app-suffix.js',
    'vendor/ember-cli/app-config.js',
    'vendor/ember-cli/app-boot.js'
  ]
}

// module.exports = {
//   'premium': [
//     'adapters/offer.js',
//     'serializers/offer.js',
//     'serializers/offer-asset.js',
//     'models/offer.js',
//     'models/offer-asset.js',
//     'components/samus/**/*.*',
//     'components/pr/**/*.*',
//     'templates/svg/samus/*.*',
//
//     'templates/pr/*.*',
//     'services/claim-offer.js',
//     'services/premium-geo.js',
//     'utilities/samus/regions.js',
//     'utilities/urls/prime-urls.js',
//
//     'components/subscribe/**/*.*',
//     'components/new-feature/baxter/*.*',
//     'components/front-page/header-bar/premium/**/*.*'
//   ],
//   'game-details': [
//     'components/directory/game-details/**/*.*',
//     'components/channel-redesign/metadata-box/fl-md/*.*',
//
//     'utilities/urls/fuel.js'
//   ]
// }
