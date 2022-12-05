import { useState } from "react";
import { Form } from "react-bootstrap";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <Form>
      <Form.Control
        type="search"
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Type the name of a city or town"
      />
    </Form>
  );
};
export default SearchBar;
