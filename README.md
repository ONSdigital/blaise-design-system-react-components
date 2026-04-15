# Blaise Design System React Components

A React implementation of the [ONS Design System](https://ons-design-system.netlify.app), tailored for Blaise applications.

## 📖 Documentation

[View the Storybook Documentation](https://onsdigital.github.io/blaise-design-system-react-components)

## 🚀 Usage

Add this repository to your React project as a dependency, specifying the target release version:

```shell
yarn add git+https://github.com/ONSdigital/blaise-design-system-react-components#<RELEASE_VERSION>
```

### Peer Dependencies

This library requires the consuming application to provide its own React engine and Formik context. Ensure you have the following installed in your project's dependencies:

* react (>= 19.0.0)
* react-dom (>= 19.0.0)
* formik (>= 2.4.0)

### Global CSS Requirement

Before using components from this library, you must inject the ONS Design System's global CSS rules. Add the following <link> tag within the <head> of your React project's public/index.html file:

```html
<link href="https://cdn.ons.gov.uk/sdc/design-system/60.0.3/css/main.css" rel="stylesheet" type="text/css">
```

If this is omitted, the components will render without ONS styling.

## Importing Components

example?

## Available components

### Standard design system components

Components from the design system replicated as React components.

| Component | Link to Design System |
| --- | --- |
| BetaBanner | [Phase banner](https://ons-design-system.netlify.app/components/phase-banner/) |
| ExternalLink | [Link with external link icon](https://ons-design-system.netlify.app/styles/typography/#link-with-external-link-icon) |
| Footer | [Footer](https://ons-design-system.netlify.app/components/footer/) |
| Header | [Internal Header](https://ons-design-system.netlify.app/components/header/#internal) |
| ONSButton | [Button](https://ons-design-system.netlify.app/components/button/) |
| ONSPanel | [Panel](https://ons-design-system.netlify.app/components/panel/) |
| ONSPasswordInput | [Password](https://ons-design-system.netlify.app/components/password/) |
| ONSSelect | [Select](https://ons-design-system.netlify.app/components/select/) |
| ONSTextInput | [Input](https://ons-design-system.netlify.app/components/input/) |
| ONSUpload | [Upload](https://ons-design-system.netlify.app/components/upload/) |
| Collapsible | [Collapsible](https://ons-design-system.netlify.app/components/collapsible/) |
| Accordion | [Accordion](https://ons-design-system.netlify.app/components/accordion/) |

### Custom designed components based off design system

These are based on design system components but modified for Blaise, or made more reusable. For example, `ONSErrorPanel` is a pre-configured `ONSPanel` with a standard error message.

| Component | Link to Design System Component | Notes |
| --- | --- | --- |
| NotProductionWarning | [Warning branded Panel](https://ons-design-system.netlify.app/components/panel/#warning-branded) | This one is not an 'Official' component. But is based on the Branded Census warning panel |
| ONSErrorPanel | [Error Panel Variant](https://ons-design-system.netlify.app/components/panel/) | This is a Standard Panel with an error status, with a prepared message "Sorry, there is a problem with this service. We are working to fix the problem. Please try again later." |
| ONSLoadingPanel | [Panel](https://ons-design-system.netlify.app/components/panel/) | This is a Standard Panel with an info status, with a loading spinner and "Loading" message. Uses [react-loader-spinner](https://www.npmjs.com/package/react-loader-spinner) for the loading spinner. |

### Custom React designed components

These components simplify development across multiple repositories. For example, `StyledForm` is a reusable [Formik](https://formik.org/) implementation with ONS/Blaise field and error styling.

| Component | Link to Design System Component | Notes |
| --- | --- | --- |
| StyledForm | [Correct errors pattern](https://ons-design-system.netlify.app/patterns/error-validation) | Easily add ONS styled forms to React application. [Detailed documentation and example](documentation/StyledForms.MD) |
| ErrorBoundary | [Error Panel Variant](https://ons-design-system.netlify.app/components/panel/) | React render UI error wrapper. [Detailed documentation and examples](documentation/ErrorBoundary.MD) |
| DefaultErrorBoundary | [Service unavailable errors](https://ons-design-system.netlify.app/patterns/error-status-pages/#service-unavailable-errors) | React render UI error wrapper. [Detailed documentation and examples](documentation/ErrorBoundary.MD) |

## Component Development

### Setup

First clone the repository to you local machine

```shell
git clone https://github.com/ONSdigital/blaise-design-system-react-components.git
```

Then open the project in and IDE of your choice and from the terminal to install required dependencies:

```shell
yarn install
```

### Visualise Components using storybook

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

After making your changes, compile the TypeScript components:

```shell
yarn run build
```

Commit these changes.

Once merged into main, [create a new release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository).

**Versioning:** The `package.json` version is now automatically updated via GitHub Actions when a release is published. You do not need to manually update the version.
