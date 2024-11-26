import { ReactNode, useState } from "react";
import { parseDate } from "@internationalized/date";
import { DateValue } from "react-aria-components";
import { DatePicker } from "../components";

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
};

interface StoryArgs {
    label?: string | ReactNode;
    helperText?: string;
    errorMessage?: string;
}

export const BasicDatePicker = {
    args: {
        label: "This is the label",
        helperText: "This is the helper text",
        errorMessage: "This is the error message",
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
            <div style={{ color: "red" }}>
                {`This is a label, but it's also a ReactNode (i.e. an element)`}
            </div>
        ),
        helperText: "This is the helper text",
        errorMessage: "This is the error message",
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
                aria-label="This is an accessible label"
            />
        );
    },
};
