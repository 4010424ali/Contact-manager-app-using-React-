import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Contacts from './components/Contacts';
import Header from './components/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Text from './components/text/Text';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      //basename= {process.eventNames.PUBLIC_URL} is not working
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />

            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />

                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/text" component={Text} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
