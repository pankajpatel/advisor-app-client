import React, { useEffect } from 'react';
import { Container } from '../styled';
import { Loading, AdvisorsList } from '../components';
import { connect } from 'react-redux';
import { fetchAdvisors } from '../store/advisors/actions';

const Home = props => {
  const { error, loading, advisors } = props;

  useEffect(() => {
    !loading && !advisors.length && props.loadAdvisors();
  });

  return (
    <Container>
      Advisors:
      {error ? <div>Error! {error.message}</div> : null}
      {loading ? <Loading /> : null}
      {!loading && !error && advisors.length ? (
        <AdvisorsList advisors={advisors} />
      ) : null}
    </Container>
  );
};

const mapStateToProps = state => ({
  advisors: state.advisors.advisors,
  loading: state.advisors.loading,
  error: state.advisors.error,
});

const mapDispatchToProps = dispatch => ({
  loadAdvisors: () => dispatch(fetchAdvisors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
