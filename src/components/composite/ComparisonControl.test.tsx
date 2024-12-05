import { vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Label } from "react-aria-components";
import { ComparisonControl } from "./ComparisonControl";

describe("ComparisonControl", () => {
    // Common props used across tests
    const defaultProps = {
        onChange: vi.fn(),
        label: "Test Label"
    };

    describe('when label prop is a string', () => {
        it("renders with a visible label", () => {
            render(<ComparisonControl {...defaultProps} />);
    
            expect(
                screen.getByText(defaultProps.label)
            ).toBeInTheDocument();
    
            expect(
                screen.queryAllByLabelText(defaultProps.label).length
            ).toEqual(2);
        });
    
        it("renders with aria-label when showLabel prop is false", () => {
            render(
                <ComparisonControl
                    {...defaultProps} 
                    showLabel={false}
                />,
            );
    
            expect(
                screen.getByLabelText(defaultProps.label),
            ).toBeInTheDocument();
    
            expect(
                screen.queryAllByLabelText(defaultProps.label).length
            ).toEqual(1);
        });
    })

    describe('when label prop is a node', () => {
        const givenLabel = <Label data-testId='node-label'>{defaultProps.label}</Label>
        const givenProps = {...defaultProps, label: givenLabel}

        it("renders with a visible label", () => {
            render(<ComparisonControl {...givenProps}/>);
    
            expect(
                screen.getByTestId('node-label')
            ).toBeInTheDocument();
        });
    
        it("renders without aria-label when showLabel prop is false", () => {
            render(
                <ComparisonControl
                    {...givenProps} 
                    showLabel={false}
                />,
            );
    
            expect(
                screen.queryByRole('aria-label')
            ).toBeNull();
    
            expect(
                screen.queryByTestId('node-label')
            ).toBeNull();
        });
    })

    it("calls onChange when slider is clicked", async () => {
        const user = userEvent.setup();
        render(<ComparisonControl {...defaultProps} />);

        const sliderInput = screen.getByDisplayValue(50)
        await user.click(sliderInput);

        await waitFor(() => {
            expect(defaultProps.onChange).toHaveBeenCalled();
        });
    });

    it("renders with the correct value when passed as a prop", async () => {
        const givenValue = 42;

        render(<ComparisonControl {...defaultProps} value={givenValue} />);

        expect(screen.getByRole('slider')).toHaveValue(givenValue.toString());
        
    });

    it("renders with the default value when no prop is passed ", async () => {
        const expectedValue = 50

        render(<ComparisonControl {...defaultProps} />);

        expect(screen.getByRole('slider')).toHaveValue(expectedValue.toString());
        
    });
});
