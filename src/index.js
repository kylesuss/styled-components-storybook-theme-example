import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const Button = styled.button`
  color: ${props => props.theme.color};
`;

const Root = props => {
  const themeContext = useContext(ThemeContext);
  console.log(themeContext);
  return <Button {...props}>Button</Button>;
};

export default Root;
