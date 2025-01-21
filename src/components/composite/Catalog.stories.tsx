import type { Meta, StoryObj } from "@storybook/react";

import { CalendarDateTime } from "@internationalized/date";
import { Catalog } from "./Catalog";
import { BaseCatalog } from "../core/CatalogCard";

const meta = {
    title: "Composite/Catalog",
    component: Catalog,
} satisfies Meta<typeof Catalog>;

export default meta;

type Story = StoryObj<typeof meta>;

const longDescription =
    "The Kentucky From Above ([KyFromAbove](https://kyfromabove.ky.gov)) program has acquired aerial imagery and elevation (LiDAR) data for the Commonwealth of Kentucky since 2011. The catalog will be subdivided into separate catalogs for orthorectified imagery, oblique imagery, LiDAR-derived digital elevation models (DEM), and LiDAR point cloud data. The data acquired through KyFromAbove program is free to download and consume.  All imagery within the catalog uses the Cloud-Optimized Geotiff (COG) format.  With the exception of the Phase1 point cloud LAZ files, all LAZ files use the Cloud-Optimized Point Cloud (COPC) format.\n\nSee also:\n\n- [STAC Browser version](https://radiantearth.github.io/stac-browser/#/external/kyfromabove-stac.s3.us-west-1.amazonaws.com/catalog.json)";

const catalogs: BaseCatalog[] = [
    {
        title: "Catalog 1",
        description: longDescription,
        temporalExtent: [
            new CalendarDateTime(2024, 1, 1, 12, 22, 11),
        ],
        indicatorTag: "API",
    },
    {
        title: "Catalog 2",
        description: "Catalog 2 Description",
        temporalExtent: [
            new CalendarDateTime(2024, 1, 1),
            new CalendarDateTime(2024, 1, 1),
        ],
        indicatorTag: "API",
    },
    {
        title: "Catalog 3",
        description: "Catalog 3 Description",
        temporalExtent: [
            new CalendarDateTime(2024, 1, 1),
            new CalendarDateTime(2025, 1, 1),
        ],
        indicatorTag: "API",
    },
];

export const Default: Story = {
    args: {
        catalogs,
    },
};
