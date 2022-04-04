import { Route, Switch } from '@modern-js/runtime/router';
import { Helmet } from '@modern-js/runtime/head';
import Index from './pages';
import Container from './pages/home/components';
import Login from './pages/login';

function App() {
  return (
    <Switch>
      <Route path="/" exact={true}>
        <Helmet>
          <title>首页</title>
        </Helmet>
        <Index />
      </Route>
      <Route path="/login" exact={true}>
        <Helmet>
          <title>登陆</title>
        </Helmet>
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
