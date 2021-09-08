import * as React from "react";
import { render } from "@testing-library/react";
import AdvancedImageList from "../CardsList";
import { MemoryRouter } from "react-router-dom";

describe("<AdvancedImageList />", () => {
  it("should match the snapshot", () => {
    const logo = render(
      <MemoryRouter>
        <AdvancedImageList products={null}/>
      </MemoryRouter>
    );
    expect(logo.container.firstChild).toMatchSnapshot();
  });
});
