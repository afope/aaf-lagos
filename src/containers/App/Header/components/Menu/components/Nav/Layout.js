import React from 'react';
import styled from 'styled-components';
import Link from '../../../../../../../base-styled-components/Link';


const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-right: 5rem;
  padding-left: 5rem;
  margin-top: 11rem;
  margin-bottom: 2rem;
  margin-right: 2rem;
`;

const NavLink = Link.extend`
  color: inherit;
  font-size: 1rem;
  color: #333;
  margin-top: 1rem;
  margin-right: 3.5rem;
`;

export default () => (
  <Nav>
    <NavLink to="/" activeClassName="active">Exhibitions</NavLink>
    <NavLink to="/" activeClassName="active">Events</NavLink>
    <NavLink to="/" activeClassName="active">Archives</NavLink>
    <NavLink to="/" activeClassName="active">Artists</NavLink>
    <NavLink to="/" activeClassName="active">Press</NavLink>
  </Nav>
);
