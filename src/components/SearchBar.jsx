import { useState } from "react";
import { Form } from "react-bootstrap";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  return (
    <Form>
      <Form.Control
        type="search"
        onChange={(event) => setSearch(event.target.value)}
        onKeyPress={setSearch}
        placeholder="Type the name of a city or town"
      />
    </Form>
  );
};
export default SearchBar;
