import React, { useEffect } from 'react';
import { Container } from '../styled';
import { Loading, AdvisorsList } from '../components';
import { connect } from 'react-redux';
import { fetchAdvisors, loadMoreAdvisors } from '../store/advisors/actions';
import debounce from '../utils/debounce';

const Advisors = props => {
  const { error, loading, advisors, hasMore } = props;
  const infiniteScroll = () => {
    window.onscroll = debounce(() => {
      if (error || loading || !hasMore) {
        return;
      }

      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        advisors.length && props.loadMoreAdvisors();
      }
    }, 200);
  };
  const loadAdvisors = () => {
    !loading && !advisors.length && props.loadAdvisors();
  };

  infiniteScroll();
  useEffect(() => {
    loadAdvisors();
  });

  return (
    <Container>
      <div>Advisors:</div>
      {!loading && !error && advisors.length ? (
        <AdvisorsList advisors={advisors} />
      ) : null}
      {loading ? <Loading /> : null}
      {error ? <div>Error! {error.message}</div> : null}
    </Container>
  );
};

const mapStateToProps = state => ({
  advisors: state.advisors.advisors,
  loading: state.advisors.loading,
  error: state.advisors.error,
  hasMore: state.advisors.hasMore,
});

const mapDispatchToProps = dispatch => ({
  loadAdvisors: () => dispatch(fetchAdvisors()),
  loadMoreAdvisors: () => dispatch(loadMoreAdvisors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Advisors);
