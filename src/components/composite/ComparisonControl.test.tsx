import { vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ComparisonControl } from "./ComparisonControl";

describe("ComparisonControl", () => {
    // Common props used across tests
    const defaultProps = {
        onChange: vi.fn(),
        label: "Test Label"
    };

    it("renders with a visible label", () => {
        render(<ComparisonControl {...defaultProps} />);

        expect(
            screen.getByText(defaultProps.label)
        ).toBeInTheDocument();
    });

    it("renders with aria-label when showLabel prop is false", () => {
        render(
            <ComparisonControl
                {...defaultProps} 
                onChange={defaultProps.onChange}
                showLabel={false}
            />,
        );

        expect(
            screen.getByLabelText(defaultProps.label),
        ).toBeInTheDocument();
    });

    it("calls onChange when slider is clicked", async () => {
        const user = userEvent.setup();
        render(<ComparisonControl {...defaultProps} />);

        const sliderInput = screen.getByDisplayValue(50)
        await user.click(sliderInput);

        await waitFor(() => {
            expect(defaultProps.onChange).toHaveBeenCalled();
        });
    });
});
