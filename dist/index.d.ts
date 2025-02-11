import { AriaSliderProps } from 'react-aria';
import { DatePickerProps as DatePickerProps_2 } from 'react-aria-components';
import { DateValue } from 'react-aria-components';
import { default as default_2 } from 'prop-types';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { JSX as JSX_3 } from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { ValidationResult } from 'react-aria-components';

declare interface BaseComparisonControlProps extends AriaSliderProps {
    onChange: (value: number | number[]) => void;
    label: ReactNode | string;
    showLabel?: boolean;
    value?: number;
}

declare interface BaseDatePickerProps extends Omit<DatePickerProps_2<DateValue>, "children" | "value" | "onChange" | "maxValue" | "minValue"> {
    /** The currently selected date */
    value: Date | null;
    /** Callback fired when the date changes */
    onChange: (value: Date | null) => void;
    /** Optional helper text displayed below the input */
    helperText?: string;
    /** Error message or error message generator function */
    errorMessage?: string | ((validationResult: ValidationResult) => string);
    /** Maximum date value allowed */
    maxValue?: Date;
    /** Minimum date value allowed */
    minValue?: Date;
}

/**
 * A composite component that renders a slider control with optional label and custom thumb icon.
 *
 * @param {BaseComparisonControlProps} props - The props for the component.
 * @returns {JSX.Element} The rendered slider control component.
 */
export declare const ComparisonControl: ({ label, showLabel, onChange, value, ...props }: BaseComparisonControlProps) => JSX_2.Element;

/**
 * A date picker component that uses the react-aria-component library.
 * @param {string|ReactNode} [props.label] - Label text or element to display above the input.
 *        Required if aria-label or aria-labelledby is not provided.
 * @param {string} [props.aria-label] - Accessible label for screen readers.
 *        Required if label or aria-labelledby is not provided.
 * @param {string} [props.aria-labelledby] - ID of element that labels this field.
 *        Required if label or aria-label is not provided.
 * @param {string} [props.helperText] - Optional helper text displayed below the input
 * @param {string|Function} [props.errorMessage] - Error message or function that generates
 *        error message based on validation result. If a function is provided, it receives
 *        a ValidationResult object and should return a string.
 * @param {Date|null} props.value - The currently selected date value. Uses the
 *        Date type from default JS Date class.
 * @param {Function} props.onChange - Callback fired when the date changes.
 *        Receives the new Date or null as its argument.
 * @param {ReactAriaDatePickerProps} props - Additional props from react-aria-components DatePicker.
 *        See react-aria-components documentation for all available props.
 * @paraam {string} [props.className] - CSS class name(s) to apply to the root element. Will be combined with default styles.
 * @returns {React.ReactElement} The rendered date picker component.
 */
export declare const DatePicker: ({ label, helperText, errorMessage, value, onChange, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, className, maxValue, minValue, ...props }: DatePickerProps) => JSX_3.Element;

declare type DatePickerProps = WithVisibleLabel | WithAriaLabel | WithAriaLabelledBy;

export declare function GradientLegend({ title, startColor, endColor, startNo, endNo, titleBelow, bins, precision, units }: {
    title: any;
    startColor?: string | undefined;
    endColor?: string | undefined;
    startNo: any;
    endNo: any;
    titleBelow?: boolean | undefined;
    bins?: number | undefined;
    precision?: number | undefined;
    units: any;
}): JSX_2.Element;

export declare namespace GradientLegend {
    export namespace propTypes {
        let title: default_2.Requireable<string>;
        let startColor: default_2.Requireable<string>;
        let endColor: default_2.Requireable<string>;
        let startNo: default_2.Requireable<number>;
        let endNo: default_2.Requireable<number>;
        let titleBelow: default_2.Requireable<boolean>;
        let bins: default_2.Requireable<number>;
        let precision: default_2.Requireable<number>;
        let units: default_2.Requireable<string>;
    }
}

export declare function IconButton({ onClick, iconName }: {
    onClick: any;
    iconName: any;
}): JSX_2.Element;

export declare namespace IconButton {
    export namespace propTypes {
        let iconName: default_2.Requireable<string>;
        let onClick: default_2.Validator<(...args: any[]) => any>;
    }
    export namespace defaultProps {
        let iconName_1: string;
            { iconName_1 as iconName };
    }
}

export declare const InfoPanelContainer: ({ children, position }: InfoPanelProps) => JSX_2.Element;

declare type InfoPanelProps = {
    children: ReactElement;
    position: Position;
};

export declare function LayerButtonReel({ buttons }: {
    buttons: any;
}): JSX_2.Element;

export declare namespace LayerButtonReel {
    export namespace propTypes {
        let buttons: default_2.Requireable<{
            [x: string]: ((...args: any[]) => any) | null | undefined;
        }>;
    }
    export namespace defaultProps {
        let buttons_1: null;
            { buttons_1 as buttons };
    }
}

export declare function LayerCard({ layerName, isActive, onChange, buttons, description, children }: {
    layerName: any;
    isActive: any;
    onChange: any;
    buttons: any;
    description: any;
    children: any;
}): JSX_2.Element;

export declare namespace LayerCard {
    export namespace propTypes {
        let layerName: default_2.Validator<string>;
        let isActive: default_2.Requireable<boolean>;
        let onChange: default_2.Validator<(...args: any[]) => any>;
        let buttons: default_2.Requireable<{
            [x: string]: ((...args: any[]) => any) | null | undefined;
        }>;
        let description: default_2.Requireable<string>;
        let children: default_2.Requireable<NonNullable<default_2.ReactNodeLike>>;
    }
}

