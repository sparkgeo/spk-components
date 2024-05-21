import { fn } from '@storybook/test';
import { IconButton } from '../components/core/IconButton';

export default {
  title: 'Core/IconButton',
  component: IconButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    onClick: fn(),
  },
};

export const Default = {
  args: {
    iconName: 'ellipsis',
  },
};
