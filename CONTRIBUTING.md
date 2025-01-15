# Contributing

## Overview
The goal of this component library is to provide valuable components for geospatial web applications. It does not aim to reinvent the wheel in terms of what standard component libraries already provide (e.g. Material UI, Radix etc.). It is not necessary to recreate very low level components that can be obtained elsewhere unless they are absolutely required.

See the [DatePicker](src/components/core/DatePicker.tsx) component as an example of a component which follows the standards.

## Components
Components are organized in the [components](src/components/) directory into:
- `core/`: Basic, single-purpose components
- `composite/`: More complex components that may combine multiple core components
- `containers/`: Container components for layout management
- `layouts/`: Layout components for structural organization


## Development Standards

### TypeScript and Type Safety
- Use TypeScript where possible. If you're modifying a component which was originally written in JS, please update it to use TypeScript
- Document component properties extensively with TypeScript interfaces or types
- Consider optional properties and ensure [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) standards are met

### Styling
- Style components with a [CSS module](https://github.com/css-modules/css-modules) file (`*.module.css`) in the same directory
- Use variables from [theme.css](src/components/styles/theme.css) where possible within new components
- Follow React Aria styling conventions:
  - Default styles are in [src/components/styles/react-aria](src/components/styles/react-aria) (do not modify)
  - To customize React Aria styles:
    1. Preferred: Use [`composes`](https://github.com/css-modules/css-modules/blob/master/docs/composition.md) to apply default styles within a CSS module. Relevant default CSS files must be imported into [theme.css](src/components/styles/theme.css)
    2. Alternative: If composing isn't practical, copy and modify React Aria styles directly in the component's CSS Module
    3. For global style overrides: Add to the bottom of [theme.css](src/components/styles/theme.css) (e.g., adding hover states or applying font properties using CSS variables)

### Documentation
- Add [JSDoc](https://jsdoc.app/about-getting-started) comments to provide better code hints for developers
- Create stories in the `stories` directory with `*.stories.tsx` extension demonstrating:
  - Basic usage
  - Common use cases
  - Props variations

### Component Properties
- Ensure flexibility for users by accepting both string and ReactNode types on for certain properties:
  - Like the [DatePicker's](src/components/core/DatePicker.tsx) `label` property. A developer may want to provide their own labels, or they may want to go with the default style.
  - Another example: A Button component's `children` could accept `string | ReactNode` to allow either text or custom elements (icons, badges, etc.)
- Make properties optional where appropriate and provide sensible defaults

### Testing
- Create a `*.test.tsx` file using Vitest and React Testing Library
- Focus on testing:
  - Core functionality
  - User interactions
  - Accessibility features
  - Error states
  - Desktop vs touch device behavior (e.g. no hover on state on touch device)

## Getting Started
1. Request to be added as a collaborator or fork the repository
2. Create a new branch for your component
3. Follow the standards above
4. Submit a pull request with:
   - Component implementation
   - Tests
   - Stories
   - Documentation

## New Component Checklist

### Setup
- [ ] Determine appropriate directory (`core/`, `composite/`, `containers/`, or `layouts/`)
- [ ] Create TypeScript component file (`.tsx`)
- [ ] Create CSS Module file (`.module.css`)
- [ ] Create test file (`.test.tsx`)
- [ ] Create story file in `stories` directory (`.stories.tsx`)

### Implementation
- [ ] Write component using TypeScript
- [ ] Implement React Aria hooks for accessibility
- [ ] Define prop types with TypeScript interfaces/types
- [ ] Add JSDoc comments for better code completion
- [ ] Allow ReactNode alternatives for text content where appropriate
- [ ] Use theme.css variables for styling
- [ ] Style with CSS Modules (preferably using `composes` from React Aria base styles)

### Testing
- [ ] Basic functionality tests
- [ ] User interaction tests
- [ ] Accessibility tests
- [ ] Error state tests
- [ ] Touch device functionality (e.g. no hover on state on touch device)


### Documentation
- [ ] Add JSDoc component description
- [ ] Document all props with JSDoc
- [ ] Create basic usage story
- [ ] Create stories for common use cases
- [ ] Create stories showing props variations

### Pre-submission
- [ ] Component follows existing patterns (see DatePicker example)
- [ ] All tests pass
- [ ] Stories work as expected
- [ ] Props are properly typed
- [ ] ARIA standards are met


## Questions?
If you're unsure about any aspect of component development, please reach out or open an issue for discussion before starting your implementation.