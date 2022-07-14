import React from "react";

import { Pagination } from "./pagination";

export default {
   title: "Example/Pagination",
   component: Pagination,
};

export const Default = () => (
   <>
      {"a|"
         .repeat(10)
         .split("|")
         .map((_, index) => (
            <Pagination key={index} currentPage={1} limitPage={10} totalPage={123} />
         ))}
      <Pagination currentPage={1} totalPage={100} limitPage={20} />
      <Pagination currentPage={4} totalPage={100} limitPage={40} />
      <Pagination currentPage={7} totalPage={100} limitPage={60} />
      <Pagination currentPage={10} totalPage={100} limitPage={80} />
      <Pagination currentPage={15} totalPage={100} limitPage={100} />
      <Pagination currentPage={20} totalPage={100} limitPage={120} />
   </>
);
