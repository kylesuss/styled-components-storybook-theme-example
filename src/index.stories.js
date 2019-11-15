import React, { useContext } from 'react';
import Index from './index';
import { storiesOf } from '@storybook/react';
import { ThemeProvider, ThemeContext } from 'styled-components';

const Theme = ({ children }) => {
  const themeContext = useContext(ThemeContext);
  // The theme context is available here.
  console.log(themeContext);
  return children;
};

const theme = {
  color: 'blue',
};

storiesOf('Button', module)
  .addDecorator(storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>)
  .add('default', () => {
    // You cannot access the theme context here. It is not yet available.
    return (
      <Theme>
        <Index />
      </Theme>
    );
  });
