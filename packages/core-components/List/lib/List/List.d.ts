import { ReactNode } from 'react';
declare type Variant = 'ul' | 'ol';
declare type Props = {
    variant: Variant;
    children?: ReactNode;
};
export declare const List: ({ variant, ...rest }: Props) => JSX.Element;
export {};
