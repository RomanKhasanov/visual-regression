# Visual regression using cypress components

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
[Cypress components documentation](https://docs.cypress.io/guides/component-testing/overview)
[Plugin documentation](https://github.com/haim-io/cypress-image-diff)

## Regression Scripts

### `screenshots:local`

Runs the cypress app in normal mode

### `screenshots`

Runs the cypress app against docker container with browser, use for creating screenshots locally

### `screenshots:ci`

Runs the cypress app without ui, meant to be used in ci based on cypress included image

### `screenshots:apply`

After creating screenshots you can move current results to baseline

## Screenshots folders

### `cypress/visual-screenshots/baseline`

Baseline images, indexed by git

### `cypress/visual-screenshots/comparision`

Current run screenshots, in gitignore

### `cypress/visual-screenshots/diff`

Difference between 2 screenshots
