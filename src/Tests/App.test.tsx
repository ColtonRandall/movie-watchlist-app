import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("App Component", () => {
  it("renders the App homepage", () => {
    render(<App />);

    const paragraph = screen.getByText("Colton's Movie Watchlist 🎬");
    expect(paragraph).toBeInTheDocument();
  });
});
