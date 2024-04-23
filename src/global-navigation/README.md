# GlobalNavigation

The `GlobalNavigation` component serves as the top-level navigation component that renders the entire navigation structure based on the provided configuration.

## Usage

To use the `GlobalNavigation` component, import it and pass the required `rows` configuration as props:

```jsx
import GlobalNavigation from './patterns/global-navigation/GlobalNavigation';

const navigationConfig = {
    // ...navigation configuration
};

<GlobalNavigation rows={navigationConfig.rows} />;
```

The component relies on a `GlobalNavigationConfig` object that defines the structure and behavior of the navigation elements.

## Styles and Types

The `GlobalNavigation` styles are defined in `styles.ts` and the types are defined in `types.ts`, which outline the structure for the navigation configuration.
