import { Alignment, Variant } from './types';

const GlobalNavigationInput = [
  {
    visibility: {},
    sticky: {
      lg: true
    },
    areas: [
      {
        alignment: 'left',
        transformer: {
          source: 'primaryLinks',
          itemDefaults: {
            type: 'simple-button'
          }
        },
        items: [
          {
            text: 'Health',
            url: '/health',
            type: 'simple-button'
          }
        ]
      }
    ]
  }
];

const GlobalNavigationOutput = [
  {
    visibility: {},
    sticky: {
      lg: true
    },
    areas: [
      {
        alignment: 'left',
        transformer: {
          source: 'primaryLinks',
          itemDefaults: {
            type: 'simple-button'
          }
        },
        items: [
          {
            isActive: false,
            label: 'Fashion',
            showInTopNav: true,
            text: 'Fashion',
            type: 'simple-button',
            url: '/fashion'
          },
          {
            forceLeftOfNav: false,
            isActive: false,
            isExternal: false,
            label: 'Beauty',
            showInTopNav: true,
            text: 'Beauty',
            type: 'simple-button',
            url: '/beauty'
          },
          {
            forceLeftOfNav: false,
            isActive: false,
            isExternal: false,
            label: 'Culture',
            showInTopNav: true,
            text: 'Culture',
            type: 'simple-button',
            url: '/culture'
          },
          {
            isActive: false,
            label: 'Living',
            showInTopNav: true,
            text: 'Living',
            type: 'simple-button',
            url: '/living'
          },
          {
            isActive: false,
            label: 'Weddings',
            showInTopNav: true,
            text: 'Weddings',
            type: 'simple-button',
            url: '/weddings'
          },
          {
            forceLeftOfNav: false,
            isActive: false,
            isExternal: false,
            label: 'Runway',
            showInTopNav: true,
            text: 'Runway',
            type: 'simple-button',
            url: '/fashion-shows'
          },
          {
            children: [],
            forceLeftOfNav: false,
            hasChildren: true,
            hasHrefForLinks: true,
            isActive: false,
            isExternal: false,
            label: 'Shopping',
            layout: 'column',
            maxItemsPerColumn: 9,
            showInTopNav: true,
            showSecondaryFooterAllLink: true,
            text: 'Shopping',
            type: 'simple-button',
            url: '/shopping'
          },
          {
            forceLeftOfNav: false,
            isActive: false,
            isExternal: false,
            label: 'Video',
            showInTopNav: true,
            text: 'Video',
            type: 'simple-button',
            url: '/video'
          },
          {
            children: [],
            forceLeftOfNav: false,
            hasChildren: true,
            isActive: false,
            isExternal: false,
            label: 'PhotoVogue',
            layout: 'default',
            showInTopNav: true,
            text: 'PhotoVogue',
            type: 'simple-button',
            url: '/photovogue'
          },
          {
            forceLeftOfNav: false,
            isActive: false,
            isExternal: false,
            label: 'Vogue Club',
            showInTopNav: true,
            text: 'Vogue Club',
            type: 'simple-button',
            url: '/vogue-club'
          },
          {
            isActive: false,
            label: 'Met Gala 2024',
            showInTopNav: true,
            text: 'Met Gala 2024',
            type: 'simple-button',
            url: '/tag/event/met-gala'
          },
          {
            isActive: false,
            label: 'Podcast',
            showInTopNav: false,
            text: 'Podcast',
            type: 'simple-button',
            url: '/podcast/the-run-through'
          },
          {
            isActive: false,
            label: 'Test',
            showInTopNav: false,
            text: 'Test',
            type: 'simple-button',
            url: 'https://voguedeploy-vogue.gp-nonprod-ap-0.conde.digital/ping'
          },
          {
            text: 'Health',
            type: 'simple-button',
            url: '/health'
          }
        ]
      }
    ]
  }
];

// VOGUE NAVIGATION
const GlobalNavigationVogueInput = [
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
          sm: '2 / 6',
          lg: '6 / 8'
        },
        justifyContent: {
          sm: Alignment.START,
          lg: Alignment.CENTER
        },
        areaName: 'logo',
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
          source: 'primaryLinks',
          strategy: 'merge-and-sort',
          itemDefaults: {}
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
        gridColumn: '1 / -1',
        justifyContent: Alignment.CENTER,
        areaName: 'secondary-links',
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
          }
        ]
      }
    ]
  }
];

