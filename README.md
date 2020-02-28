# Webpack Config Examples
`yarn build-no-config` - Just by pointing webpack at a .js file it can bundle even with no configuration.

`yarn build-basic` - This is our first TypeScript build. Webpack needs to know how to handle our .tsx and .ts files so we configure it to use ts-loader.

`yarn build-small` - Here we are doing our basic build again but we’ve told Webpack to use smaller bundle sizes.

`yarn build-multi` - This is our first multiple entry point Webpack build. Webpack will make 3 different sites for us based on the 3 entry points we give it. Take a look at the tree shaking differences between them.

`yarn build-multi-bug` - There is a bug with tree shaking when doing multiple entry points. We avoided this in the previous build-multi by having webpack handle them separately.

`yarn build-multi-small` - In this final build we are using smaller bundle sizes for our multi build. Even though tree shaking still isn’t working here, we gain some other benefits because webpack sees that some of the entry points share code so it is sharing .js files.
