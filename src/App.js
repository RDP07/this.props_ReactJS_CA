import logo from './logo.svg';
import './App.css';
var React = require('react');
var ReactDOM = require('react-dom');


var Greeting = React.createClass({
  render: function () {
    return <h1></h1>;
  }
});

ReactDOM.render(<Greeting name="Groberta" />, document.getElementById('app'));
