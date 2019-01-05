import React, { Component, Fragment } from 'react';
import NavBar from './layout/NavBar'
import Footer  from './layout/Footer'
import OrderList from './components/OrderList'

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <div className="section no-pad-bot" id="index-banner">
          <div className="container">
            <br/> <br/>
            <h1 className="header center orange-text">Orders Management</h1>
            <div className="row center">
              <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
            </div>
            
            <br/><br/>
      
          </div>
        </div>
      
      
        <div className="container">
          <div className="section">
      
            <div className="row">
              <div className="col s12 m6">
                <div className="icon-block">
                  <h2 className="center light-blue-text"><i className="material-icons">playlist_add</i></h2>
                  <h5 className="center">Orders</h5>
      
                  <p className="light">Place to put a form for orders.</p>
                </div>
              </div>
      
              <div className="col s12 m6">
                <div className="icon-block">
                  <h2 className="center light-blue-text"><i className="material-icons">flash_on</i></h2>
                  <h5 className="center">Status Foward</h5>
      
                  <p className="light">Component to control the order status.</p>
                  <OrderList />
                </div>
              </div>
      
            </div>
      
          </div>
          <br /><br/>
        </div>
        <Footer />
   
    </Fragment>
    );
  }
}

export default App;
