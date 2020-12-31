import { Link } from 'gatsby';
import React from 'react';
import styled, { css } from 'styled-components';
import { wrapper } from '../styles/Layout';
import Nav from './Nav';

const Masthead = styled.header`
  background-color: var(--color-primary);
  color: #fff;
  padding: 0.75rem 0;
  strong,
  a {
    color: #fff;
    text-decoration: none;
    margin: 0;
    &[aria-current='page'],
    &.active {
      color: yellow;
    }
  }
  strong {
    display: block;
  }
  ul {
    display: flex;
    align-items: center;
  }
  li:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${wrapper}
`;

export default function Header() {
  return (
    <Masthead>
      <Wrapper>
        <Link to="/">
          <strong className="scale-4">Lyon's Den</strong>
          {}
        </Link>
        <Nav id="nav" classNames="nav" />
      </Wrapper>
    </Masthead>
  );
}
