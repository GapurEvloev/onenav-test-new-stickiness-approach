# GlobalNavigationArea

The `GlobalNavigationArea` component represents a specific area within a `GlobalNavigationRow`, rendering individual clickable items as defined.

## Usage

Similar to `GlobalNavigationRow`, this component is typically used within the `GlobalNavigation` hierarchy and not standalone:

```jsx
import GlobalNavigationArea from './components/GlobalNavigationArea/GlobalNavigationArea';

const areaConfig = {
    // ...area configuration
};

<GlobalNavigationArea {...areaConfig} />;
```

The area configuration is determined by the `GlobalNavigationAreaConfig` type.

## Styles and Types

The `GlobalNavigationArea` styles are defined in `styles.ts` in the same directory. The component's props and expected types are defined in `types.ts` at the `GlobalNavigation` level. The `GlobalNavigationAreaConfig` type defines the structure for the area configuration. And use the `Cols` type from `types.ts` to handle responsive column layout.
