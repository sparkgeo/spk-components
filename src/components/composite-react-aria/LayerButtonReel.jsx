import PropTypes, { string } from "prop-types";
import React from "react";
import {Button, Toolbar} from 'react-aria-components'
import { Icon } from "../core/Icon";

import "./LayerButtonReel.css";

export const LayerButtonReel = ({ buttons, label }) => (
    <Toolbar aria-label={label}>
        {buttons &&
            Object.keys(buttons).map((key) => (
                <Button onClick={buttons[key]}><Icon iconName={key} /></Button>
            ))}
    </Toolbar>
);

LayerButtonReel.propTypes = {
    buttons: PropTypes.objectOf(PropTypes.func),
    label: string.isRequired,
};

LayerButtonReel.defaultProps = {
    buttons: null,
};
