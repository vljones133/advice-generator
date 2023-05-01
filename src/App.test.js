import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("displays advice when loaded", async () => {
    const advice = {
      slip: {
        id: 42,
        advice: "Do or do not. There is no try.",
      },
    };
    const advice2 = {
      slip: {
        id: 99,
        advice: "The force is strong with this one.",
      },
    };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(advice),
      })
    );

    render(<App />);

    //Wait for advice to load
    await screen.findByText("Advice #42");
    expect(
      screen.getByText(/Do or do not\. There is no try\./i)
    ).toBeInTheDocument();

    // Check that the button works and advice changes
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve(advice2),
      })
    );

    userEvent.click(screen.getByRole("button", { name: "roll the dice" }));

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(2));
    expect(screen.getByText("Advice #99")).toBeInTheDocument();
    expect(
      screen.getByText(/The force is strong with this one\./i)
    ).toBeInTheDocument(); //
  });
});
