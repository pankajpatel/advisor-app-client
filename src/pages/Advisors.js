import React, { useEffect } from 'react';
import { Container } from '../styled';
import { InfinitelyPaginated } from '../components';
import { connect } from 'react-redux';
import { fetchAdvisors, loadMoreAdvisors } from '../store/advisors/actions';

const Advisors = props => {
  const { loading, advisors } = props;
  const loadAdvisors = () => {
    !loading && !advisors.length && props.loadAdvisors();
  };

  useEffect(() => {
    !advisors.length && !loading && loadAdvisors();
  });

  return (
    <Container>
      <InfinitelyPaginated {...props} />
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
