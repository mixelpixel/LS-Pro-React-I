import React, { Component } from 'react'; // <--- no dot slash means look in node modules folder
// import NavBarButton from './NavBarButton';
import './NavBar.css'; // <--- works with className="navbar"

export default class NavBar extends Component {
  render() {
    return (
       // class vs className, somewhat different attributes
      <div className="navbar">
        {/* <NavBarButton text={'Home'} />
        <NavBarButton text={'FAQ'} />
        <NavBarButton text={'LogIn'} />
        <NavBarButton text={'About'} /> */}
        {/* <h1>a title</h1> */}
        <h1>My Web Page Title</h1>
      </div>
    );
  }
}
