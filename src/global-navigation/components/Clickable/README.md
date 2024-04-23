# Clickable

The `Clickable` component is a generic clickable element that can be styled as a button, link, or other interactive element based on its `as` prop.

## Usage

Import and use the `Clickable` component with the desired configuration:

```jsx
import { Clickable } from './components/Clickable';

<Clickable as="a" variant="simple-clickable" onClick={handleClick}>
    Click Me
</Clickable>;
```

The `Clickable` component accepts the following props:

| Name      | Type     | Description                                                                 |
| --------- | -------- | --------------------------------------------------------------------------- |
| `as`      | `string` | The element type to render, such as `button`, `a`, or `div`.                |
| `variant` | `string` | The variant of the clickable element, such as `simple-clickable` or `icon`. |
| `onClick` | `func`   | The function to call when the element is clicked.                           |

The component can be customized by passing different props such as variant, primary, secondary, and any other props that the underlying element type supports.

## Styles and Types

`styles.ts` includes the styled-component definitions for `Clickable`. The `ClickableProps` type in the component file provides type checking and IntelliSense for supported props.
