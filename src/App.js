import React, { Component, Fragment } from 'react';
import Header from './common/header'
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login'
import Write from './pages/write';
class App extends Component {
  render() {
    return (
      //Provider 里面所有的标签都可以使用store里面的数据

      <Provider store={store}>
        <Fragment>

          <BrowserRouter>
            <Fragment>
              <Header />
              <Route exact path='/' component={Home} ></Route>
              <Route exact path='/login' component={Login} ></Route>
              <Route exact path='/write' component={Write} ></Route>
              <Route exact path='/detail/:id' component={Detail} ></Route>   {/*动态路由*/} 
              {/* <Route exact path='/detail' component={Detail} ></Route> */}
            </Fragment>
          </BrowserRouter>
        </Fragment>
      </Provider>

    );
  }
}

export default App;
