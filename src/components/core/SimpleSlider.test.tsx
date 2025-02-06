import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SimpleSlider } from "./SimpleSlider";

describe("SimpleSlider", () => {
    it("renders with label when showLabel prop is passed", () => {
        const stubOnChange = vi.fn();

        render(<SimpleSlider label="Some Fake Label" showLabel onChange={stubOnChange} />);
        expect(screen.getByText("Some Fake Label")).toBeInTheDocument();
    });

    it("renders with correct aria-label when showLabel flag is not provided", () => {
        const stubOnChange = vi.fn();

        render(<SimpleSlider label="Some Aria Label" onChange={stubOnChange}/>);

        const sliderElement = screen.getByLabelText('Some Aria Label');

        expect(sliderElement).toHaveAttribute('aria-label')
    });

    it("fires callback function on user interaction", async () => {
        const stubOnChange = vi.fn();

        render(<SimpleSlider label="Some Aria Label" onChange={stubOnChange}/>);

        const inputElement = screen.getByRole('slider');

        await userEvent.click(inputElement)

        expect(stubOnChange).toHaveBeenCalled();
    });
});
