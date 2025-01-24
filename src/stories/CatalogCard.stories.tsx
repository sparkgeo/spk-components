import type { Meta, StoryObj } from "@storybook/react";

import { CatalogCard } from "../components/core/CatalogCard";

const meta = {
    title: "Core/CatalogCard",
    component: CatalogCard,
} satisfies Meta<typeof CatalogCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const shortDescription = "Lorem ipsum dolor sit amet";
const longDescription =
    "The Kentucky From Above ([KyFromAbove](https://kyfromabove.ky.gov)) program has acquired aerial imagery and elevation (LiDAR) data for the Commonwealth of Kentucky since 2011. The catalog will be subdivided into separate catalogs for orthorectified imagery, oblique imagery, LiDAR-derived digital elevation models (DEM), and LiDAR point cloud data. The data acquired through KyFromAbove program is free to download and consume.  All imagery within the catalog uses the Cloud-Optimized Geotiff (COG) format.  With the exception of the Phase1 point cloud LAZ files, all LAZ files use the Cloud-Optimized Point Cloud (COPC) format.\n\nSee also:\n\n- [STAC Browser version](https://radiantearth.github.io/stac-browser/#/external/kyfromabove-stac.s3.us-west-1.amazonaws.com/catalog.json)";

export const Default: Story = {
    args: {
        id: "1",
        title: "This is a title",
        description: longDescription,
        temporalExtent: [
            new Date(2024, 1, 1),
            new Date(2025, 1, 1),
        ],
        indicatorTag: "API",
    },
};

export const MissingDate: Story = {
    args: {
        id: "1",
        title: "This is a title",
        description: shortDescription,
        temporalExtent: [new Date(2024, 1, 1)],
        indicatorTag: "Catalog",
    },
};

export const NoDate: Story = {
    args: {
        id: "1",
        title: "This is a title",
        description: shortDescription,
        indicatorTag: "Catalog",
    },
};

export const NoTitle: Story = {
    args: {
        id: "1",
        description: shortDescription,
        temporalExtent: [new Date(2024, 1, 1)],
        indicatorTag: "Catalog",
    },
}

export const CustomDescriptionRender: Story = {
    args: {
        id: "1",
        title: "This is a title",
        description: longDescription,
        temporalExtent: [new Date(2024, 1, 1)],
        indicatorTag: "Catalog",
        renderDescription: (description) => (
            <p style={{ color: "red" }}>{description}</p>
        ),
    },
};
