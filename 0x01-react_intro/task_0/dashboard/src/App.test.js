import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});
