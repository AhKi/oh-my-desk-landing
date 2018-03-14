import React from 'react';
import {
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import Counter from 'components/counter';
import App from '../app';

const router = () => (
  <App>
    <Switch>
      <Route exact path="/" component={() => <div>Hello world <Link to="/counter">Go Counter</Link></div>} />
      <Route path="/counter" component={Counter} />
    </Switch>
  </App>
);

export default router;
