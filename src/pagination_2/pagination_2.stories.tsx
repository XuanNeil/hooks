import React from "react";

import { Pagination2 } from "./pagination_2";

export default {
    title: "Example/Pagination2",
    component: Pagination2,
};

export const Default = () => (
    <>
        {"a|"
            .repeat(10)
            .split("|")
            .map((_, index) => (
                <Pagination2 key={index} currentPage={1} limitValue={10} totalPage={123} />
            ))}
        <Pagination2 currentPage={1} totalPage={100} limitValue={20} />
        <Pagination2 currentPage={4} totalPage={100} limitValue={30} />
        <Pagination2 currentPage={7} totalPage={100} limitValue={40} />
        <Pagination2 currentPage={10} totalPage={100} limitValue={80} />
        <Pagination2 currentPage={11} totalPage={100} limitValue={80} />
        <Pagination2 currentPage={12} totalPage={15} limitValue={10} />
    </>
);
