import React from "react"
import './layerButtonReel.css';
import { IconButton } from "../core/IconButton";
import PropTypes from 'prop-types'

export const LayerButtonReel = ({buttons}) => (
    <div className="layerButtonReel">
        {buttons && Object.keys(buttons).map((key) => (
            <IconButton iconName={key} onClick={buttons[key]}/>
        ))}
    </div>
)

LayerButtonReel.proptypes = {
    buttons: PropTypes.objectOf(PropTypes.func).isRequired
}