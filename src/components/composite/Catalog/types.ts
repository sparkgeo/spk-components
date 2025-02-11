export type TemporalExtent = [Date, Date?];

export type IndicatorTag = "API" | "Catalog";

export interface BaseCatalog {
    id: string;
    title?: string;
    description: string;
    temporalExtent?: TemporalExtent;
    indicatorTag?: IndicatorTag;
}
