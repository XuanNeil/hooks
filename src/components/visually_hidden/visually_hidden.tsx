import {InputProps} from "@chakra-ui/react";
import styled from "@emotion/styled";
import {FC, ReactNode} from "react";

export const visuallyHiddenStyle = {
    border: "0px",
    clip: "rect(0px, 0px, 0px, 0px)",
    height: "1px",
    width: "1px",
    margin: "-1px",
    padding: "0px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute"
};

const VisuallyHiddenSpanComponent = styled.span`
  border: 0;
  clip: rect(0px, 0px, 0px, 0px);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
`;

const VisuallyHiddenInputComponent = styled.input`
  border: 0;
  clip: rect(0px, 0px, 0px, 0px);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
`;

interface IVisuallyHiddenProps extends Partial<InputProps>{
    children?: ReactNode;
}

export const VisuallyHidden: FC<IVisuallyHiddenProps> = ({children}) => {
   return <VisuallyHiddenSpanComponent>{children}</VisuallyHiddenSpanComponent>;
};

export const VisuallyHiddenInput: FC<IVisuallyHiddenProps> = () => {
    return <VisuallyHiddenInputComponent />;
};



