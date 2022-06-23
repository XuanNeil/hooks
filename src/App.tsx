import {Pagination} from "@src/pagination";
import { useState } from "react";

function App() {
   const [currentPage, setCurrentPage] = useState<number>(1);
   const [pageSize, setPageSize] = useState<number>(10);
   const [total, setTotal] = useState<number>(123);
   const [pageSizeOptions, setPageSizeOptions] = useState([5, 10, 20, 30]);

   const handleChangePage = (val: number) => {
      setCurrentPage(val);
   };

   const handleChangePageSize = (val: number) => {
      setPageSize(val);
      setCurrentPage(1);
   };

   return (
      <div className="App">
         <p>Hooks Reactjs</p>
         <Pagination
            currentPage={currentPage}
            limitPage={pageSize}
            totalPage={total}
            totalText={`Result: ${total} item`}
            pageSizeOptions={pageSizeOptions}
            handleChangePage={handleChangePage}
            handleChangePageSize={handleChangePageSize}
         />
      </div>
   );
}

export default App;
