import React from "react";
import { render } from "@testing-library/react";
import List from "./List";
import people from "./data";

describe("List", () => {
  test("List", () => {
    const { getAllByTestId } = render(<List people={people} />);

    const headings = getAllByTestId("name-heading");
    const ages = getAllByTestId("age");
    expect(headings[0]).toHaveTextContent("Bertie Yates");
    expect(ages[0]).toHaveTextContent("29");
  });
});
