import React from 'react';
import {
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import Counter from 'components/counter';
import ListSample from 'components/ListSample';
import App from '../app';

const router = () => (
  <App>
    <Switch>
      <Route exact path="/" component={() => <div>Hello world <Link to="/counter">Go Counter</Link></div>} />
      <Route path="/counter" component={Counter} />
      <Route path="/list" component={ListSample} />
    </Switch>
  </App>
);

export default router;
