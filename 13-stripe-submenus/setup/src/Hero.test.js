import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero component", () => {
  test("", () => {
    render(<Hero />);
    const heading = screen.getByTestId("heading");
    expect(heading).toHaveTextContent("Payments");
  });
});

