import "./panigation.css";

import React, { useCallback, useEffect, useState } from "react";

interface IPaginationProps {
   currentPage: number;
   limitPage: number;
   pageSizeOptions?: Array<number>;
   totalPage: number;
   totalText?: string;
   handleChangePage?: (value: number) => void;
   handleChangePageSize?: (value: number) => void;
}

export const Pagination: React.FC<IPaginationProps> = (props): JSX.Element => {
   const {
      currentPage,
      limitPage,
      pageSizeOptions,
      totalPage,
      totalText,
      handleChangePage,
      handleChangePageSize,
   } = props;

   const count = Math.ceil(totalPage / limitPage);
   const [pageArr, setPageArr] = useState<(number | string)[]>([]);

   const pageChange = useCallback(() => {
      let newArr = [];
      let c = 1;
      if (count <= 6) {
         // while (c <= count) {
         //     newArr.push(c);
         //     c++;
         // }
         // ===
         for (c; c <= count; c++) {
            newArr.push(c);
         }
      } else if (count === 7) {
         if (currentPage <= 4) {
            newArr = [1, 2, 3, 4, 5, "···", 7];
         } else {
            newArr = [1, "···", 3, 4, 5, 6, 7];
         }
      } else {
         if (currentPage <= 3) {
            newArr = [1, 2, 3, 4, 5, "···", count];
         } else if (currentPage >= count - 2) {
            newArr = [1, "···", count - 4, count - 3, count - 2, count - 1, count];
         } else {
            newArr = [1, "···", currentPage - 1, currentPage, currentPage + 1, "···", count];
         }
      }
      setPageArr(newArr);
   }, [count, currentPage]);

   useEffect(() => {
      pageChange();
   }, [pageChange]);

   const onChangePage = (value: number) => {
      if (handleChangePage) {
         handleChangePage(value);
      }
   };

   const onChangePageSize = (value: number) => {
      if (handleChangePageSize) {
         handleChangePageSize(value);
      }
   };

   const makePageSizeOptions = () => {
      if (pageSizeOptions) {
         return (
            <select
               name="pageSize"
               className="page-size"
               id="react-hook-pagination-page-size"
               value={limitPage}
               onChange={(e) => onChangePageSize(Number(e.target.value))}
            >
               {pageSizeOptions.map((item, index) => (
                  <option key={index} value={item}>
                     {item} Limit
                  </option>
               ))}
            </select>
         );
      }
      return "";
   };

   return (
      <div className="react-hook-pagination">
         <button
            disabled={currentPage === 1}
            className="prev-page"
            onClick={() => onChangePage(currentPage === 1 ? 1 : currentPage - 1)}
         >
            Previous
         </button>
         {pageArr.map((item, index) => {
            if (item === "···") {
               return (
                  <div className="page-item-omit" key={`${item}-${index}`}>
                     {item}
                  </div>
               );
            }
            return (
               <div
                  className={`page-item ${item === currentPage ? "current-page" : ""}`}
                  key={`${item}-${index}`}
                  onClick={() => onChangePage(+item)}
               >
                  {item}
               </div>
            );
         })}
         <button
            disabled={currentPage === count}
            className="next-page"
            onClick={() => onChangePage(currentPage === count ? count : currentPage + 1)}
         >
            Next
         </button>
         {makePageSizeOptions()}
         {totalText && <div className="total">{totalText}</div>}
      </div>
   );
};
