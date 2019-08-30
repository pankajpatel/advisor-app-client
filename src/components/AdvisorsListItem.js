import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import exit from '../icons/exit.svg';

const Artwork = styled.img`
  width: 100px;
  height: 100px;
  flex: 1 100px;
  max-width: 100px;
  display: inline-block;
  margin-right: 1.5rem;
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

const ChartPosition = styled.div`
  position: absolute;
  bottom: 0.7rem;
  left: 1.5rem;
  font-size: 5rem;
  color: #ededed;
  z-index: 1;
  opacity: 0.8;
  transition: all ease 200ms;
  text-shadow: 0 2px 5px rgba(100, 100, 100, 0.4);
`;
const Article = styled.article`
  margin: 1.5rem 0;
  padding: 1rem;
  border: 1px solid rgba(100, 100, 100, 0.2);
  border-radius: 0.4rem;
  background: #f6f8ff;
  background: -webkit-linear-gradient(to right, #f6f8ff, #efefef);
  background: linear-gradient(to right, #f6f8ff, #efefef);
  transition: all ease 200ms;
  position: relative;
  display: flex;
  & > * {
    flex: 1 auto;
  }
  &:hover {
    box-shadow: 0px 10px 25px rgba(100, 100, 100, 0.2);
    & ${ToPage} {
      opacity: 1;
    }
    & ${ChartPosition} {
      opacity: 0.3;
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
  flex: 1 300px;
  max-width: 300px;
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

export default ({ advisor }) => (
  <Article>
    <Artwork src={advisor.avatar} />
    <Name>{advisor.name}</Name>
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
