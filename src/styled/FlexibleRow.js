import styled from 'styled-components';
export default styled.div`
  display: flex;
  flex-direction: row;

  & > * {
    flex: 1 auto;
  }

  @media (max-width: ${props => props.column}) {
    flex-direction: column;
  }
`;
