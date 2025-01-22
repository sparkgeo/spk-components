import { useState } from "react";
import { DatePicker } from "../components";
import { DatePickerProps } from "../components/core/DatePicker";
import styles from "./DatePickerStories.module.css";

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
        const [date, setDate] = useState<Date | null>(new Date());

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

export const DatePickerWithNullStart = {
    args: {
        label: "Start with no date selected",
        helperText: "Click to select a date",
        errorMessage: "This is the error message",
    },
    parameters: {
        docs: {
            description: {
                story: "Demonstrates the DatePicker starting with no date selected (null value). This is useful for forms where the user needs to explicitly select a date and no default value should be provided.",
            },
        },
    },
    render: (args: StoryArgs) => {
        const [date, setDate] = useState<Date | null>(null);

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
        const [date, setDate] = useState<Date | null>(new Date());

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
        const [date, setDate] = useState<Date | null>(new Date());

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

export const DatePickerWithCustomStyles = {
    args: {
        label: "Styled DatePicker",
        helperText: "Custom styles applied via className",
        className: styles.largeDatePicker,
    },
    parameters: {
        docs: {
            description: {
                story: "Demonstrates how to customize the DatePicker appearance using className. This example shows how to apply custom sizing and borders using CSS modules.",
            },
        },
    },
    render: (args: StoryArgs) => {
        const [date, setDate] = useState<Date | null>(null);

        return (
            <>
                <div className={styles.container}>
                    <DatePicker
                        value={date}
                        onChange={setDate}
                        label="Default Styling"
                        helperText="No custom className applied"
                    />
                </div>

                <DatePicker
                    value={date}
                    onChange={setDate}
                    label={args.label}
                    helperText={args.helperText}
                    className={args.className}
                />
            </>
        );
    },
};
