import { fn } from '@storybook/test';
import { LayerToggle } from '../components/core/LayerToggle';

export default {
    title: 'Core/LayerToggle',
    component: LayerToggle,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    args: {
        layerName: 'Example Layer',
        isActive: true,
        onChange: fn(),
    },
};

export const Active = {
    args: {
        isActive: true,
    },
};

export const Inactive = {
    args: {
        isActive: false,
    },
};
