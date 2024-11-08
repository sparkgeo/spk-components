import type {
    DatePickerProps as ReactAriaDatePickerProps,
    DateValue,
    ValidationResult,
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

import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the module, not the default react-aria css file (src/components/core/DatePicker.css)
import styles from "./DatePicker.module.css";

interface DatePickerProps<T extends DateValue>
    extends ReactAriaDatePickerProps<T> {
    label?: string;
    description?: string;
    // eslint-disable-next-line no-unused-vars
    errorMessage?: string | ((validation: ValidationResult) => string);
}

export const DatePicker = <T extends DateValue>({
    label,
    description,
    errorMessage,
}: DatePickerProps<T>) => (
    <ReactAriaDatePicker className={`${styles["react-aria-DatePicker"]}`}>
        <Label>{label}</Label>
        <Group>
            <DateInput>
                {(segment) => <DateSegment segment={segment} />}
            </DateInput>
            <Button aria-label="Open calendar">
                <FontAwesomeIcon icon={faCalendar} />
            </Button>
        </Group>
        {description && <Text slot="description">{description}</Text>}
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
