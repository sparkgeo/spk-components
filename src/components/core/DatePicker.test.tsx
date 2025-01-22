import { useState } from "react";
import { vi } from "vitest";
import { render, screen, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { parseDate } from "@internationalized/date";

import { DatePicker } from "./DatePicker";
import styles from "./DatePicker.module.css";

describe("DatePicker", () => {
    // Helper to create a test date value
    const testDate = new Date("2024-01-15");

    // Common props used across tests
    const defaultProps = {
        value: testDate,
        onChange: vi.fn(),
        label: "Test Date",
    };

    it("renders with a visible label", () => {
        render(<DatePicker {...defaultProps} />);

        // Check for label and date input
        expect(
            screen.getByText("Test Date", {
                selector: ".react-aria-Label",
            }),
        ).toBeInTheDocument();

        expect(screen.getByRole("presentation")).toBeInTheDocument();
    });

    it("renders with aria-label when no visible label is provided", () => {
        render(
            <DatePicker
                value={testDate}
                onChange={defaultProps.onChange}
                aria-label="Choose date"
            />,
        );

        // Verify the input is accessible
        expect(
            screen.getByRole("group", { name: "Choose date" }),
        ).toBeInTheDocument();
    });

    it("displays helper text when provided", () => {
        const helperText = "Select a valid date";
        render(<DatePicker {...defaultProps} helperText={helperText} />);

        expect(screen.getByText(helperText)).toBeInTheDocument();
    });

    it("displays error message when date is set above max value", async () => {
        const user = userEvent.setup();
        const errorMessage = "Date is required";
        const TestWrapper = () => {
            const [date, setDate] = useState<Date | null>(testDate);

            return (
                <DatePicker
                    {...defaultProps}
                    value={date}
                    onChange={setDate}
                    errorMessage={errorMessage}
                    maxValue={parseDate("2024-11-26")}
                />
            );
        };

        render(<TestWrapper />);

        // Get the year spinbutton
        const yearSpinbutton = screen.getByRole("spinbutton", {
            name: /year/i,
        });

        // Type a new year
        await user.type(yearSpinbutton, "2025");
        // Tab away to trigger validation
        await user.tab();

        expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });

    it("opens calendar popover when calendar button is clicked", async () => {
        const user = userEvent.setup();
        render(<DatePicker {...defaultProps} />);

        // Click the calendar button
        const calendarButton = screen.getByRole("button", {
            name: /open calendar/i,
        });
        await user.click(calendarButton);

        // Verify calendar is displayed
        expect(screen.getByRole("dialog")).toBeInTheDocument();
        expect(screen.getByRole("grid")).toBeInTheDocument();
    });

    it("calls onChange when a date is selected", async () => {
        const user = userEvent.setup();
        render(<DatePicker {...defaultProps} />);

        // Open calendar
        const calendarButton = screen.getByRole("button", {
            name: /open calendar/i,
        });
        await user.click(calendarButton);

        // Click a date (assuming it exists in the current month view)
        const dateButton = screen.getByRole("button", { name: /15/i });
        await user.click(dateButton);

        // Verify onChange was called
        await waitFor(() => {
            expect(defaultProps.onChange).toHaveBeenCalled();
        });
    });

    it("renders with ReactNode label", () => {
        render(
            <DatePicker
                {...defaultProps}
                label={<div data-testid="custom-label">Custom Label</div>}
            />,
        );

        expect(screen.getByTestId("custom-label")).toBeInTheDocument();
    });

    it("navigates between months using previous/next buttons", async () => {
        const user = userEvent.setup();
        render(<DatePicker {...defaultProps} />);

        // Open calendar
        const calendarButton = screen.getByRole("button", {
            name: /open calendar/i,
        });
        await user.click(calendarButton);

        // Get navigation buttons
        const header = screen.getByRole("banner");
        const prevButton = within(header).getByRole("button", {
            name: /previous/i,
        });
        const nextButton = within(header).getByRole("button", {
            name: /next/i,
        });

        // Navigate and verify month changes
        await user.click(nextButton);
        await user.click(prevButton);

        // Buttons should still be present after navigation
        expect(prevButton).toBeInTheDocument();
        expect(nextButton).toBeInTheDocument();
    });

    it("applies custom className alongside default styles", () => {
        const customClass = "custom-date-picker";

        const { container } = render(
            <DatePicker
                value={null}
                onChange={() => {}}
                className={customClass}
                aria-label="Test date picker"
            />,
        );

        const datePicker = container.querySelector(`.${styles.datePicker}`);
        expect(datePicker).toBeInTheDocument();
        expect(datePicker).toHaveClass(customClass, styles.datePicker);
        expect(datePicker?.classList.length).toBe(2);
    });

    it("works without a custom className", () => {
        const { container } = render(
            <DatePicker
                value={null}
                onChange={() => {}}
                aria-label="Test date picker"
            />,
        );

        const datePicker = container.querySelector(`.${styles.datePicker}`);
        expect(datePicker).toBeInTheDocument();
        expect(datePicker).toHaveClass(styles.datePicker);
        expect(datePicker?.classList.length).toBe(1);
    });
});
