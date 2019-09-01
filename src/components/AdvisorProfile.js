import React from 'react';
import styled from 'styled-components';
import { FlexibleRow, VerticallyPadded } from '../styled';

const ProfileImg = styled.img`
  width: 250px;
  height: 250px;
  max-width: 250px;
  flex: 1 250px;
  border: 1px solid var(--color-orange-soda);
  border-radius: 0.5rem;
  margin-right: 1.5rem;
  background: var(--color-cambridge-blue);

  @media (max-width: 520px) {
    width: 100%;
    height: auto;
    max-width: 100%;
    flex: 1 100%;
  }
`;
const Name = styled.h1`
  margin: 0;
  padding-bottom: 1rem;
`;

const AdvisorProfile = ({ advisor, languages }) => (
  <FlexibleRow column="520px">
    <ProfileImg src={advisor.avatar} alt="" />
    <div>
      <Name>{advisor.name}</Name>
      <VerticallyPadded>
        Avg. Rating: <strong>{advisor.ratings.average}</strong>
      </VerticallyPadded>
      <VerticallyPadded>
        Review Count: <strong>{advisor.reviewsCount}</strong>
      </VerticallyPadded>
      <VerticallyPadded>
        Speaks:{' '}
        <strong>
          {advisor.languages.map(lang => languages[lang].name).join(', ')}
        </strong>
      </VerticallyPadded>
      <VerticallyPadded>
        Email:{' '}
        <strong>
          <a href={`mailto:${advisor.email}`}>{advisor.email}</a>
        </strong>
      </VerticallyPadded>
      <VerticallyPadded>
        Website:{' '}
        <strong>
          <a target="_blank" href={advisor.website} rel="noopener noreferrer">
            {advisor.website}
          </a>
        </strong>
      </VerticallyPadded>
    </div>
  </FlexibleRow>
);

export default AdvisorProfile;
