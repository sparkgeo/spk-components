import { useState } from "react";
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
    label?: string;
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
        const [date, setDate] = useState<DateValue>(
            parseDate(new Date().toISOString().slice(0, 10)),
        );

        return (
            <DatePicker
                {...args}
                value={date}
                onChange={setDate}
                label={args.label}
                helperText={args.helperText || ""}
                errorMessage={args.errorMessage || ""}
            />
        );
    },
};
