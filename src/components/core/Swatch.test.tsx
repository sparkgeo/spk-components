import { render, screen } from "@testing-library/react";
import { Swatch } from "./Swatch";

describe("Swatch", () => {
    it("renders with correct color", () => {
        render(<Swatch color="#FF0000" />);
        // getByTestId isn't the best approach to selecting elements in tests
        // The preference would be to use a more semantic approach, using getByRole() or another method
        const swatchElement = screen.getByTestId("swatch");
        expect(swatchElement).toHaveStyle("background-color: #FF0000");
    });

    it("renders with label when provided", () => {
        render(<Swatch color="#FF0000" label="Red" />);
        expect(screen.getByText("Red")).toBeInTheDocument();
    });

    it("renders without label when not provided", () => {
        render(<Swatch color="#FF0000" />);
        const labelElement = screen.queryByTestId("swatch-label");
        expect(labelElement).toBeEmptyDOMElement();
    });

    it("renders with value and units when provided", () => {
        render(<Swatch color="#FF0000" value={50} units="%" />);
        expect(screen.getByText("50%")).toBeInTheDocument();
    });

    it("renders without value and units when not provided", () => {
        render(<Swatch color="#FF0000" />);
        const valueElement = screen.queryByTestId("swatch-value");
        expect(valueElement).toBeEmptyDOMElement();
    });

    it("renders with all props provided", () => {
        render(<Swatch color="#00FF00" label="Green" value={75} units="px" />);
        expect(screen.getByTestId("swatch")).toHaveStyle(
            "background-color: #00FF00",
        );
        expect(screen.getByText("Green")).toBeInTheDocument();
        expect(screen.getByText("75px")).toBeInTheDocument();
    });
});
