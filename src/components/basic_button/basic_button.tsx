import styled from "@emotion/styled";

const Button = styled.button`
   color: hotpink;
`;

const Link = Button.withComponent("a");

/* eslint-disable @typescript-eslint/no-explicit-any */
const Container = styled.div((props: any) => ({
   display: "flex",
   flexDirection: props.column && "column",
}));

export const BasicButton = () => {
   return (
      <Container column>
         <Button>This is a button 1.</Button>
         <Button>This is a button 2.</Button>
         <Link>This is a Link</Link>
      </Container>
   );
};
