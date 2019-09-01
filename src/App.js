import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import { Advisors, Advisor } from './pages';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { VerticallyPadded } from './styled';

const App = props => {
  return (
    <main>
      <Header name={props.config.name} />
      <VerticallyPadded>
        <Router>
          <Route path="/" exact component={() => <Advisors {...props} />} />
          <Route
            path="/advisors"
            exact
            component={() => <Advisors {...props} />}
          />
          <Route
            path="/advisors/:uuid"
            exact
            component={() => <Advisor {...props} />}
          />
        </Router>
      </VerticallyPadded>
    </main>
  );
};

App.propTypes = {
  config: PropTypes.object.isRequired,
};

export default App;
