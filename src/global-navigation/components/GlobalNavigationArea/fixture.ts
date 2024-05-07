export const mockAreaConfig = {
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
};
