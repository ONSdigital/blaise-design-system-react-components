# Blaise Design System React Components 🧑‍🎨

React implementations of components from the [ONS Design System](https://service-manual.ons.gov.uk/design-system), tailored for Blaise applications.

## 📖 Documentation

Component documentation is available in [Storybook](https://onsdigital.github.io/blaise-design-system-react-components), which provides:

- A live, interactive catalogue of all available components
- Usage examples, props, and variants
- Auto-generated API docs from TSDoc comments

## 📝 Usage

Add this repository to your React project as a dependency, specifying the target release version:

```shell
yarn add git+https://github.com/ONSdigital/blaise-design-system-react-components#<RELEASE_VERSION>
```

Release versions can be found on this repos [GitHub releases](https://github.com/ONSdigital/blaise-design-system-react-components/releases).

### Peer Dependencies

This library requires the consuming application to provide its own React engine and Formik context. Ensure you have the following installed in your project's dependencies:

* react (^19.0.0)
* react-dom (^19.0.0)
* formik (>=2.4.0)

### Global CSS Requirement

Before using components from this library, you must inject the ONS Design System's global CSS rules. Add the following `<link>` tag within the `<head>` of your React project's `public/index.html` file:

```html
<link href="https://cdn.ons.gov.uk/sdc/design-system/60.0.3/css/main.css" rel="stylesheet" type="text/css">
```

Version `60.0.3` is the latest version of the ONS Design System CSS that is fully compatible with these React components. Newer versions of the ONS Design System CSS may introduce breaking changes, and our components would need to be refactored to support them. If you wish to use a newer version, please check the [ONS Design System repository](https://github.com/ONSdigital/design-system) for available releases and review any breaking changes before upgrading.

If this is omitted, the components will render without ONS styling.

### Using Components

Example of using several components:

```tsx
import { ReactElement } from "react";
import { Header, ExternalLink, Button, Footer, ErrorBoundary, DefaultErrorBoundary } from "blaise-design-system-react-components";

export default function ExampleSite(): ReactElement {
    function doStuff() {
        // Do stuff
    }

    return (
        <DefaultErrorBoundary>
            <Header title="Example Site" />
            <ExternalLink text="Home" link="/home" ariaLabel="Return to homepage" />
            <ErrorBoundary errorMessageText="Something went wrong with the button!">
                <Button label="Jump over the moon" primary onClick={doStuff} />
            </ErrorBoundary>
            <Footer />
        </DefaultErrorBoundary>
    );
}
```

To see what components are available refer to the [Storybook documentation](https://onsdigital.github.io/blaise-design-system-react-components).

## 🛠️ Component Development

### Getting Started

Clone the repository:

```shell
git clone https://github.com/ONSdigital/blaise-design-system-react-components.git
```

Install dependencies:

```shell
yarn install
```

### Creating a New Component

Check the [ONS Design System](https://service-manual.ons.gov.uk/design-system) for an existing or similar component. Use their HTML as a reference and convert it into a reusable React/TypeScript component.

Write appropriate tests and Storybook stories. Place stories alongside the component (e.g., `Button.stories.tsx`). See [docs/introduction.mdx](docs/introduction.mdx) for story guidelines.

To run tests:

```shell
yarn test
```

To check linting:

```shell
yarn lint
```

Some linting issue can be auto fixed:

```shell
yarn lint-fix
```

### Releasing

After merging to main, [create a new release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) with appropriate release notes. The `package.json` version is automatically updated via GitHub Actions when a release is published.
