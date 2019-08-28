import React from 'react';
import styled from 'styled-components';

const Loading = styled.div`
  /* Loader taken form: */
  /* https://github.com/nzbin/three-dots/blob/master/dist/three-dots.css#L190 */
  :root {
    --color-purple: #9880ff;
    --color-dimmed-purple: #ebe6ff;
  }

  @keyframes dotFlashing {
    0% {
      background-color: var(--color-purple);
    }
    50%,
    100% {
      background-color: var(--color-dimmed-purple);
    }
  }

  position: relative;
  margin: 3rem auto;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: var(--color-purple);
  color: var(--color-purple);
  animation: dotFlashing 1s infinite linear alternate;
  animation-delay: 0.5s;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
  }

  &::before {
    left: -15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: var(--color-purple);
    color: var(--color-purple);
    animation: dotFlashing 1s infinite alternate;
    animation-delay: 0s;
  }

  &::after {
    left: 15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: var(--color-purple);
    color: var(--color-purple);
    animation: dotFlashing 1s infinite alternate;
    animation-delay: 1s;
  }
`;

export default props => <Loading>{props.chidlren}</Loading>;
