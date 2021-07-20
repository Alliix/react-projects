import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Loading component", () => {
  
  test("Loading button renders", () => {
    render(<Loading />);
    const btn = screen.getByRole("heading");
    expect(btn).toHaveTextContent("loading...");
  });
});
