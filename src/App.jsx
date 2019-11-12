import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Preloader from './components/preloader/Preloader';
import Header from './components/header/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

class App extends Component {
  render() {
    return (
      <>
        <Preloader visible={this.props.isLoading} />
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/products/:id" component={ProductsPage} />
            <Route path="/products" component={ProductsPage} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
        </main>
      </>
    );
  }
}

function mapStateToProps({ app }) {
  return {
    isLoading: app.isLoading,
  };
}

export default connect(mapStateToProps)(App);
