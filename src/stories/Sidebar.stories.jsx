import { fn } from '@storybook/test';
import { SideBar } from '../components/layout/Sidebar';
import { LayerCard } from '../components/composite/LayerCard';

const LAYERS = [
  {
    layerName: 'Layer One',
    isActive: false,
    onchange: fn(),
    buttons: {
      info: fn(),
    },
  },
  {
    layerName: 'Layer Two',
    isActive: false,
    onchange: fn(),
    buttons: {
      info: fn(),
      trash: fn(),
    },
  },
  {
    layerName: 'Layer Three',
    isActive: false,
    onchange: fn(),
    buttons: {
      fill: fn(),
      filter: fn(),
      info: fn(),
      trash: fn(),
    },
  },
  {
    layerName: 'Layer Four',
    isActive: false,
    onchange: fn(),
    buttons: {
      fill: fn(),
      filter: fn(),
      info: fn(),
      trash: fn(),
    },
  },
  {
    layerName: 'Layer Five',
    isActive: false,
    onchange: fn(),
    buttons: {
      info: fn(),
      trash: fn(),
    },
  },
  {
    layerName: 'Layer Six',
    isActive: false,
    onchange: fn(),
    buttons: {
      fill: fn(),
      filter: fn(),
      info: fn(),
      trash: fn(),
    },
  },
];

export default {
  title: 'Layout/Sidebar',
  component: SideBar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Empty = {

};

export const WithLayerCards = {
  render: () => (
    <SideBar>
      {LAYERS.map((layer) => (
        <LayerCard {...layer} />
      ))}
    </SideBar>
  ),
};
