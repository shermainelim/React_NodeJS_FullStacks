import { render } from "@testing-library/react";
import Welcome from "./Welcome";
import { BrowserRouter as Router } from "react-router-dom";

describe("Render whole Welcome page", () => {
  const { getByTestId, getAllByTestId } = render(
    <Router>
      <Welcome />
    </Router>
  );
  test("Renders resident part", () => {
    expect(getByTestId("welcome-container")).toBeTruthy();
    expect(getByTestId("welcome-category-resident")).toBeTruthy();
    expect(getByTestId("img-logo-resident")).toBeTruthy();
    expect(getAllByTestId("custom-btn")).toBeTruthy();
  });
});
