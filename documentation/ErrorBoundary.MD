# Wrappers to handle errors in the UI render

If an issue occurs in the render function of a React component, if not handled then the UI will fall over. This is a
selection of wrappers that will catch any error then display something else instead so if part of the page fails the
whole application does not break.

## ErrorBoundary

Catches any issues and displays a error panel with a custom message provided. For example, you can wrap this around a
table, so if it fails to render this panel will show in its place on the page.

### Example

```.tsx
import {ErrorBoundary} from "blaise-design-system-react-components";

<ErrorBoundary errorMessageText={"Oh nooo!"}>
    <DodgyComponent/>
</ErrorBoundary>
```

### What is shown when any child element falls over in its `render` function

![img.png](ErrorBoundary.png)

## DefaultErrorBoundary

This is useful for wrapping around the entire page to dispaly a generic `Sorry, there is a problem with the service`
message.

### Example

```.tsx
import {DefaultErrorBoundary} from "blaise-design-system-react-components";

<DefaultErrorBoundary>
    <DodgyComponent/>
</DefaultErrorBoundary>
```

### What is shown when any child element falls over in its `render` function

![DefaultErrorBoundary.png](DefaultErrorBoundary.png)