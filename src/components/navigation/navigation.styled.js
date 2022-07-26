import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  margin-left: 10px;

  &.active {
    color: tomato;
  }
`;
