import { useState } from "react";

import { Pagination } from "./pagination";

function PaginationDemo() {
   const [currentPage, setCurrentPage] = useState<number>(1);
   const [pageSize, setPageSize] = useState<number>(10);

   const handleChangePage = (val: number) => {
      setCurrentPage(val);
   };

   const handleChangePageSize = (val: number) => {
      setPageSize(val);
      setCurrentPage(1);
   };

   return (
      <Pagination
         currentPage={currentPage}
         limitPage={pageSize}
         totalPage={120}
         totalText={"Result: 120 item"}
         pageSizeOptions={[5, 10, 20, 30]}
         handleChangePage={handleChangePage}
         handleChangePageSize={handleChangePageSize}
      />
   );
}

export default PaginationDemo;
