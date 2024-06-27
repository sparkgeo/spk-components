# Sparkgeo Component Library

This is an early attempt at creating a collection of useful and reusable React components focussed on Web GIS applications. 

As many fundamental UI components are available in the vast ecosystem of React UI libraries that currently exsit, the current aim for this project is to provide larger and more complicated UI components that are commonly used within geospatial UI. This aim however will likely make the components within this library much more opinonated.

This project is open to contributions from anyone who is intrested. If you would like to participate any discussions please join the slack channel `#spk-ui-component-library`

Note: This project is still very much a WIP and will be subject to extreme/breaking changes for the near future.

## Running Storybook

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