const GlobalNavigationVogueOutput = [
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
          sm: '1 / auto',
          lg: '1 / 3'
        },
        justifyContent: 'start',
        visibility: {
          sm: true,
          lg: false
        },
        areaName: 'Burger Menu',
        transformer: {
          source: 'primaryLinks',
          strategy: 'merge-and-sort',
          itemDefaults: {}
        },
        items: [
          {
            showInTopNav: true,
            text: 'Fashion',
            url: '/fashion',
            isActive: false,
            label: 'Fashion'
          },
          {
            isExternal: false,
            showInTopNav: true,
            text: 'Beauty',
            url: '/beauty',
            forceLeftOfNav: false,
            isActive: false,
            label: 'Beauty'
          },
          {
            isExternal: false,
            showInTopNav: true,
            text: 'Culture',
            url: '/culture',
            forceLeftOfNav: false,
            isActive: false,
            label: 'Culture'
          },
          {
            showInTopNav: true,
            text: 'Living',
            url: '/living',
            isActive: false,
            label: 'Living'
          },
          {
            showInTopNav: true,
            text: 'Weddings',
            url: '/weddings',
            isActive: false,
            label: 'Weddings'
          },
          {
            isExternal: false,
            showInTopNav: true,
            text: 'Runway',
            url: '/fashion-shows',
            forceLeftOfNav: false,
            isActive: false,
            label: 'Runway'
          },
          {
            children: [],
            forceLeftOfNav: false,
            hasChildren: true,
            hasHrefForLinks: true,
            isExternal: false,
            layout: 'column',
            maxItemsPerColumn: 9,
            showInTopNav: true,
            showSecondaryFooterAllLink: true,
            text: 'Shopping',
            url: '/shopping',
            isActive: false,
            label: 'Shopping'
          },
          {
            isExternal: false,
            showInTopNav: true,
            text: 'Video',
            url: '/video',
            forceLeftOfNav: false,
            isActive: false,
            label: 'Video'
          },
          {
            children: [],
            forceLeftOfNav: false,
            hasChildren: true,
            isExternal: false,
            layout: 'default',
            showInTopNav: true,
            text: 'PhotoVogue',
            url: '/photovogue',
            isActive: false,
            label: 'PhotoVogue'
          },
          {
            isExternal: false,
            showInTopNav: true,
            text: 'Vogue Club',
            url: '/vogue-club',
            forceLeftOfNav: false,
            isActive: false,
            label: 'Vogue Club'
          },
          {
            showInTopNav: true,
            text: 'Met Gala 2024',
            url: '/tag/event/met-gala',
            isActive: false,
            label: 'Met Gala 2024'
          },
          {
            showInTopNav: false,
            text: 'Podcast',
            url: '/podcast/the-run-through',
            isActive: false,
            label: 'Podcast'
          },
          {
            showInTopNav: false,
            text: 'Test',
            url: 'https://voguedeploy-vogue.gp-nonprod-ap-0.conde.digital/ping',
            isActive: false,
            label: 'Test'
          },
          {
            as: 'a',
            variant: 'menu',
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
          sm: 'start',
          lg: 'center'
        },
        areaName: 'logo',
        transformer: {
          source: 'primaryLinks',
          strategy: 'merge-and-sort',
          itemDefaults: {}
        },
        items: [
          {
            showInTopNav: true,
            text: 'Fashion',
            url: '/fashion',
            isActive: false,
            label: 'Fashion'
          },
          {
            isExternal: false,
            showInTopNav: true,
            text: 'Beauty',
            url: '/beauty',
            forceLeftOfNav: false,
            isActive: false,
            label: 'Beauty'
          },
          {
            isExternal: false,
            showInTopNav: true,
            text: 'Culture',
            url: '/culture',
            forceLeftOfNav: false,
            isActive: false,
            label: 'Culture'
          },
          {
            showInTopNav: true,
            text: 'Living',
            url: '/living',
            isActive: false,
            label: 'Living'
          },
          {
            showInTopNav: true,
            text: 'Weddings',
            url: '/weddings',
            isActive: false,
            label: 'Weddings'
          },
          {
            isExternal: false,
            showInTopNav: true,
            text: 'Runway',
            url: '/fashion-shows',
            forceLeftOfNav: false,
            isActive: false,
            label: 'Runway'
          },
          {
            children: [],
            forceLeftOfNav: false,
            hasChildren: true,
            hasHrefForLinks: true,
            isExternal: false,
            layout: 'column',
            maxItemsPerColumn: 9,
            showInTopNav: true,
            showSecondaryFooterAllLink: true,
            text: 'Shopping',
            url: '/shopping',
            isActive: false,
            label: 'Shopping'
          },
          {
            isExternal: false,
            showInTopNav: true,
            text: 'Video',
            url: '/video',
            forceLeftOfNav: false,
            isActive: false,
            label: 'Video'
          },
          {
            children: [],
            forceLeftOfNav: false,
            hasChildren: true,
            isExternal: false,
            layout: 'default',
            showInTopNav: true,
            text: 'PhotoVogue',
            url: '/photovogue',
            isActive: false,
            label: 'PhotoVogue'
          },
          {
            isExternal: false,
            showInTopNav: true,
            text: 'Vogue Club',
            url: '/vogue-club',
            forceLeftOfNav: false,
            isActive: false,
            label: 'Vogue Club'
          },
          {
            showInTopNav: true,
            text: 'Met Gala 2024',
            url: '/tag/event/met-gala',
            isActive: false,
            label: 'Met Gala 2024'
          },
          {
            showInTopNav: false,
            text: 'Podcast',
            url: '/podcast/the-run-through',
            isActive: false,
            label: 'Podcast'
          },
          {
            showInTopNav: false,
            text: 'Test',
            url: 'https://voguedeploy-vogue.gp-nonprod-ap-0.conde.digital/ping',
            isActive: false,
            label: 'Test'
          },
          {
            as: 'a',
            variant: 'logo',
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
        justifyContent: 'end',
        areaName: 'right-side',
        transformer: {
          source: 'primaryLinks',
          strategy: 'merge-and-sort',
          itemDefaults: {}
        },
        items: [
          {
            showInTopNav: true,
            text: 'Fashion',
            url: '/fashion',
            isActive: false,
            label: 'Fashion'
          },
          {
            isExternal: false,
            showInTopNav: true,
            text: 'Beauty',
            url: '/beauty',
            forceLeftOfNav: false,
            isActive: false,
            label: 'Beauty'
          },
          {
            isExternal: false,
            showInTopNav: true,
            text: 'Culture',
            url: '/culture',
            forceLeftOfNav: false,
            isActive: false,
            label: 'Culture'
          },
          {
            showInTopNav: true,
            text: 'Living',
            url: '/living',
            isActive: false,
            label: 'Living'
          },
          {
            showInTopNav: true,
            text: 'Weddings',
            url: '/weddings',
            isActive: false,
            label: 'Weddings'
          },
          {
            isExternal: false,
            showInTopNav: true,
            text: 'Runway',
            url: '/fashion-shows',
            forceLeftOfNav: false,
            isActive: false,
            label: 'Runway'
          },
          {
            children: [],
            forceLeftOfNav: false,
            hasChildren: true,
            hasHrefForLinks: true,
            isExternal: false,
            layout: 'column',
            maxItemsPerColumn: 9,
            showInTopNav: true,
            showSecondaryFooterAllLink: true,
            text: 'Shopping',
            url: '/shopping',
            isActive: false,
            label: 'Shopping'
          },
          {
            isExternal: false,
            showInTopNav: true,
            text: 'Video',
            url: '/video',
            forceLeftOfNav: false,
            isActive: false,
            label: 'Video'
          },
          {
            children: [],
            forceLeftOfNav: false,
            hasChildren: true,
            isExternal: false,
            layout: 'default',
            showInTopNav: true,
            text: 'PhotoVogue',
            url: '/photovogue',
            isActive: false,
            label: 'PhotoVogue'
          },
          {
            isExternal: false,
            showInTopNav: true,
            text: 'Vogue Club',
            url: '/vogue-club',
            forceLeftOfNav: false,
            isActive: false,
            label: 'Vogue Club'
          },
          {
            showInTopNav: true,
            text: 'Met Gala 2024',
            url: '/tag/event/met-gala',
            isActive: false,
            label: 'Met Gala 2024'
          },
          {
            showInTopNav: false,
            text: 'Podcast',
            url: '/podcast/the-run-through',
            isActive: false,
            label: 'Podcast'
          },
          {
            showInTopNav: false,
            text: 'Test',
            url: 'https://voguedeploy-vogue.gp-nonprod-ap-0.conde.digital/ping',
            isActive: false,
            label: 'Test'
          },
          {
            as: 'span',
            variant: 'simple-clickable',
            label: 'Subscribe'
          },
          {
            as: 'a',
            variant: 'link',
            url: '/beauty',
            label: 'Sign in'
          },
          {
            as: 'span',
            variant: 'simple-clickable',
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
        gridColumn: '1 / -1',
        justifyContent: 'center',
        areaName: 'secondary-links',
        transformer: {
          source: 'secondaryLinks',
          strategy: 'merge-and-sort',
          itemDefaults: {}
        },
        items: [
          {
            as: 'a',
            variant: 'link',
            url: '/',
            label: 'Fashion'
          },
          {
            as: 'a',
            variant: 'link',
            url: '/',
            label: 'Beauty'
          },
          {
            as: 'a',
            variant: 'link',
            url: '/',
            label: 'Culture'
          },
          {
            as: 'a',
            variant: 'link',
            url: '/',
            label: 'Living'
          },
          {
            as: 'a',
            variant: 'link',
            url: '/',
            label: 'Runway'
          },
          {
            as: 'a',
            variant: 'link',
            url: '/',
            label: 'Shopping'
          },
          {
            as: 'a',
            variant: 'link',
            url: '/',
            label: 'Magazine'
          },
          {
            as: 'a',
            variant: 'link',
            url: '/',
            label: 'VogueWorld'
          },
          {
            as: 'a',
            variant: 'link',
            url: '/',
            label: 'Weddings'
          },
          {
            as: 'a',
            variant: 'link',
            url: '/',
            label: 'Videos'
          },
          {
            as: 'a',
            variant: 'link',
            url: '/',
            label: 'Projects'
          },
          {
            as: 'a',
            variant: 'link',
            url: '/',
            label: 'Vogue App'
          }
        ]
      }
    ]
  }
];

const navigation = {
  primaryLinks: [
    {
      showInTopNav: true,
      text: 'Fashion',
      url: '/fashion',
      isActive: false
    },
    {
      isExternal: false,
      showInTopNav: true,
      text: 'Beauty',
      url: '/beauty',
      forceLeftOfNav: false,
      isActive: false
    },
    {
      isExternal: false,
      showInTopNav: true,
      text: 'Culture',
      url: '/culture',
      forceLeftOfNav: false,
      isActive: false
    },
    {
      showInTopNav: true,
      text: 'Living',
      url: '/living',
      isActive: false
    },
    {
      showInTopNav: true,
      text: 'Weddings',
      url: '/weddings',
      isActive: false
    },
    {
      isExternal: false,
      showInTopNav: true,
      text: 'Runway',
      url: '/fashion-shows',
      forceLeftOfNav: false,
      isActive: false
    },
    {
      children: [],
      forceLeftOfNav: false,
      hasChildren: true,
      hasHrefForLinks: true,
      isExternal: false,
      layout: 'column',
      maxItemsPerColumn: 9,
      showInTopNav: true,
      showSecondaryFooterAllLink: true,
      text: 'Shopping',
      url: '/shopping',
      isActive: false
    },
    {
      isExternal: false,
      showInTopNav: true,
      text: 'Video',
      url: '/video',
      forceLeftOfNav: false,
      isActive: false
    },
    {
      children: [],
      forceLeftOfNav: false,
      hasChildren: true,
      isExternal: false,
      layout: 'default',
      showInTopNav: true,
      text: 'PhotoVogue',
      url: '/photovogue',
      isActive: false
    },
    {
      isExternal: false,
      showInTopNav: true,
      text: 'Vogue Club',
      url: '/vogue-club',
      forceLeftOfNav: false,
      isActive: false
    },
    {
      showInTopNav: true,
      text: 'Met Gala 2024',
      url: '/tag/event/met-gala',
      isActive: false
    },
    {
      showInTopNav: false,
      text: 'Podcast',
      url: '/podcast/the-run-through',
      isActive: false
    },
    {
      showInTopNav: false,
      text: 'Test',
      url: 'https://voguedeploy-vogue.gp-nonprod-ap-0.conde.digital/ping',
      isActive: false
    }
  ]
};

const globalNavigationData = {
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
            sm: '2 / 6',
            lg: '6 / 8'
          },
          justifyContent: {
            sm: Alignment.START,
            lg: Alignment.CENTER
          },
          areaName: 'logo',
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
            source: 'primaryLinks',
            strategy: 'merge-and-sort',
            itemDefaults: {}
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
          gridColumn: '1 / -1', // or "1 / 13"
          justifyContent: Alignment.CENTER,
          areaName: 'secondary-links',
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
            sm: '1 / 3',
            lg: '6 / 8'
          },
          justifyContent: {
            sm: Alignment.START,
            lg: Alignment.CENTER
          },
          areaName: 'logo',
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
    }
  ]
};

export {
  GlobalNavigationVogueInput,
  GlobalNavigationVogueOutput,
  GlobalNavigationInput,
  GlobalNavigationOutput,
  navigation,
  globalNavigationData
};
