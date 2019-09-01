import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link, Loading, AdvisorProfile } from '../components';
import { selectAdvisor } from '../store/advisor/actions';
import { Container, CenteredContainer } from '../styled';

const Advisor = props => {
  const { match, advisor, loading, error, selectAdvisor, config } = props;

  useEffect(() => {
    if (match.params.uuid === advisor.uuid) {
      return;
    }
    !loading && selectAdvisor(match.params.uuid);
  }, [loading, advisor, match, selectAdvisor]);

  const languages = config.languages.reduce(
    (acc, lang) => Object.assign(acc, { [lang.locale]: lang }),
    {},
  );

  return (
    <Container>
      <Link to="/">← Go Back to List</Link>
      {!loading && !error && advisor.uuid ? (
        <AdvisorProfile advisor={advisor} languages={languages} />
      ) : null}
      {loading ? <Loading /> : null}
      <CenteredContainer>
        {error ? <div>Error! {error.message}</div> : null}
      </CenteredContainer>
    </Container>
  );
};

const mapStateToProps = state => ({
  advisor: state.advisor.advisor,
  loading: state.advisor.loading,
  error: state.advisor.error,
});
const mapDispatchToProps = dispatch => ({
  selectAdvisor: id => dispatch(selectAdvisor(id)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Advisor),
);
