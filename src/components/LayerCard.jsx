import React from "react";
import './layerCard.css'

export const LayerCard = ({children}) => (
    <div className="layerCard">
        <div className="layerCardWrapper">
            {children}
        </div>
        <hr></hr>
    </div>
)