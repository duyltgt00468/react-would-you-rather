import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Nav from "./Nav";
import { loginAuthenticatedUser } from "../actions/authedUser";

describe("Nav", () => {
    it("should render the component", () => {
        store.dispatch(loginAuthenticatedUser({ id: "sarahedo", password: "" }));

        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Nav />
                </BrowserRouter>
            </Provider>
        );
        expect(component).toBeDefined();
        expect(component).toMatchSnapshot();
    });

    it("should display username of logged in user", () => {
        store.dispatch(loginAuthenticatedUser({ id: "sarahedo", password: "" }));

        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Nav />
                </BrowserRouter>
            </Provider>
        );

        const userSpanElement = component.getByTestId("user-information");
        expect(userSpanElement.textContent).toBe("sarahedoLogout");

    });
});
