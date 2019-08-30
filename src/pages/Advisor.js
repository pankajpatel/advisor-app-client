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
  width: 300px;
  height: 300px;
  border: 1px solid var(--color-light-gray);
  border-radius: 0.5rem;
`;
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

const Advisor = ({ advisor }) => (
  <Container>
    <Link to="/">← Go Back to List</Link>
    <ProfileContainer>
      <ProfileImg src={advisor.avatar} alt="" />
      <ProfileInfo>
        <h1>{advisor.name}</h1>
      </ProfileInfo>
    </ProfileContainer>
  </Container>
);

export default Advisor;
