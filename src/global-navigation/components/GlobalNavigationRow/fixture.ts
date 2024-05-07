export const mockRowConfig = {
  columns: 18,
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
      name: 'logo-and-menu',
      cols: {
        sm: '1 / 1',
        md: '1 / 1',
        lg: '1 / 1',
        xl: '1 / 1',
        xxl: '1 / 1',
        xxxl: '1 / 1'
      },
      alignment: 'start',
      transformer: {
        source: 'primaryLinks',
        strategy: 'merge-and-sort',
        itemDefaults: {
          variant: 'simple-clickable'
        }
      },
      items: [
        {
          as: 'button',
          variant: 'menu',
          label: '☰'
        },
        {
          as: 'a',
          variant: 'logo',
          url: '/',
          label: 'LOGO'
        }
      ]
    },
    {
      name: 'main-links',
      cols: {
        sm: '2 / 16',
        md: '2 / 16',
        lg: '2 / 16',
        xl: '2 / 16',
        xxl: '2 / 16',
        xxxl: '2 / 16'
      },
      alignment: 'start',
      transformer: {
        source: 'primaryLinks',
        strategy: 'merge-and-sort',
        itemDefaults: {
          variant: 'simple-clickable'
        }
      },
      items: [
        {
          as: 'a',
          variant: 'simple-clickable',
          url: '/beauty',
          label: 'Beauty'
        },
        {
          as: 'a',
          variant: 'simple-clickable',
          url: '/fitness',
          label: 'Fitness'
        },
        {
          as: 'a',
          variant: 'simple-clickable',
          url: '/wellness',
          label: 'Wellness'
        }
      ]
    },
    {
      name: 'search-and-login',
      cols: {
        sm: '-1',
        md: '-1',
        lg: '-1',
        xl: '-1',
        xxl: '-1',
        xxxl: '-1'
      },
      alignment: 'end',
      transformer: {
        source: 'primaryLinks',
        strategy: 'merge-and-sort',
        itemDefaults: {
          variant: 'simple-clickable'
        }
      },
      items: [
        {
          as: 'a',
          variant: 'simple-clickable',
          url: '/beauty',
          label: 'Login'
        },
        {
          as: 'span',
          variant: 'divider',
          label: '|'
        },
        {
          as: 'a',
          variant: 'logo',
          url: '/beauty',
          label: 'Search'
        }
      ]
    }
  ]
};
