import React from "react";
import { mount } from "cypress/react";
import Link from "../../src/components/Link/Link";

describe("Link", () => {
  it("default", () => {
    mount(<Link />);
    cy.compareScreenshot("Link-default");
  });
});
