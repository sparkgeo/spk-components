import { fn } from '@storybook/test';
import { LayerIconButton } from '../components/LayerIconButton';

export default {
  title: 'Components/LayerIconButton',
  component: LayerIconButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    onClick: fn()
  },
};

export const Default = {
  args: {
    iconName: 'ellipsis'
  },
};