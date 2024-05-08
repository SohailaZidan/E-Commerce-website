import { SearchContext } from "./searchCtxt";
import React, { useState } from "react";
import { useEffect } from "react";
export default function SearchProvider(props) {
  const BaseUrl = "https://dummyjson.com/products/category/mens-watches";
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(BaseUrl)
      .then((response) => response.json())
      .then((data) => {setData(data.products);
        setSearchData(data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  const [searchData, setSearchData] = useState(data);
  const [msg, setMsg] = useState("");

  const searchHandler = (searchData) => {
    const dataTrimed = searchData.trim().length > 1;
    const matched = data?.filter((product) =>
      product.title.toLowerCase().includes(searchData.toLowerCase())
    );

    if (dataTrimed && matched.length >= 1) {
      setSearchData(matched);
      setMsg("Results :");
    } else {
      setMsg("Not found , Try Again ..");
      setSearchData(data);
    }
  };

  let Values = { searchData, msg, searchHandler };
  return (
    <SearchContext.Provider value={Values}>
      {props.children}
    </SearchContext.Provider>
  );
}
