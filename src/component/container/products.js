import React, { useContext } from "react";
import { SearchContext } from "../context/searchCtxt";
import Mycard from "./mycard";
import { useParams } from "react-router-dom";
export default function Products() {
  const { searchData, msg } = useContext(SearchContext);
  const {id} = useParams();
  const product = searchData.find((item)=> item.id ===id)

  return (
    <>
      <div>
        <div className="fw-bolder text-center">{msg}</div>
      </div>

      <div className="row row-cols-3 p-5 container mx-auto gap-4 justify-content-center ">
        {searchData?.map((item, index) => {
          return (
            <Mycard
              key={index}
              title={item.title}
              Items={item}
              price={item.price}
              instock={item.inStock}
              thumbnail={item.thumbnail}
            />
          );
        })}
      </div>
    </>
  );
}
