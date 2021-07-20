import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Tour from "./Tour";

describe("Tour component", () => {
  let tour = {
    id: "rec6d6T3q5EBIdCfD",
    name: "Best of Paris in 7 Days Tour",
    info: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
    image:
      "https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg",
    price: "1,995",
  };
  const removeTour = jest.fn(id => {tour = {}});

  test("Tour name", () => {
    render(<Tour {...tour} removeTour={removeTour} />);
    const name = screen.getByText(tour.name);
    expect(name).toBeInTheDocument();
  });

  test("Tour info show more button", () => {
    render(<Tour {...tour} removeTour={removeTour} />);
    const info = screen.getByTestId("info");
    expect(info).toHaveTextContent(`${tour.info.substring(0, 200)}...show more`);

    const btn = screen.getAllByRole('button')[0];
    fireEvent.click(btn);

    expect(info).toHaveTextContent(tour.info+'show less');
  });

  test("Not interested button", () => {
    const { rerender } = render(<Tour {...tour} removeTour={removeTour} />);
    const btn = screen.getByText('not interested')
    fireEvent.click(btn);

    rerender(<Tour {...tour} removeTour={removeTour} />);
    expect(removeTour.mock.calls.length).toBe(1);
    const info = screen.getByTestId("info");

    expect(info).toHaveTextContent('show more');
  });
});
