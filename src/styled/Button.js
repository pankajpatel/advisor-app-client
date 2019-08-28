import styled from 'styled-components';

export default styled.button`
  font-size: 1rem;
  border: 1px solid var(--color-light-gray);
  padding: 0.5em 0.75em;
  background: var(--color-white);
  display: inline-block;
  margin: 0.5rem 0;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: all ease 200ms;

  &:hover {
    border-color: var(--color-gray);
  }
`
