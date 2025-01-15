# Sparkgeo Component Library

Storybook documentation: https://sparkgeo.github.io/spk-components/

---
**Note: This project still very much a work in progress and will be subject to breaking changes in the near future.**

This is an early attempt at creating a collection of useful and reusable React components focussed on geospatial web map applications. 

As many fundamental UI components already exist in the vast ecosystem of React UI libraries, the aim of this project is to provide larger and more complex components that are common within a geospatial UI, with a focus on open standards like [STAC](https://stacspec.org/). This aim will likely make the library's components more opinonated.

This project is open to contributions from anyone who is intrested. See [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## Features
???

## Running Storybook locally

Install all dependencies using:

```npm install```

Run storybook using the following command:

```npm run storybook```

This should automatically open a browser tab to the storybook server running on `localhost` port `6000` by default.

## Building the library

Run `npm run build` to build the library into the `dist` folder.

## Using components locally

If you want to use the components in a local react project locally, while testing, you can use [npm link](https://docs.npmjs.com/cli/v6/commands/npm-link).

- Build the library using the command above.
- Run `npm link` to link the library.
- In the directory of your react project run `npm link spk-components`
- You should now be able to import the components e.g. `import { GradientLegend, SimpleSlider } from 'spk-components';` in your project.
- If you want npm to watch for changes to spk-components and automatically rebuild run `npm run watch` instead of `npm run build`

### Removing the link

To remove the linked package:
- In your react project where you have been using the package run `npm unlink spk-components`
- In spk-components run `npm unlink`


## Contribution & Development
See [CONTRIBUTING.md](./CONTRIBUTING.md)

## License
See [LICENSE](./LICENSE)

## Authors
Created by [Sparkgeo](https://sparkgeo.com/)

See [contributors](./graphs/contributors) for a listing of individual contributors.

## Changes
See [CHANGES.md](./CHANGES.md).