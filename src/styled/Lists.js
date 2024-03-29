import styled from 'styled-components';

export default styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  & > li {
    display: ${props => (props.inline ? 'inline-block' : 'block')};
  }
`;
