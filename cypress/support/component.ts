// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
// import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from "cypress/react";

import compareSnapshotCommand from "cypress-image-diff-js/command";

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      compareSnapshot(
        value: string,
        testThreshold?: number,
        recurseOptions?: { limit: number; delay: number }
      ): Chainable<Element>;
      compareScreenshot(value: string): Promise<Chainable<Element>>;
    }
  }
}

Cypress.Commands.add("mount", (component, options = {}) => {
  // Use the default store if one is not provided
  const { ...mountOptions } = options;

  const wrapped = component;

  return mount(wrapped, mountOptions);
});

compareSnapshotCommand();

const recurseOptions = {
  limit: 2, // max number of retries
  delay: 500, // delay before next iteration, ms
};

Cypress.Commands.add("compareScreenshot", (name: string) => {
  cy.document()
    // https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet/ready
    // The promise will only resolve once the document has completed loading fonts,
    // layout operations are completed, and no further font loads are needed.
    .then((document) => document.fonts.ready)
    .then(() => {
      cy.compareSnapshot(name, 0, recurseOptions);
    });
});

after(() => {
  cy.task("generateReport");
});
