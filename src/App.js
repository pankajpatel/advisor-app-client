import React from 'react';
import Header from './components/Header';
import { Advisors } from './pages';
import { Route } from 'react-router-dom';

import { VerticallyPadded } from './styled';

const App = props => {
  return (
    <main>
      <Header name={props.config.name} />
      <VerticallyPadded>
        <Route path="/" exact component={() => <Advisors {...props} />} />
      </VerticallyPadded>
    </main>
  );
};

export default App;
