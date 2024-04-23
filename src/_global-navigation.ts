import {
  Alignment,
  GlobalNavigationConfig,
  Variant
} from './global-navigation/types';

// ALLURE NAVIGATION
export const globalNavigationStructureAllure: GlobalNavigationConfig = {
  rows: [
    {
      columns: "repeat(12,minmax(min-content, 1fr))",
      visibility: {
        sm: true,
        md: true,
        lg: true,
        xl: true,
        xxl: true,
        xxxl: true
      },
      sticky: {
        sm: true,
        md: true,
        lg: true,
        xl: true,
        xxl: true,
        xxxl: true
      },
      areas: [
        {
          gridColumn: {
            sm: "1 / 3",
            lg: "6 / 8",
          },
          justifyContent: {
            sm: Alignment.START,
            lg: Alignment.CENTER,
          },
          name: 'logo',
          transformer: {
            source: 'primaryLinks',
            strategy: 'merge-and-sort',
            itemDefaults: {}
          },
          items: [
            {
              as: 'a',
              variant: Variant.LOGO,
              url: '/',
              label: 'ALLURE'
            },
          ]
        },
        {
          gridColumn: {
            sm: "3 / 13",
            lg: "8 / 13",
          },
          justifyContent: Alignment.END,
          name: 'right-side',
          transformer: {
            source: 'primaryLinks',
            strategy: 'merge-and-sort',
            itemDefaults: {}
          },
          items: [
            {
              as: 'a',
              variant: Variant.SIMPLE_CLICKABLE,
              url: '/beauty',
              label: 'Newsletter'
            },
            {
              as: 'a',
              variant: Variant.SIMPLE_CLICKABLE,
              url: '/beauty',
              label: 'Sign up'
            },
            {
              as: 'span',
              variant: Variant.SIMPLE_CLICKABLE,
              label: '🔎'
            }
          ]
        }
      ]
    },
  ]
};

// VOGUE NAVIGATION
export const globalNavigationStructureVogue: GlobalNavigationConfig = {
  rows: [
    {
      columns: "repeat(12,minmax(min-content, 1fr))",
      visibility: {
        sm: true,
        md: true,
        lg: true,
        xl: true,
        xxl: true,
        xxxl: true
      },
      sticky: {
        sm: true,
        md: true,
        lg: true,
        xl: true,
        xxl: true,
        xxxl: true
      },
      areas: [
        {
          gridColumn: {
            sm: "1 / auto",
            lg: "1 / 3",
          },
          justifyContent: Alignment.START,
          visibility: {
            sm: true,
            lg: false,
          },
          name: 'Burger Menu',
          transformer: {
            source: 'primaryLinks',
            strategy: 'merge-and-sort',
            itemDefaults: {}
          },
          items: [
            {
              as: 'a',
              variant: Variant.MENU,
              url: '/',
              label: '='
            },
          ]
        },
        {
          gridColumn: {
            "sm": "2 / 6",
            "lg": "6 / 8",
          },
          justifyContent: {
            sm: Alignment.START,
            lg: Alignment.CENTER,
          },
          name: 'logo',
          transformer: {
            source: 'primaryLinks',
            strategy: 'merge-and-sort',
            itemDefaults: {}
          },
          items: [
            {
              as: 'a',
              variant: Variant.LOGO,
              url: '/',
              label: 'VOGUE'
            },
          ]
        },
        {
          gridColumn: {
            "sm": "6 / 13",
            "lg": "8 / 13",
          },
          justifyContent: Alignment.END,
          name: 'right-side',
          transformer: {
            source: 'primaryLinks',
            strategy: 'merge-and-sort',
            itemDefaults: {}
          },
          items: [
            {
              as: 'span',
              variant: Variant.SIMPLE_CLICKABLE,
              label: 'Subscribe',
            },
            {
              as: 'a',
              variant: Variant.LINK,
              url: '/beauty',
              label: 'Sign in'
            },
            {
              as: 'span',
              variant: Variant.SIMPLE_CLICKABLE,
              label: '🔎'
            }
          ]
        }
      ]
    },
    {
      columns: "repeat(12,minmax(min-content, 1fr))",
      visibility: {
        sm: true,
        md: true,
        lg: true,
        xl: true,
        xxl: true,
        xxxl: true
      },
      sticky: {
        sm: true,
        md: true,
        lg: true,
        xl: true,
        xxl: true,
        xxxl: true
      },
      areas: [
        {
          gridColumn: "1 / -1", // or "1 / 13"
          justifyContent: Alignment.CENTER,
          name: 'secondary-links',
          transformer: {
            source: 'secondaryLinks',
            strategy: 'merge-and-sort',
            itemDefaults: {}
          },
          items: [
            {
              as: 'a',
              variant: Variant.LINK,
              url: '/',
              label: 'Fashion'
            },
            {
              as: 'a',
              variant: Variant.LINK,
              url: '/',
              label: 'Beauty'
            },
            {
              as: 'a',
              variant: Variant.LINK,
              url: '/',
              label: 'Culture'
            },
            {
              as: 'a',
              variant: Variant.LINK,
              url: '/',
              label: 'Living'
            },
            {
              as: 'a',
              variant: Variant.LINK,
              url: '/',
              label: 'Runway'
            },
            {
              as: 'a',
              variant: Variant.LINK,
              url: '/',
              label: 'Shopping'
            },
            {
              as: 'a',
              variant: Variant.LINK,
              url: '/',
              label: 'Magazine'
            },
            {
              as: 'a',
              variant: Variant.LINK,
              url: '/',
              label: 'VogueWorld'
            },
            {
              as: 'a',
              variant: Variant.LINK,
              url: '/',
              label: 'Weddings'
            },
            {
              as: 'a',
              variant: Variant.LINK,
              url: '/',
              label: 'Videos'
            },
            {
              as: 'a',
              variant: Variant.LINK,
              url: '/',
              label: 'Projects'
            },
            {
              as: 'a',
              variant: Variant.LINK,
              url: '/',
              label: 'Vogue App'
            },
          ]
        },
      ]
    },
  ]
};
