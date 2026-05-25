"use client";

import React, { useState } from "react";
import { InputGroup, InputGroupText, Input } from "reactstrap";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <InputGroup>
      <InputGroupText style={{ backgroundColor: "#621220" }}>
        <i className="bi bi-search text-white" />
      </InputGroupText>
      <Input
        placeholder="Search Projects..."
        onChange={(event) => setSearchQuery(event.target.value)}
      />
    </InputGroup>
  );
}

export default SearchBar;
