import { configureAppStore } from "../configureStore";
import history from "../../utils/history";

describe("configureStore", () => {
  let store: Object;

  beforeAll(() => {
    store = configureAppStore({}, history);
  });

  describe("Reducers", () => {
    it("should contain an object for reducers", () => {
      expect(typeof store).toBe("object");
    });
  });
});
