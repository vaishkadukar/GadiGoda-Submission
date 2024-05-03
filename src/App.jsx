import React from "react";
import ProductTable from "./ProductTable";

const App = () => {
  return (
    <>
      <div className="flex justify-center items-center p-6">
        <div className="w-full">
          <ProductTable />
        </div>
      </div>
    </>
  );
};

export default App;
