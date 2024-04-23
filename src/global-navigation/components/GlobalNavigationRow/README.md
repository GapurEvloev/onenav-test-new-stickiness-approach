# GlobalNavigationRow

The `GlobalNavigationRow` component is responsible for rendering a single row within the global navigation, which can contain multiple navigation areas.

## Usage

The component is not intended to be used directly but as part of the `GlobalNavigation` structure. However, if needed, it can be used separately:

```jsx
import GlobalNavigationRow from './components/GlobalNavigationRow/GlobalNavigationRow';

const rowConfig = {
    // ...row configuration
};

<GlobalNavigationRow {...rowConfig} />;
```

The row configuration is determined by the GlobalNavigationRowConfig type.

## Styles and Types

The `GlobalNavigationRow` styles are defined in `styles.ts` in the same directory.The component's props and expected types are defined in types.ts at the GlobalNavigation level. The `GlobalNavigationRowConfig` type defines the structure for the row configuration.
