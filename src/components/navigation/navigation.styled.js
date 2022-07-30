import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  margin-left: 10px;

  &.active {
    color: tomato;
  }
`;
