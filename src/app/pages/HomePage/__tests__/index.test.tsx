import * as React from "react";
import { createRenderer } from "react-test-renderer/shallow";
import { Provider } from "react-redux";
import { HomePage } from "..";
import { configureAppStore } from "../../../../store/configureStore";
import history from "../../../../utils/history";

const shallowRenderer = createRenderer();

describe("<HomePage />", () => {
  let store;
  beforeAll(() => {
    store = configureAppStore({}, history);
  });
  it("should render and match the snapshot", () => {
    shallowRenderer.render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    const renderedOutput = shallowRenderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
