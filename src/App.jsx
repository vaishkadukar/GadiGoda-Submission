import React from "react";
import ProductTable from "./ProductTable";

const App = () => {
  return (
    <>
      <div className="flex justify-center items-center p-6 bg-[#E1F2FB]">
        <div className="w-full">
          <ProductTable />
        </div>
      </div>
    </>
  );
};

export default App;
