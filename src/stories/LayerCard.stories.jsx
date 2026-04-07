import {useState} from "react";
import { fn } from "@storybook/test";
import { LayerCard } from "../components/composite/LayerCard";

export default {
    title: "Composite/Layer Card",
    component: LayerCard,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    parameters: {
    },
};

export const Default = {
    render: () => (
        <LayerCard
            layerName="Example Layer"
            onChange={fn()}
        />
    ),  
};

export const Active = {
    render: () => (
        <LayerCard
            layerName="Active Layer"
            isActive
            onChange={fn()}
            onShowInfo={fn()}
        >
            This is an example layercard that is active, as indicated by the toggle in the upper right corner.
        </LayerCard>
    ),
};

export const WithInfoButton = {
    render: () => {
        const [showInfo, setShowInfo] = useState(false);

        const handleShowInfo = () => {
            setShowInfo((prev) => !prev);
        }

        return (
            <LayerCard
                layerName="Layer with Info"
                onChange={fn()}
                onShowInfo={handleShowInfo}
            >
                <p>This is an example layercard that has an info button, as indicated by the i icon in the upper right corner. Clicking the info button will trigger the provided onShowInfo function.</p>
                {showInfo && <p>This text is conditionally rendered based on the showInfo state, which is toggled by the info button.</p>}
            </LayerCard>
        ); 
    }

};
