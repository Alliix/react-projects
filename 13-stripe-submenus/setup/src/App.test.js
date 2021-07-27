import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
import { AppProvider } from "./context";

describe("App component", () => {
  test("Mouseover navbar shows submenu", () => {
    render(
      <AppProvider>
        <App />
      </AppProvider>
    );

    const navProd = screen.getByTestId("nav-products");
    expect(navProd).toBeInTheDocument();
    fireEvent.mouseOver(navProd);

    const submenuLinks = screen.getAllByTestId("submenu-link");
    expect(submenuLinks[0]).toBeInTheDocument();

    expect(submenuLinks[0]).toHaveTextContent("payment");
  });

  test("Opens and closes sidebar", () => {
    render(
      <AppProvider>
        <App />
      </AppProvider>
    );

    const sidebarBtn = screen.getByTestId("sidebar-btn");
    expect(sidebarBtn).toBeInTheDocument();

    fireEvent.click(sidebarBtn);

    const sidebar = screen.getByTestId("sidebar");
    expect(sidebar).toBeInTheDocument();
    expect(sidebar.classList).toContain("show");

    const closeSidebarBtn = screen.getByTestId("sidebar-close-btn");
    fireEvent.click(closeSidebarBtn);

    expect(sidebar.classList).not.toContain("show");
  });
});
