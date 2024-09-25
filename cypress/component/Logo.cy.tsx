import React from "react";
import { mount } from "cypress/react";
import Logo from "../../src/components/Logo/Logo";

describe("Logo", () => {
  it("default", () => {
    mount(<Logo />);
    cy.compareScreenshot("Logo-default");
  });
});
