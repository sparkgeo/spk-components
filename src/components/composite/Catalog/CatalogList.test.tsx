import { render, screen } from "@testing-library/react";
import { BaseCatalog } from "./types";
import { CatalogList } from "./CatalogList";

const shortDescription = "Lorem ipsum dolor sit amet";
const longDescription =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus in quam quod amet eaque rem, sit ex consequatur delectus porro a aliquid neque aliquam illum odit fuga libero suscipit quisquam.";

const shortCatalog: BaseCatalog = {
    id: "1",
    title: "Catalog 1",
    description: shortDescription,
    temporalExtent: [new Date(2024, 1, 1), new Date(2025, 1, 1)],
    indicatorTag: "API",
};

const longCatalog: BaseCatalog = {
    id: "2",
    title: "Catalog 2",
    description: longDescription,
    temporalExtent: [new Date(2024, 1, 1), new Date(2025, 1, 1)],
};

const catalogs = [shortCatalog, longCatalog];

describe("CatalogList", () => {
    it("renders catalog list", async () => {
        render(<CatalogList catalogs={catalogs} />);
        expect(screen.getByText("Catalogs")).toBeInTheDocument();
        expect(screen.getByTestId("catalogSize")).toHaveTextContent("2");
        expect(screen.getByText("Catalog 1")).toBeInTheDocument();
        expect(screen.getByText("Catalog 2")).toBeInTheDocument();
    });

    it("renders empty list", async () => {
        render(<CatalogList catalogs={null} />);
        expect(screen.getByText("Catalogs")).toBeInTheDocument();
        expect(screen.getByTestId("catalogSize")).toHaveTextContent("0");
        expect(screen.getByText("No catalogs available.")).toBeInTheDocument();

        render(<CatalogList catalogs={[]} />);
        expect(screen.getByText("No catalogs available.")).toBeInTheDocument();
    });

    it("renders loading state", async () => {
        render(<CatalogList catalogs={catalogs} isLoading />);
        expect(screen.getByText("Catalogs")).toBeInTheDocument();
        expect(screen.getByTestId("catalogSize")).toHaveTextContent("0");
        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
});
