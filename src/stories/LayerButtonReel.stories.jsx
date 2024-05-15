import { fn } from '@storybook/test';
import { LayerButtonReel } from '../components/LayerButtonReel';
import { LayerIconButton } from '../components/LayerIconButton';

export default {
  title: 'Components/LayerButtonReel',
  component: LayerButtonReel,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Default = {
    render: (args) => (
        <LayerButtonReel {...args} >
            <LayerIconButton iconName='fill' onClick={fn}/>
            <LayerIconButton iconName='filter' onClick={fn}/>
            <LayerIconButton iconName='info' onClick={fn}/>
            <LayerIconButton iconName='trash' onClick={fn}/>
        </LayerButtonReel>
    )
};