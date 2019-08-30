import React from 'react';
import { Link } from '../components';
import { Container } from '../styled';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;

  & > * {
    flex: 1 auto;
  }
`;
const ProfileImg = styled.img`
  width: 250px;
  height: 250px;
  max-width: 250px;
  flex: 1 250px;
  border: 1px solid var(--color-orange-soda);
  border-radius: 0.5rem;
  margin-right: 1rem;
  background: var(--color-cambridge-blue);
`;
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: row;
  & h1 {
    margin: 0;
    padding-bottom: 1rem;
  }
`;

const Advisor = props => (
  <Container>
    <Link to="/">← Go Back to List</Link>
    <ProfileContainer>
      <ProfileImg src={''} alt="" />
      <ProfileInfo>
        <h1>Advisor's Profile</h1>
      </ProfileInfo>
    </ProfileContainer>
  </Container>
);

export default Advisor;
