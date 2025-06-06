/**
 *
 * A set of Avatars can be displayed together using the AvatarGroup component.
 *
 * [Live Demo](https://www.primereact.org/avatar/)
 *
 * @module avatargroup
 *
 */
import * as React from 'react';
import { ComponentHooks } from '../componentbase/componentbase';
import { PassThroughOptions } from '../passthrough';
import { PassThroughType } from '../utils/utils';

export declare type AvatarGroupPassThroughType<T> = PassThroughType<T, AvatarGroupPassThroughMethodOptions>;

/**
 * Custom passthrough(pt) option method.
 */
export interface AvatarGroupPassThroughMethodOptions {}

/**
 * Custom passthrough(pt) options.
 * @see {@link AvatarGroupProps.pt}
 */
export interface AvatarGroupPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: AvatarGroupPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to manage all lifecycle hooks
     * @see {@link ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Defines valid properties in Avatar component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface AvatarGroupProps extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> {
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {AvatarGroupPassThroughOptions}
     */
    pt?: AvatarGroupPassThroughOptions;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * **PrimeReact - AvatarGroup**
 *
 * _A set of Avatars can be displayed together using the AvatarGroup component._
 *
 * [Live Demo](https://www.primereact.org/avatargroup/)
 * --- ---
 * ![PrimeReact](https://primefaces.org/cdn/primereact/images/logo-100.png)
 *
 * @group Component
 */
export declare class AvatarGroup extends React.Component<AvatarGroupProps, any> {
    /**
     * Used to get container element.
     * @return {HTMLDivElement | null} Container element
     */
    public getElement(): HTMLDivElement | null;
}
