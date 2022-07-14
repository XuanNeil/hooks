import "./panigation.css";

import React, { useMemo, useState } from "react";

interface IPaginationProps {
   currentPage: number;
   totalPage: number;
   limitValue?: number;
   onChange?: (page: number) => void;
}

type ArrayPaging = (number | "space")[];
/*
 * space: dai dien cho '...'
 */
const makeArrayPagination = (totalPage: number, currentPage: number): ArrayPaging => {
   const newArray: ArrayPaging = [];

   if (totalPage <= 9) {
      if (totalPage >= 0 && totalPage <= 9) {
         for (let i = 1; i <= totalPage; i++) {
            newArray.push(i);
         }
      }

      return newArray;
   }

   if (currentPage <= 4) {
      for (let i = 1; i <= 6; i++) {
         newArray.push(i);
      }
      newArray.push("space");
      newArray.push(totalPage);

      return newArray;
   }

   if (currentPage >= totalPage - 4) {
      newArray.push(1);
      newArray.push("space");
      for (let i = 1; i <= 6; i++) {
         newArray.push(totalPage - (6 - i));
      }

      return newArray;
   }

   newArray.push(1);

   newArray.push("space");

   for (let i = currentPage - 2; i <= currentPage + 2; i++) {
      newArray.push(i);
   }
   newArray.push("space");
   newArray.push(totalPage);
   return newArray;
};

export const Pagination2: React.FC<IPaginationProps> = ({
   currentPage,
   totalPage,
   onChange = () => {},
}): JSX.Element => {
   const [page, setPage] = useState<number>(currentPage);

   const paging = useMemo(
      () => makeArrayPagination(totalPage, currentPage),
      [totalPage, currentPage],
   );

   const onChangePage = (value: number) => {
      setPage(value);
   };

   return (
      <div className="react-hook-pagination">
         <button
            disabled={page === 1}
            className="prev-page"
            onClick={() => onChange(page === 1 ? 1 : page - 1)}
         >
            Previous
         </button>
         {paging.map((item, index) => {
            if (item === "space") {
               return (
                  <div className="page-item-omit" key={`${item}-${index}`}>
                     {item}
                  </div>
               );
            }
            return (
               <div
                  className={`page-item ${item === page ? "current-page" : ""}`}
                  key={`${item}-${index}`}
                  onClick={() => onChangePage(item)}
               >
                  {item}
               </div>
            );
         })}
         <button
            disabled={page === totalPage}
            className="next-page"
            onClick={() => onChangePage(page === totalPage ? totalPage : page + 1)}
         >
            Next
         </button>
      </div>
   );
};
