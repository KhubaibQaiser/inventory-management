import * as React from 'react';

export const useCategoryAttributeMenuState = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return {
    visible,
    openMenu,
    closeMenu,
  };
};
