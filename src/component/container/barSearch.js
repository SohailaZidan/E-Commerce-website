import React from "react";
import { useContext, useState } from "react";
import { SearchContext } from "../context/searchCtxt";
import { Button, Form } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

export default function SearchBar(props) {
  const [currentValue, setCurrentValue] = useState("");
  const { searchHandler } = useContext(SearchContext);

  const filterData = () => {
    searchHandler(currentValue);
  };
  return (
    <Form className="d-flex col-lg-3" style={{border:'1px solid #2125293b'}}>
      <Form.Control
      style={{border:'none'}}
        type="search"
        placeholder="Search Product"
        className="me-2 text-success"
        aria-Labal="Search"
        value={currentValue}
        onChange={(e) => setCurrentValue(e.target.value)}
      />
      <Button onClick={filterData} variant="white" className="btn">
        <Search />
      </Button>
    </Form>
  );
}
