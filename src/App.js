import React from 'react';
import Header from './components/Header';
import { Advisors, Advisor } from './pages';
import { Route } from 'react-router-dom';

import { VerticallyPadded } from './styled';

const App = props => {
  return (
    <main>
      <Header name={props.config.name} />
      <VerticallyPadded>
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
      </VerticallyPadded>
    </main>
  );
};

export default App;
