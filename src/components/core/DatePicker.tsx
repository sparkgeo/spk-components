import { useState, JSX, ReactNode } from "react";
import type {
    ValidationResult,
    DatePickerProps as ReactAriaDatePickerProps,
    DateValue,
} from "react-aria-components";
import {
    Button,
    Calendar,
    CalendarCell,
    CalendarGrid,
    DateInput,
    DatePicker as ReactAriaDatePicker,
    DateSegment,
    Dialog,
    FieldError,
    Group,
    Heading,
    Label,
    Popover,
    Text,
} from "react-aria-components";
import { useHover } from "react-aria";

import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the module, not the default react-aria css file (src/components/core/DatePicker.css)
import styles from "./DatePicker.module.css";

// Base interface with explicit types and descriptions
interface BaseDatePickerProps
    extends Omit<ReactAriaDatePickerProps<DateValue>, "children"> {
    /** The currently selected date */
    value: DateValue | null;
    /** Callback fired when the date changes */
    onChange: (value: DateValue | null) => void;
    /** Optional helper text displayed below the input */
    helperText?: string;
    /** Error message or error message generator function */
    errorMessage?: string | ((validationResult: ValidationResult) => string);
}

interface WithVisibleLabel extends BaseDatePickerProps {
    /** Label text or element to display above the input */
    label: string | ReactNode;
    "aria-label"?: never;
    "aria-labelledby"?: never;
}

interface WithAriaLabel extends BaseDatePickerProps {
    label?: never;
    /** Accessible label for screen readers */
    "aria-label": string;
    "aria-labelledby"?: never;
}

interface WithAriaLabelledBy extends BaseDatePickerProps {
    label?: never;
    "aria-label"?: never;
    /** ID of element that labels this field */
    "aria-labelledby": string;
}

export type DatePickerProps =
    | WithVisibleLabel
    | WithAriaLabel
    | WithAriaLabelledBy;

/**
 * A date picker component that uses the react-aria-component library.
 * @param {string|ReactNode} [props.label] - Label text or element to display above the input.
 *        Required if aria-label or aria-labelledby is not provided.
 * @param {string} [props.aria-label] - Accessible label for screen readers.
 *        Required if label or aria-labelledby is not provided.
 * @param {string} [props.aria-labelledby] - ID of element that labels this field.
 *        Required if label or aria-label is not provided.
 * @param {string} [props.helperText] - Optional helper text displayed below the input
 * @param {string|Function} [props.errorMessage] - Error message or function that generates
 *        error message based on validation result. If a function is provided, it receives
 *        a ValidationResult object and should return a string.
 * @param {DateValue|null} props.value - The currently selected date value. Uses the
 *        DateValue type from '@internationalized/date'.
 * @param {Function} props.onChange - Callback fired when the date changes.
 *        Receives the new DateValue or null as its argument.
 * @param {ReactAriaDatePickerProps} props - Additional props from react-aria-components DatePicker.
 *        See react-aria-components documentation for all available props.
 * @returns {React.ReactElement} The rendered date picker component.
 */
export const DatePicker = ({
    label,
    helperText,
    errorMessage,
    value,
    onChange,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    ...props
}: DatePickerProps): JSX.Element => {
    const [isButtonHovered, setIsButtonHovered] = useState(false);
    const { hoverProps, isHovered } = useHover({});

    return (
        <ReactAriaDatePicker
            className={styles.datePicker}
            value={value}
            onChange={onChange}
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledBy}
            {...props}
        >
            {label && <Label>{label}</Label>}
            <Group>
                <DateInput
                    // Hovering input or button will show hover state on date innput
                    className={`${styles.dateInput} ${isHovered || isButtonHovered ? styles.hoverDatepicker : ""}`}
                    {...hoverProps}
                >
                    {(segment) => <DateSegment segment={segment} />}
                </DateInput>
                <Button
                    aria-label="Open calendar"
                    onHoverChange={(isHovering) =>
                        setIsButtonHovered(isHovering)
                    }
                >
                    <FontAwesomeIcon icon={faCalendar} />
                </Button>
            </Group>
            {helperText && <Text slot="description">{helperText}</Text>}
            <FieldError>{errorMessage}</FieldError>
            <Popover>
                <Dialog>
                    <Calendar>
                        <header>
                            <Button slot="previous">◀</Button>
                            <Heading />
                            <Button slot="next">▶</Button>
                        </header>
                        <CalendarGrid>
                            {(date) => <CalendarCell date={date} />}
                        </CalendarGrid>
                    </Calendar>
                </Dialog>
            </Popover>
        </ReactAriaDatePicker>
    );
};
