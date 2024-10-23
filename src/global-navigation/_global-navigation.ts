import {
  Alignment,
  GlobalNavigationConfig,
  Variant
} from './types';

// ALLURE NAVIGATION
export const globalNavigationStructureAllure: GlobalNavigationConfig = {
  rows: [
    {
      visibility: {
        sm: true,
        md: true,
        lg: true,
        xl: true,
        xxl: true,
        xxxl: true
      },
      hideOnScroll: false,
      areas: [
        {
          gridColumn: {
            sm: '1 / 3',
            lg: '6 / 8'
          },
          justifyContent: {
            sm: Alignment.START,
            lg: Alignment.CENTER
          },
          areaName: 'logo',
          transformer: {
            strategy: 'merge-and-sort',
            itemDefaults: {
              as: 'a',
              type: 'simple-button'
            }
          },
          items: [
            {
              as: 'a',
              variant: Variant.LOGO,
              url: '/',
              label: 'ALLURE'
            }
          ]
        },
        {
          gridColumn: {
            sm: '3 / 13',
            lg: '8 / 13'
          },
          justifyContent: Alignment.END,
          areaName: 'right-side',
          transformer: {
            source: 'accountLinks',
            strategy: 'merge-and-sort',
            itemDefaults: {
              as: 'a',
              type: 'simple-button'
            }
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
    {
      columns: 'repeat(12,minmax(min-content, 1fr))',
      visibility: {
        sm: true,
        md: true,
        lg: true,
        xl: true,
        xxl: true,
        xxxl: true
      },
      hideOnScroll: true,
      areas: [
        {
          gridColumn: {
            sm: '1 / 3',
            lg: '6 / 8'
          },
          justifyContent: {
            sm: Alignment.START,
            lg: Alignment.CENTER
          },
          areaName: 'logo',
          transformer: {
            strategy: 'merge-and-sort',
            itemDefaults: {}
          },
          items: [
            {
              as: 'a',
              variant: Variant.LOGO,
              url: '/',
              label: 'ALLURE'
            }
          ]
        },
        {
          gridColumn: {
            sm: '3 / 13',
            lg: '8 / 13'
          },
          justifyContent: Alignment.END,
          areaName: 'right-side',
          transformer: {
            source: 'accountLinks',
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
    // globalNavigationStructureFigmaCase1 Row 1
    {
      visibility: {
        sm: true,
        md: true,
        lg: true,
        xl: true,
        xxl: true,
        xxxl: true
      },
      hideOnScroll: {  sm: false, md: 400, lg: true },
      areas: [
        {
          gridColumn: {
            sm: '1 / 4'
          },
          justifyContent: {
            sm: Alignment.START
          },
          visibility: {
            sm: true,
            lg: false
          },
          areaName: 'join',
          transformer: {
            strategy: 'merge-and-sort',
            itemDefaults: {}
          },
          items: [
            {
              as: 'span',
              variant: Variant.SIMPLE_CLICKABLE,
              label: 'Join'
            }
          ]
        },
        {
          gridColumn: {
            sm: '4 / 10',
            lg: '1 / 2'
          },
          justifyContent: {
            sm: Alignment.CENTER,
            lg: Alignment.START
          },
          areaName: 'Logo',
          transformer: {
            strategy: 'merge-and-sort',
            itemDefaults: {}
          },
          items: [
            {
              as: 'a',
              variant: Variant.LOGO,
              url: '/',
              label: 'LOGO'
            }
          ]
        },
        {
          gridColumn: {
            lg: '10 / 13',
            sm: '10 / 13'
          },
          justifyContent: {
            lg: Alignment.END,
            sm: Alignment.END
          },
          visibility: {
            sm: true,
            lg: false
          },
          areaName: 'Burger Menu',
          transformer: {
            strategy: 'merge-and-sort',
            itemDefaults: {}
          },
          items: [
            {
              as: 'a',
              variant: Variant.MENU,
              url: '/',
              label: '='
            }
          ]
        },
        {
          gridColumn: {
            sm: '1 / 13',
            lg: '2 / 10'
          },
          justifyContent: {
            sm: Alignment.CENTER,
            lg: Alignment.CENTER
          },
          areaName: 'secondary-links',
          transformer: {
            source: 'secondaryLinks',
            strategy: 'merge-and-sort',
            itemDefaults: {}
          },
          items: [
            {
              as: 'span',
              variant: Variant.LINK,
              url: '/',
              label: 'Top channel 1'
            },
            {
              as: 'a',
              variant: Variant.LINK,
              url: '/',
              label: 'Top channel 2'
            },
            {
              as: 'a',
              variant: Variant.LINK,
              url: '/',
              label: 'Top channel 3'
            }
          ]
        },
        {
          gridColumn: {
            sm: '11 / 13',
            lg: '10 / 13'
          },
          justifyContent: {
            lg: Alignment.END,
            sm: Alignment.END
          },
          visibility: {
            sm: false,
            lg: true
          },
          areaName: 'join and menu',
          transformer: {
            source: 'accountLinks',
            strategy: 'merge-and-sort',
            itemDefaults: {}
          },
          items: [
            {
              as: 'span',
              variant: Variant.SIMPLE_CLICKABLE,
              label: 'Join'
            },
            {
              as: 'a',
              variant: Variant.MENU,
              url: '/',
              label: 'Menu'
            }
          ]
        }
      ]
    }
  ]
};

// VOGUE NAVIGATION
export const globalNavigationStructureVogue: GlobalNavigationConfig = {
  rows: [
    {
      columns: 'repeat(12,minmax(min-content, 1fr))',
      visibility: {
        sm: true,
        md: true,
        lg: true,
        xl: true,
        xxl: true,
        xxxl: true
      },
      hideOnScroll: false,
      areas: [
        {
          gridColumn: {
            sm: '1 / auto',
            lg: '1 / 3'
          },
          justifyContent: Alignment.START,
          visibility: {
            sm: true,
            lg: false
          },
          areaName: 'Burger Menu',
          transformer: {
            source: 'primaryLinks',
            strategy: 'merge-and-sort',
            itemDefaults: {
              as: 'a',
              type: 'simple-button'
            }
          },
          items: [
            {
              as: 'a',
              variant: Variant.MENU,
              url: '/',
              label: '='
            }
          ]
        },
        {
          gridColumn: {
            sm: '2 / 6',
            lg: '6 / 8'
          },
          justifyContent: {
            sm: Alignment.START,
            lg: Alignment.CENTER
          },
          areaName: 'logo',
          items: [
            {
              as: 'a',
              variant: Variant.LOGO,
              url: '/',
              label: 'VOGUE'
            }
          ]
        },
        {
          gridColumn: {
            sm: '6 / 13',
            lg: '8 / 13'
          },
          justifyContent: Alignment.END,
          areaName: 'right-side',
          transformer: {
            source: 'accountLinks',
            strategy: 'merge-and-sort',
            itemDefaults: {
              as: 'a',
              type: 'simple-button'
            }
          },
          items: [
            {
              as: 'span',
              variant: Variant.SIMPLE_CLICKABLE,
              label: 'Subscribe'
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
      columns: 'repeat(12,minmax(min-content, 1fr))',
      visibility: {
        sm: true,
        md: true,
        lg: true,
        xl: true,
        xxl: true,
        xxxl: true
      },
      hideOnScroll: 300,
      areas: [
        {
          gridColumn: '1 / -1', // or '1 / 13'
          justifyContent: Alignment.CENTER,
          areaName: 'secondary-links',
          transformer: {
            source: 'secondaryLinks',
            strategy: 'merge-and-sort',
            itemDefaults: {
              as: 'a',
              type: 'simple-button'
            }
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
            }
          ]
        }
      ]
    }
  ]
};
