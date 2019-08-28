import React from 'react';
import styled from 'styled-components';
import { AdvisorsListItem } from './';

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  & > li {
    display: block;
  }
`;

export default ({ advisors }) => (
  <List>
    {advisors.map(advisor => (
      <li key={advisor.uuid}>
        <AdvisorsListItem advisor={advisor} />
      </li>
    ))}
  </List>
);
