import { fn } from '@storybook/test';
import { LayerButtonReel } from '../components/composite/LayerButtonReel';

const BUTTONS = {
  fill: fn(),
  filter: fn(),
  info: fn(),
  trash: fn(),
};

export default {
  title: 'Composite/LayerButtonReel',
  component: LayerButtonReel,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export const SingleButton = {
  args: {
    buttons: { ellipsis: fn() },
  },
};

export const MultipleButtons = {
  args: {
    buttons: BUTTONS,
  },
};