export declare function LayerGroup({ groupName, children }: {
    groupName: any;
    children: any;
}): JSX_2.Element;

export declare namespace LayerGroup {
    export namespace propTypes {
        let groupName: default_2.Requireable<string>;
        let children: default_2.Validator<NonNullable<NonNullable<default_2.ReactNodeLike>>>;
    }
}

export declare function LayerToggle({ layerName, isActive, onChange }: {
    layerName: any;
    isActive: any;
    onChange: any;
}): JSX_2.Element;

export declare namespace LayerToggle {
    export namespace propTypes {
        let layerName: default_2.Requireable<string>;
        let isActive: default_2.Requireable<boolean>;
        let onChange: default_2.Validator<(...args: any[]) => any>;
    }
    export namespace defaultProps {
        let layerName_1: string;
            { layerName_1 as layerName };
        let isActive_1: boolean;
            { isActive_1 as isActive };
    }
}

export declare function MapContainer({ mapContainer, id, children }: {
    mapContainer: any;
    id: any;
    children: any;
}): JSX_2.Element;

export declare namespace MapContainer {
    export namespace propTypes {
        let mapContainer: default_2.Requireable<NonNullable<((...args: any[]) => any) | default_2.InferProps<{
            current: default_2.Requireable<Element>;
        }> | null | undefined>>;
        let children: default_2.Requireable<default_2.ReactNodeLike>;
        let id: default_2.Requireable<string>;
    }
}

export declare function NavContainer({ children }: {
    children: any;
}): JSX_2.Element;

export declare namespace NavContainer {
    export namespace propTypes {
        let children: default_2.Validator<NonNullable<NonNullable<default_2.ReactNodeLike>>>;
    }
}

declare type Position = 'topLeft' | 'topRight' | 'centerLeft' | 'centerRight' | 'bottomLeft' | 'bottomRight';

export declare function SidebarContainer({ showToggle, children }: {
    showToggle: any;
    children: any;
}): JSX_2.Element;

export declare namespace SidebarContainer {
    export namespace propTypes {
        let showToggle: default_2.Requireable<boolean>;
        let children: default_2.Validator<NonNullable<NonNullable<default_2.ReactNodeLike>>>;
    }
}

export declare function SimpleSlider({ units, label, onChange, min, max, step, value, }: {
    units: any;
    label: any;
    onChange: any;
    min: any;
    max: any;
    step: any;
    value: any;
}): JSX_2.Element;

export declare namespace SimpleSlider {
    export namespace propTypes {
        let onChange: default_2.Validator<(...args: any[]) => any>;
        let min: default_2.Validator<number>;
        let max: default_2.Validator<number>;
        let step: default_2.Validator<number>;
        let value: default_2.Requireable<number>;
        let label: default_2.Requireable<string>;
        let units: default_2.Requireable<string>;
    }
    export namespace defaultProps {
        let value_1: number;
            { value_1 as value };
        let units_1: string;
            { units_1 as units };
        let label_1: string;
            { label_1 as label };
    }
}

export declare function SliderControl({ title, units, sliderConfig }: {
    title: any;
    units: any;
    sliderConfig: any;
}): JSX_2.Element;

export declare namespace SliderControl {
    export namespace propTypes {
        let title: default_2.Validator<string>;
        let units: default_2.Validator<string>;
        let sliderConfig: default_2.Validator<({
            [x: string]: string | null | undefined;
        } | null | undefined)[]>;
    }
}

export declare function Stacked({ children }: {
    children: any;
}): JSX_2.Element;

export declare namespace Stacked {
    export namespace propTypes {
        let children: default_2.Validator<NonNullable<NonNullable<default_2.ReactNodeLike>>>;
    }
}

export declare function Standard({ align, children }: {
    align?: string | undefined;
    children: any;
}): JSX_2.Element;

export declare namespace Standard {
    export namespace propTypes {
        let align: default_2.Requireable<string>;
        let children: default_2.Validator<NonNullable<NonNullable<default_2.ReactNodeLike>>>;
    }
}

export declare const Swatch: ({ color, label, value, units }: SwatchProps) => JSX_2.Element;

export declare function SwatchLegend({ swatches }: {
    swatches: any;
}): JSX_2.Element;

export declare namespace SwatchLegend {
    export namespace propTypes {
        let swatches: default_2.Validator<({
            [x: string]: string | null | undefined;
        } | null | undefined)[]>;
    }
}

declare interface SwatchProps {
    color: string;
    label?: string;
    value?: number;
    units?: string;
}

declare interface WithAriaLabel extends BaseDatePickerProps {
    label?: never;
    /** Accessible label for screen readers */
    "aria-label": string;
    "aria-labelledby"?: never;
}

declare interface WithAriaLabelledBy extends BaseDatePickerProps {
    label?: never;
    "aria-label"?: never;
    /** ID of element that labels this field */
    "aria-labelledby": string;
}

declare interface WithVisibleLabel extends BaseDatePickerProps {
    /** Label text or element to display above the input */
    label: string | ReactNode;
    "aria-label"?: never;
    "aria-labelledby"?: never;
}

export { }


declare namespace BUTTONS {
    let fill: import("@vitest/spy").Mock<(...args: any[]) => any>;
    let filter: import("@vitest/spy").Mock<(...args: any[]) => any>;
    let info: import("@vitest/spy").Mock<(...args: any[]) => any>;
    let trash: import("@vitest/spy").Mock<(...args: any[]) => any>;
}
