import { BinnedLegend } from "../components/core/BinnedLegend";

export default {
    title: "Core/BinnedLegend",
    component: BinnedLegend,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        title: "Binned Legend",
        titleBelow: false,
        bins: [
            { label: "0-10", color: "red" },
            { label: "11-20", color: "green" },
            { label: "21-30", color: "blue" },
            { label: "31-40", color: "yellow" },
        ],
    },
};

export const HorizontalBinnedLegend = {
    args: {
        title: "Horizontal",
        titleBelow: false,
        displayType: "horizontal",
        bins: [
            { label: "0-10", color: "red" },
            { label: "11-20", color: "green" },
            { label: "21-30", color: "blue" },
            { label: "31-40", color: "yellow" },
        ],
    },
};

export const VerticalBinnedLegend = {
    args: {
        title: "Vertical",
        titleBelow: false,
        displayType: "vertical",
        bins: [
            { label: "0-10", color: "red" },
            { label: "11-20", color: "green" },
            { label: "21-30", color: "blue" },
            { label: "31-40", color: "yellow" },
        ],
    },
};

export const GridBinnedLegend = {
    args: {
        title: "Grid",
        titleBelow: false,
        displayType: "grid",
        bins: [
            { label: "0-10", color: "red" },
            { label: "11-20", color: "green" },
            { label: "21-30", color: "blue" },
            { label: "31-40", color: "yellow" },
        ],
    },
};

export const LongerBinnedLegend = {
    args: {
        title: "Longer Grid",
        titleBelow: false,
        displayType: "grid",
        bins: [
            { label: "0-10", color: "red" },
            { label: "11-20", color: "green" },
            { label: "21-30", color: "blue" },
            { label: "31-40", color: "yellow" },
            { label: "41-50", color: "purple" },
            { label: "51-60", color: "orange" },
            { label: "61-70", color: "pink" },
            { label: "71-80", color: "brown" },
            { label: "81-90", color: "black" },
            { label: "91-100", color: "grey" },
        ],
    },
};

export const TitleBelowBinnedLegend = {
    args: {
        title: "Title Below",
        titleBelow: true,
        bins: [
            { label: "0-10", color: "red" },
            { label: "11-20", color: "green" },
            { label: "21-30", color: "blue" },
            { label: "31-40", color: "yellow" },
        ],
    },
};
