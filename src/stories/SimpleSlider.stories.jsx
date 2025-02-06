import React, { useState } from "react";
import { SimpleSlider } from "../components/core/SimpleSlider";

export default {
    title: "Core/SimpleSlider",
    component: SimpleSlider,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "fullscreen"
    },
    args: {
        label: "A Simple Slider",
        minValue: 0,
        maxValue: 100,
        step: 1,
        showLabel: true,
    }
};

export const Default = {
    render: (args) => {
        const [value, setValue] = useState(50);

        const handleChange = (newValue) => setValue(newValue);

        return <SimpleSlider onChange={handleChange} value={value} {...args} />
    }
}
