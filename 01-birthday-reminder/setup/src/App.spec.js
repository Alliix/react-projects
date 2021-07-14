import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("Button clears birthdays", () => {
    render(<App />);
    const btn = screen.getByRole("button");
    expect(btn).toHaveTextContent("clear all");

    const heading = screen.getByTestId("heading");
    expect(heading).toHaveTextContent("5 birthdays today");

    fireEvent.click(btn);
    expect(heading).toHaveTextContent("0 birthdays today");
  });
});
