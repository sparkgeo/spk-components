import { DatePicker } from "../components";

export default {
    title: "Core/DatePicker",
    component: DatePicker,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "padded",
    },
}

export const BasicDatePicker = {
    args: {
        label: "This is the label",
        description: "This is the description",
        errorMessage: "This is the error message",
    }
}