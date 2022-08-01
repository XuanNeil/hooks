import styled from "@emotion/styled";

// const Child = styled.div`
//    color: red;
// `;
//or
const Child = styled.div({
   color: "red",
});

const Parent = styled.div`
   ${Child} {
      color: hotpink;
   }
`;

export const Layout = () => {
   return (
      <>
         <Parent>
            <Child>Day la children color pink</Child>
         </Parent>
         <Child>Day la children color red</Child>
      </>
   );
};
