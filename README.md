# blaise-design-system-react-components

[![codecov](https://codecov.io/gh/ONSdigital/blaise-design-system-react-components/branch/main/graph/badge.svg)](https://codecov.io/gh/ONSdigital/blaise-design-system-react-components)
<img src="https://img.shields.io/github/release/ONSdigital/blaise-design-system-react-components.svg?style=flat-square" alt="">


React component implementations of the [ONS Design system components](https://ons-design-system.netlify.app).

## Usage
In your own React project add this repository as a dependency, specifying a release version after the # at the end for example:
```shell
yarn add ONSdigital/blaise-design-system-react-components#0.0.3
```

With this imported, you can add the components to your page, like the example below, where we use the Header, ExternalLink and ONSButton components on the page:
```tsx
import React, {useEffect} from "react";
import {Header, ExternalLink, ONSButton} from "blaise-design-system-react-components";


function SimplePage(): ReactElement {
    useEffect(() => {
        // Do stuff
    }, []);

    return (
        <>
            <Header title={"Simple site"}/>
            
            <ExternalLink text={"Home"}
                          link={"/home"}
                          ariaLabel={"Return to homepage"}/>
                          
            <ONSButton label="Go to table of questionnaires"
                       primary={true}
                       onClick={() => ()}/>
        </>
    );
}
```

## Available components

| Component             | Link to Design System Component                                                       | Notes                                                                                      |
|-----------------------|---------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| BetaBanner            | [Phase banner](https://ons-design-system.netlify.app/components/phase-banner/)        |                                                                                            |
| ExternalLink          | [Link with external link icon](https://ons-design-system.netlify.app/styles/typography/#link-with-external-link-icon) |                                                                                            |
| Footer                | [Footer](https://ons-design-system.netlify.app/components/footer/)                    |                                                                                            |
| Header                | [Internal Header](https://ons-design-system.netlify.app/components/header/#internal)  |                                                                                            |
| NoneProductionWarning | [Warning branded Panel](https://ons-design-system.netlify.app/components/panel/#warning-branded) | This one is not an 'Official' component. But is based on the Branded Census warning panel    |
| ONSButton             | [Button](https://ons-design-system.netlify.app/components/button/)                    |                                                                                            |
| ONSErrorPanel         | [Error Panel Variant](https://ons-design-system.netlify.app/components/panel/)        | This is a Standard Panel with an error status, with a prepared message "Sorry, there is a problem with this service. We are working to fix the problem. Please try again later."  |
| ONSPanel              | [Panel](https://ons-design-system.netlify.app/components/panel/)                      |                                                                                            |
| ONSUpload             | [Upload](https://ons-design-system.netlify.app/components/upload/)                    |                                                                                            |

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

### Tests
To run the tests with coverage results run:
```shell
yarn run tests
```

### Create and release a new version
After making your changes you will need to compile the Typescript components, locally run:   
```shell
yarn run build
```
This will add all the exported components into the `build/index.js` file which will be imported by other React projects. Commit these changes.

Once merged into main in Github, create a new release, adding an appropriate version number. 