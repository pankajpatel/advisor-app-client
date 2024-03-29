import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-block;
  color: inherit;
  text-decoration: none;
  padding: 0.5rem 0 1.5rem;
  transition: all ease 200ms;
  font-weight: 400;
  transform-origin: left center;

  &:hover {
    transform: scale(1.1);
    text-shadow: 0 0 2px 5px rgba(255, 255, 255, 0.2);
    font-weight: 600;
  }
`;
