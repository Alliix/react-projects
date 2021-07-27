import React from "react";
import { render, fireEvent, screen, shallow } from "@testing-library/react";
import Hero from "./Hero";
import { AppProvider, useGlobalContext } from "./context";

describe("Hero component", () => {
  test("Heading and button", () => {
    render(
      <AppProvider>
        <Hero />
      </AppProvider>
    );
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("Payments");

    const btn = screen.getByRole("button");
    expect(btn).toHaveTextContent("Start now");
  });
});
