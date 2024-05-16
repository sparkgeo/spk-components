import { fn } from '@storybook/test';
import { LayerCard } from '../components/LayerCard';
import { LayerToggle } from '../components/LayerToggle';
import { LayerButtonReel } from '../components/LayerButtonReel';
import {LayerIconButton} from '../components/LayerIconButton';

export default {
  title: 'Components/LayerCard',
  component: LayerCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Default = {
    render: (args) => (
        <LayerCard {...args}>
            <LayerToggle></LayerToggle>
            <LayerButtonReel>
                <LayerIconButton iconName='fill' onClick={fn}/>
                <LayerIconButton iconName='filter' onClick={fn}/>
                <LayerIconButton iconName='info' onClick={fn}/>
                <LayerIconButton iconName='trash' onClick={fn}/>
            </LayerButtonReel>
        </LayerCard>
    )
};
