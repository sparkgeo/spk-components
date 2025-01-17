import {StoryObj} from '@storybook/react';
import { InfoPanelContainer } from "../components";

export default {
    title: "Containers/Info Panel",
    component: InfoPanelContainer,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    argTypes: {
        position: {
          options: ['topLeft', 'topRight', 'centerLeft', 'centerRight', 'bottomLeft', 'bottomRight'],
          control: { type: 'radio' },
        },
    },
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "fullscreen",
        backgrounds: {
            default: "dark",
        },
    },
};

type Story = StoryObj<typeof InfoPanelContainer>;

export const Default : Story = {
    render: (args) => (
        <div style={{ height: '100dvh', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridTemplateRows: '1fr 1fr 1fr auto'}}>
            <InfoPanelContainer {...args}>
                <p style={{textAlign: 'center'}}>Some content goes here.</p>    
            </InfoPanelContainer>
        </div>
    ),
};
