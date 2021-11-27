import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar component", () => {
  test("Rendered Link called Main on the screen", () => {
    //Arrange
    render(
      <Router>
        <Navbar />
      </Router>
    );

    //Act

    //Assert
    const mainLink = screen.getByTestId("main");
    expect(mainLink).toBeInTheDocument();
  });
});
