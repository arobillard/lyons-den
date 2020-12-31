import styled, { css } from 'styled-components';

export const wrapper = css`
  width: var(--wrapper);
  margin: 0 auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const Container = styled.div`
  ${wrapper}
`;

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  ${wrapper}
`;
