import React from 'react';
import './App.css';
import Layout from '../components/Layout/layout';
import Home from '../components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import notFound from '../components/ErrorPages/NotFound/NotFound';
import asyncComponent from '../hoc/asyncComponent/asyncComponent';
import InternalServer from '../components/ErrorPages/InternalServer/InternalServer';
import OwnerDetails from './Owner/OwnerDetails/OwnerDetails';

const AsyncOwnerList = asyncComponent(() => {
  return import ('./Owner/OwnerList/OwnerList')
}) //lazy Loading
const AsyncCreateOwner = asyncComponent(() => {
  return import ('./Owner/CreateOwner/CreateOwner')
}) //lazy Loading
const AsyncUpdateOwner = asyncComponent(() => {
  return import ('./Owner/UpdateOwner/UpdateOwner')
}) //lazy Loading
const AsyncDeleteOwner = asyncComponent(() => {
  return import ('./Owner/DeleteOwner/DeleteOwner')
}) //lazy Loading

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/owner-list" component={AsyncOwnerList} />
          <Route path='/ownerDetails/:id' component={OwnerDetails} />
          <Route path='/createOwner' component={AsyncCreateOwner} />
          <Route path="/updateOwner/:id" component={AsyncUpdateOwner} />
          <Route path='/deleteOwner/:id' component={AsyncDeleteOwner} />
          <Route path='/500' component={InternalServer} />
          <Route path="*" component={notFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
