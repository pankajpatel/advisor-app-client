import React from 'react';
import { AdvisorsList, InView, Loading } from './';
import { Button, CenteredContainer } from '../styled';

export default props => {
  const { error, loading, advisors, hasMore } = props;
  const loadMore = () => {
    !loading && hasMore && props.loadMoreAdvisors();
  };
  const loader = (
    <InView onChange={(e, entry) => entry.isIntersecting && loadMore()}>
      <Button onClick={loadMore}>Load More...</Button>
    </InView>
  );

  return (
    <div>
      {!loading && !error && advisors.length ? (
        <AdvisorsList advisors={advisors} />
      ) : null}
      {loading ? <Loading /> : null}
      <CenteredContainer>
        {error ? <div>Error! {error.message}</div> : null}
        {hasMore ? loader : 'You have reached the end of the list'}
      </CenteredContainer>
    </div>
  );

  
};
