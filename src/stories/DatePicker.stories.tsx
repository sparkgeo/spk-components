import { useState } from "react";
import { parseDate } from "@internationalized/date";
import { DateValue } from "react-aria-components";
import { DatePicker } from "../components";
import { DatePickerProps } from "../components/core/DatePicker";

export default {
    title: "Core/DatePicker",
    component: DatePicker,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
        docs: {
            description: {
                component:
                    "A date picker component built with the react-aria-components library.",
            },
        },
    },
    argTypes: {
        label: {
            control: "text",
        },
        helperText: {
            control: "text",
        },
        errorMessage: {
            control: "text",
        },
        "aria-label": {
            control: "text",
        },
        "aria-labelledby": {
            control: "text",
        },
    },
};

type StoryArgs = DatePickerProps;

export const BasicDatePicker = {
    args: {
        label: "This is the label",
        helperText: "This is the helper text",
        errorMessage: "This is the error message",
    },
    parameters: {
        docs: {
            description: {
                story: "A basic implementation of the DatePicker component showing all standard props: label, helper text, and error message. This represents the most common usage of the component.",
            },
        },
    },
    render: (args: StoryArgs) => {
        const [date, setDate] = useState<DateValue | null>(
            parseDate(new Date().toISOString().slice(0, 10)),
        );

        return (
            <DatePicker
                value={date}
                onChange={setDate}
                label={args.label || ""}
                helperText={args.helperText || ""}
                errorMessage={args.errorMessage || ""}
            />
        );
    },
};

export const DatePickerWithReactNodeLabel = {
    args: {
        label: (
            <div style={{ color: "blue" }}>
                {`This is a label, but it's also a ReactNode (i.e. an element)`}
            </div>
        ),
        helperText: "This is the helper text",
        errorMessage: "This is the error message",
    },
    parameters: {
        docs: {
            description: {
                story: "Demonstrates how to use a ReactNode as a label instead of a simple string. This allows for rich formatting and custom styling of the label content.",
            },
        },
    },
    render: (args: StoryArgs) => {
        const [date, setDate] = useState<DateValue | null>(
            parseDate(new Date().toISOString().slice(0, 10)),
        );

        return (
            <DatePicker
                value={date}
                onChange={setDate}
                label={args.label || ""}
                helperText={args.helperText || ""}
                errorMessage={args.errorMessage || ""}
            />
        );
    },
};

export const DatePickerNoLabelOrHelperText = {
    args: {
        errorMessage: "This is the error message",
        "aria-label": "This is an accessible label",
    },
    parameters: {
        docs: {
            description: {
                story: "Shows a minimal DatePicker configuration without visible label or helper text, but maintaining accessibility through aria-label. Useful for space-constrained UIs while ensuring accessibility standards are met.",
            },
        },
    },
    render: (args: StoryArgs) => {
        const [date, setDate] = useState<DateValue | null>(
            parseDate(new Date().toISOString().slice(0, 10)),
        );

        return (
            <DatePicker
                value={date}
                onChange={setDate}
                errorMessage={args.errorMessage || ""}
                aria-label={args["aria-label"] || ""}
            />
        );
    },
};

export const DatePickerWithMaxDate = {
    args: {
        label: "This is the label",
        errorMessage: "This is the error message",
    },
    parameters: {
        docs: {
            description: {
                story: "Illustrates how to set a maximum selectable date (maxValue) for the DatePicker. In this example, the maximum date is set to yesterday, preventing users from selecting future dates. Setting the date to a future date manually will display the error message. Note that all props available in react-aria components are supported (see https://react-spectrum.adobe.com/react-aria/DatePicker.html#props for more information).",
            },
        },
    },
    render: (args: StoryArgs) => {
        const [date, setDate] = useState<DateValue | null>(
            parseDate(new Date().toISOString().slice(0, 10)),
        );

        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() - 1);

        const maxDate = parseDate(tomorrow.toISOString().slice(0, 10));

        return (
            <DatePicker
                label={args.label || ""}
                value={date}
                onChange={setDate}
                errorMessage={args.errorMessage || ""}
                maxValue={maxDate}
            />
        );
    },
};
