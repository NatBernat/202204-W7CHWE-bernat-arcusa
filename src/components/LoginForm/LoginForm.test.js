import { Provider } from "react-redux";
import TestRenderer from "react-test-renderer";
import store from "../../store/store";
import LoginForm from "./LoginForm";

describe("Given a loginForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should always match this snapshot", () => {
      const renderedLoginForm = TestRenderer.create(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );

      expect(renderedLoginForm).toMatchSnapshot();
    });
  });
});
