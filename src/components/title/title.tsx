import styled from "@emotion/styled";

const BasicTitle = styled.h1(
   {
      fontSize: 20,
   },
   (props) => ({ color: props.color }),
);

export const Title = () => {
   return <BasicTitle color="lightgreen">Basic Title</BasicTitle>;
};
