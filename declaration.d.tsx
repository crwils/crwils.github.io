import { AriaAttributes, DOMAttributes } from "react";

// declare module 'react' {
    export const Attributes = () => {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        type?: string;
    }
}