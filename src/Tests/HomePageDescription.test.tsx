import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePageDescription from "../HomePageDescription";

describe("Home Page Description Component", () => {
  it("renders the Home page Description", () => {
    render(<HomePageDescription />);

    const paragraph = screen.getByText(
      "This is an app used to track movies I want to watch, and those that I'vealready watched."
    );
    expect(paragraph).toBeInTheDocument();
  });
});
