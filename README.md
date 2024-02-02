# Blaise design system react components

[![codecov](https://codecov.io/gh/ONSdigital/blaise-design-system-react-components/branch/main/graph/badge.svg)](https://codecov.io/gh/ONSdigital/blaise-design-system-react-components)
[![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/ONSdigital/blaise-design-system-react-components.svg)](https://github.com/ONSdigital/blaise-design-system-react-components/pulls)
[![Github last commit](https://img.shields.io/github/last-commit/ONSdigital/blaise-design-system-react-components.svg)](https://github.com/ONSdigital/blaise-design-system-react-components/commits)
[![Github contributors](https://img.shields.io/github/contributors/ONSdigital/blaise-design-system-react-components.svg)](https://github.com/ONSdigital/blaise-design-system-react-components/graphs/contributors)
<img src="https://img.shields.io/github/release/ONSdigital/blaise-design-system-react-components.svg?style=flat-square" alt="">
[![Total alerts](https://img.shields.io/lgtm/alerts/g/ONSdigital/blaise-design-system-react-components.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/ONSdigital/blaise-design-system-react-components/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/ONSdigital/blaise-design-system-react-components.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/ONSdigital/blaise-design-system-react-components/context:javascript)

React component implementations of the [ONS Design system components](https://ons-design-system.netlify.app).

## Documentation

[Link to Storybook documentation](https://onsdigital.github.io/blaise-design-system-react-components)

## Usage

In your own React project add this repository as a dependency, specifying a release version after the # at the end. For example:

```shell
yarn add git+https://github.com/ONSdigital/blaise-design-system-react-components#<RELEASE_TAG>
```
---

Before using components from this library, add the following code within the `<head>` tags of your React project's `public/index.html` file:

```
<link href="https://cdn.ons.gov.uk/sdc/design-system/60.0.2/css/main.css" rel="stylesheet" type="text/css">
```

The above code implements the ONS Design System's global CSS style rules into your project - if this code is not included, style rules will not be applied to this library's components within your project.

## Add a component
With this imported, you can add the components to your page, like the example below, where we use the Header,
ExternalLink and ONSButton components on the page:

```tsx
import React from "react";
import {Header, ExternalLink, ONSButton} from "blaise-design-system-react-components";


function SimplePage(): ReactElement {

    function doStuff() {
        // Do stuff
    }

    return (
        <>
            <Header title={"Simple site"}/>

            <ExternalLink text={"Home"}
                          link={"/home"}
                          ariaLabel={"Return to homepage"}/>

            <ONSButton label="Go to table of questionnaires"
                       primary={true}
                       onClick={() => doStuff()}/>
        </>
    );
}
```

## Available components

### Standard design system components

Components from the design system replicated as React components.

| Component             | Link to Design System Component                                                       | Notes                                                                                      |
|-----------------------|---------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| BetaBanner            | [Phase banner](https://ons-design-system.netlify.app/components/phase-banner/)        |                                                                                            |
| ExternalLink          | [Link with external link icon](https://ons-design-system.netlify.app/styles/typography/#link-with-external-link-icon) |                                                                                            |
| Footer                | [Footer](https://ons-design-system.netlify.app/components/footer/)                    |                                                                                            |
| Header                | [Internal Header](https://ons-design-system.netlify.app/components/header/#internal)  |                                                                                            |
| ONSButton             | [Button](https://ons-design-system.netlify.app/components/button/)                    |                                                                                            |
| ONSPanel              | [Panel](https://ons-design-system.netlify.app/components/panel/)                      |                                                                                            |
| ONSPasswordInput      | [Password](https://ons-design-system.netlify.app/components/password/)                |                                                                                            |
| ONSSelect             | [Select](https://ons-design-system.netlify.app/components/select/)                    |                                                                                            |
| ONSTextInput          | [Input](https://ons-design-system.netlify.app/components/input/)                      |                                                                                            |
| ONSUpload             | [Upload](https://ons-design-system.netlify.app/components/upload/)                    |                                                                                            |
| Collapsible           | [Collapsible](https://ons-design-system.netlify.app/components/collapsible/)          |                                                                                            |
| Accordion           | [Accordion](https://ons-design-system.netlify.app/components/accordion/)          |                                                                                            |

### Custom designed components based off design system

Based off design system components but modified slightly, either to suit our needs or to make a simple reusable
component for example the `ONSErrorPanel` is simply a ONSPanel with a message already provided.

| Component             | Link to Design System Component                                                       | Notes                                                                                      |
|-----------------------|---------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| NoneProductionWarning | [Warning branded Panel](https://ons-design-system.netlify.app/components/panel/#warning-branded) | This one is not an 'Official' component. But is based on the Branded Census warning panel    |
| ONSErrorPanel         | [Error Panel Variant](https://ons-design-system.netlify.app/components/panel/)        | This is a Standard Panel with an error status, with a prepared message "Sorry, there is a problem with this service. We are working to fix the problem. Please try again later."  |
| ONSLoadingPanel       | [Panel](https://ons-design-system.netlify.app/components/panel/)                      | This is a Standard Panel with an info status, with a loading spinner and "Loading" message. Uses [react-loader-spinner](https://www.npmjs.com/package/react-loader-spinner) for the loading spinner. |

### Custom React designed components

React components to simply development across multiple repositories. These are still based off the design system, for
example the `StyledForm` is a reusable implementation of [Formik](https://formik.org/) but the fields and errors are set
up like standard ONS design system fields.

| Component             | Link to Design System Component                                                       | Notes                                                                                      |
|-----------------------|---------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| StyledForm            | [Correct errors pattern](https://ons-design-system.netlify.app/patterns/error-validation) | Easily add ONS styled forms to React application. [Detailed documentation and example](documentation/StyledForms.MD) |
| ErrorBoundary         | [Error Panel Variant](https://ons-design-system.netlify.app/components/panel/) | React render UI error wrapper. [Detailed documentation and examples](documentation/ErrorBoundary.MD) |
| DefaultErrorBoundary  | [Service unavailable errors](https://ons-design-system.netlify.app/patterns/error-status-pages/#service-unavailable-errors) | React render UI error wrapper. [Detailed documentation and examples](documentation/ErrorBoundary.MD) |

## Component Development

### Setup

First clone the repository to you local machine

```shell
git clone https://github.com/ONSdigital/blaise-design-system-react-components.git
```

Then open the project in and IDE of your choice and from the terminal run:
To install required dependencies run:

```shell
yarn install
```

### Visualise Components using Storybook

Storybook is like a small UI workshop that allows us to conveniently visualise and manually test each component without needing to spin up a whole separate application.

To visualise a component, you need to write a [story](https://storybook.js.org/docs/get-started/whats-a-story) for it:
```tsx
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button primary label="Button" />,
};
```

Once you've written the stories, you can run Storybook to view the components:
```shell
yarn run storybook
```

For more information, visit the [Storybook documentation](https://storybook.js.org/docs/get-started/install)

### Tests

To run the tests with coverage results run:

```shell
yarn run test
```

### Create and release a new version

After making your changes you will need to compile the Typescript components, locally run:

```shell
yarn run build
```

This will add all the exported components into the `build/index.js` file which will be imported by other React projects.
Commit these changes.

Once merged into main, [create a new release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) and add an appropriate version number.
