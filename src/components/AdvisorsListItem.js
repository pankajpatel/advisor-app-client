import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import exit from '../icons/exit.svg';

const Artwork = styled.img`
  width: 100px;
  height: 100px;
  flex: 1 100px;
  max-width: 100px;
  min-width: 100px;
  display: inline-block;
  margin-right: 1rem;
  border-radius: 50%;
  box-shadow: 0px 0px 4px 1px var(--color-light-gray);
`;

const ToPage = styled(Link)`
  display: inline-block;
  font-size: 3rem;
  max-width: 50px;
  flex: 1 50px;
  display: flex;
  flex-direction: column;
  transition: all ease 200ms;
  opacity: 0.3;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 450px;
`;
const MetaInfo = styled.div`
  text-align: center;

  & > span {
    display: block;

    &:first-child {
      font-size: 3rem;
      margin-bottom: 0.5rem;
      color: var(--color-orange-soda);
    }
  }
`;
const Article = styled.article`
  margin: 1.5rem 0;
  padding: 1rem;
  border: 1px solid rgba(100, 100, 100, 0.2);
  border-radius: 0.4rem;
  background: #f6f8ff;
  background: -webkit-linear-gradient(to right, #f6f8ff, #efefef);
  background: linear-gradient(to right, #f6f8ff, #efefef);
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  & > * {
    flex: 1 auto;
  }
  & * {
    transition: all ease 200ms;
  }
  &:hover {
    box-shadow: 0px 10px 25px rgba(100, 100, 100, 0.2);
    & ${ToPage} {
      opacity: 1;
    }
  }

  @media (max-width: 900px) {
    & ${Profile} {
      flex: 1 300px;
    }

    & ${ToPage} {
      position: absolute;
      right: 1rem;
      top: 2.5rem;
    }
  }
  @media (max-width: 768px) {
    & ${Profile} {
      flex: 1 100%;
      width: 100%;
    }
    & ${MetaInfo} > span:first-child {
      font-size: 2rem;
      margin-top: 1rem;
    }
  }
  @media (max-width: 520px) {
    & ${MetaInfo} > span:first-child {
      font-size: 1.5rem;
      margin-top: 1rem;
    }
  }
`;
const Icon = styled.img`
  width: auto;
  height: 1em;
  display: block;
  flex: 1 auto;
  transform: rotate(180deg);
`;
const Name = styled.h1`
  font-size: 2rem;
  font-weight: normal;
  flex: 1 250px;
  max-width: 250px;
  min-width: 250px;
`;

export default ({ advisor }) => (
  <Article>
    <Profile>
      <Artwork src={advisor.avatar} />
      <Name>{advisor.name}</Name>
    </Profile>
    <MetaInfo>
      <span>{advisor.languages.length}</span>
      <span>Languages</span>
    </MetaInfo>
    <MetaInfo>
      <span>{advisor.reviewsCount}</span>
      <span>Reviews</span>
    </MetaInfo>
    <MetaInfo>
      <span>{advisor.ratings.average}</span>
      <span>Avg. Rating</span>
    </MetaInfo>
    <ToPage to={`/advisors/${advisor.uuid}`}>
      <Icon src={exit} />
    </ToPage>
  </Article>
);
