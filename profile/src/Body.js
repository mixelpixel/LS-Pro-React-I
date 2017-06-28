import React, { Component } from 'react'; // <--- no dot slash means look in node modules folder
import './Body.css';
import Snoopy from './SnoopyPuppy.gif'

export default class Body extends Component {
  render() {
    return (
       // class vs className, somewhat different attributes
      <div className="body">
        <img src={Snoopy} alt="missing" />
        Hello World!
      </div>
    );
  }
}
