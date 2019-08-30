import styled from 'styled-components';

export const FloatLeft = styled.div`
  float: left;
`;
export const FloatRight = styled.div`
  float: right;
`;
export const Clearfix = styled.div`
  &::after {
    display: block;
    content: '';
    clear: both;
  }
`;
