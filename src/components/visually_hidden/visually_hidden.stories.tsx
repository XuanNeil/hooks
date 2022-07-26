
import {VisuallyHidden, VisuallyHiddenInput} from "@src/components/visually_hidden/visually_hidden";
import {ChangeEvent} from "react";


export default {
   title: "Components / Disclosure / Visually Hidden",
};

export const HiddenSpan = () => (
    <VisuallyHidden>This is visually hidden</VisuallyHidden>
);

export const HiddenInput = () => (
    <VisuallyHiddenInput
        defaultChecked={true}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
           console.log(event.target.checked);
        }}
    />
);