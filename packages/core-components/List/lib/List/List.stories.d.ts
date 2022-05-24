import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { List } from './List';
declare const _default: ComponentMeta<({ variant, ...rest }: {
    variant: "ul" | "ol";
    children?: React.ReactNode;
}) => JSX.Element>;
export default _default;
export declare const UnorderedList: ComponentStory<typeof List>;
export declare const OrderedList: ComponentStory<typeof List>;
