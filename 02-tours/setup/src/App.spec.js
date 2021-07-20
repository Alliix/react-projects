import React from "react";
import App from "./App";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import fetch from "jest-fetch-mock";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { enableFetchMocks } from "jest-fetch-mock";

describe("App component", () => {
  const tours = [
    {
      id: "rec6d6T3q5EBIdCfD",
      name: "Best of Paris in 7 Days Tour",
      info: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
      image:
        "https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg",
      price: "1,995",
    },
    {
      id: "recIwxrvU9HfJR3B4",
      name: "Best of Ireland in 14 Days Tour",
      info: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
      image:
        "https://dl.airtable.com/.attachments/6c24084000a3777064c5200a8c2ae931/04081a3e/ireland.jpeg",
      price: "3,895",
    },
  ];

  let container;
  const removeTour = jest.fn((id) => {
    tour = {};
  });

  beforeEach(() => {
    // if you have an existing `beforeEach` just add the following line to it
    fetch.resetMocks();
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("no tours fetch", async () => {
    enableFetchMocks();
    fetch.mockResponseOnce(JSON.stringify([]));

    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
      render(<App />, container);
    });

    const noTours = screen.getByText("no tours");
    expect(noTours).toBeInTheDocument();
    expect(fetch.mock.calls.length).toEqual(1);
  });

  it("fetch 2 tours", async () => {
    enableFetchMocks();
    fetch.mockResponseOnce(JSON.stringify(tours));

    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
      render(<App />, container);
    });

    const name1 = screen.getByText(tours[0].name);
    const name2 = screen.getByText(tours[1].name);
    expect(name1).toBeInTheDocument();
    expect(name2).toBeInTheDocument();
    expect(fetch.mock.calls.length).toEqual(1);
  });

  it("fetch 1 tour and clear list", async () => {
    enableFetchMocks();
    fetch.mockResponseOnce(JSON.stringify([tours[0]]));

    
    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
      render(<App />, container);
    });

    const name1 = screen.getByText(tours[0].name);
    expect(name1).toBeInTheDocument();
    expect(fetch.mock.calls.length).toEqual(1);

    const btn = screen.getByText("not interested");
    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);

    const noTours = screen.getByText("no tours");
    expect(noTours).toBeInTheDocument();
  });
});
