import { fn } from "@storybook/test";
import { ComparisonControl } from "../components/composite/ComparisonControl";

export default {
    title: "Composite/ComparisonControl",
    component: ComparisonControl,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
        docs: {
            description: {
                component:
                    "A slider component for use within the map container and comparison layers",
            },
        },
    },
};

interface StoryArgs {
    label: string;
    showLabel: boolean;
}

export const ComparisonControlWithLabel = {
    args: {
        label: "This is the label",
        showLabel: true,
    },
    render: (args: StoryArgs) => (
        <ComparisonControl
            {...args}
            onChange={fn()}
        />
    )
};

export const ComparisonControlWithoutLabel = {
    args: {
        label: "This is the label",
        showLabel: false,
    },
    render: (args: StoryArgs) => (
        <ComparisonControl
            {...args}
            onChange={fn()}
        />
    )
};
