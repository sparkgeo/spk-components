import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CatalogCard } from "./CatalogCard";
import { BaseCatalog } from "./types";

const shortDescription = "Lorem ipsum dolor sit amet";
const longDescription =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus in quam quod amet eaque rem, sit ex consequatur delectus porro a aliquid neque aliquam illum odit fuga libero suscipit quisquam.";

const shortCatalog: BaseCatalog = {
    id: "1",
    title: "Catalog 1",
    description: shortDescription,
    temporalExtent: [new Date(Date.UTC(2024, 1, 1)), new Date(Date.UTC(2025, 1, 1))],
    indicatorTag: "API",
};

const longCatalog: BaseCatalog = {
    id: "2",
    title: "Catalog 2",
    description: longDescription,
    temporalExtent: [new Date(Date.UTC(2024, 1, 1)), new Date(Date.UTC(2025, 1, 1))],
};

describe("CatalogCard", () => {
    it("renders all components correctly", async () => {
        render(<CatalogCard {...shortCatalog} />);
        expect(screen.getByText("Catalog 1")).toBeInTheDocument();
        expect(
            screen.getByText(
                "2/1/2024, 12:00:00 AM UTC - 2/1/2025, 12:00:00 AM UTC",
            ),
        ).toBeInTheDocument();
        expect(screen.getByText(shortDescription)).toBeInTheDocument();
        expect(screen.queryByText("Read More")).not.toBeInTheDocument();
        expect(screen.queryByText("Browse")).toBeInTheDocument();
        expect(screen.queryByText("API")).toBeInTheDocument();
    });

    it("displays full and truncated description", async () => {
        const user = userEvent.setup();
        const maxLength = 10;
        render(
            <CatalogCard {...longCatalog} maxDescriptionLength={maxLength} />,
        );
        expect(screen.getByText("Catalog 2")).toBeInTheDocument();
        expect(
            screen.getByText(`${longDescription.slice(0, maxLength)}...`),
        ).toBeInTheDocument();
        const readMoreButton = screen.getByRole("button", {
            name: "Read more",
        });
        expect(readMoreButton).toHaveTextContent("Read More");
        await user.click(readMoreButton);
        expect(readMoreButton).toHaveTextContent("Read Less");
        expect(screen.getByText(`${longDescription}`)).toBeInTheDocument();
    });

    it("renders one date when only one date is provided", () => {
        const date = new Date(Date.UTC(2024, 1, 1, 9, 0, 0));
        render(<CatalogCard {...longCatalog} temporalExtent={[date]} />);
        expect(
            screen.getByText("2/1/2024, 9:00:00 AM UTC"),
        ).toBeInTheDocument();
    });

    it("renders one date when two dates are the same", () => {
        const date1 = new Date(Date.UTC(2024, 1, 1, 0, 0, 0));
        const date2 = new Date(Date.UTC(2024, 1, 1, 0, 0, 0));
        render(
            <CatalogCard {...longCatalog} temporalExtent={[date1, date2]} />,
        );
        expect(
            screen.getByText("2/1/2024, 12:00:00 AM UTC"),
        ).toBeInTheDocument();
    });

    it("renders custom description", () => {
        render(
            <CatalogCard
                {...longCatalog}
                renderDescription={() => <p>Custom Description</p>}
            />,
        );
        expect(screen.getByText("Custom Description")).toBeInTheDocument();
    });
});
