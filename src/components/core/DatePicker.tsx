import type { DateValue, ValidationResult } from "react-aria-components";
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
import { useState } from "react";
import styles from "./DatePicker.module.css";

/**
 * Props for the DatePicker component.
 * @interface DatePickerProps
 * @property {DateValue} value - The currently selected date.
 * @property {(value: DateValue) => void} onChange - The function to call when the date is changed.
 * @property {string} [label] - The label for the date picker.
 * @property {string} [helperText] - The helper texts for the date picker.
 * @property {string | ((validationResult: ValidationResult) => string)} [errorMessage] - The error message to display, or a function that returns the error message based on the validation result.
 * @see [react-aria-components datepicker value documentation](https://react-spectrum.adobe.com/react-aria/DatePicker.html#value) for possible types for the value prop.
 */
interface DatePickerProps {
    value: DateValue;
    onChange: (_value: DateValue) => void;
    label?: string;
    helperText?: string;
    errorMessage?: string | ((_validationResult: ValidationResult) => string);
}

/**
 * A date picker component that uses the react-aria-components library.
 * @param {DatePickerProps} props - The component props.
 * @returns {React.ReactElement} - The rendered date picker component.
 */
export const DatePicker = ({
    label,
    helperText,
    errorMessage,
    value,
    onChange,
}: DatePickerProps) => {
    const [isButtonHovered, setIsButtonHovered] = useState(false);
    const { hoverProps, isHovered } = useHover({});

    return (
        <ReactAriaDatePicker
            className={styles.datePicker}
            value={value}
            onChange={onChange}
        >
            <Label>{label}</Label>
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
