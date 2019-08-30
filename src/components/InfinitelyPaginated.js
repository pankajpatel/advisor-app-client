import React from 'react';

export default props => {
  const { error, loading, advisors, hasMore } = props;
  return (
    <div>
      {!loading && !error && advisors.length ? (
        <AdvisorsList advisors={advisors} />
      ) : null}
      {loading ? <Loading /> : null}
      {error ? <div>Error! {error.message}</div> : null}
    </div>
  );
};
