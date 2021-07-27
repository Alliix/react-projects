import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { AppProvider } from "./context";

describe("Navbar component", () => {
  test("Buttons", () => {
    render(
      <AppProvider>
        <Navbar />
      </AppProvider>
    );
    const btns = screen.getAllByRole("button");
    expect(btns[1]).toHaveTextContent("products");
  });
});
