var React = require('react');
var ReactDOM = require('react-dom');

var Greeting = React.createClass({
  render: function () {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
});

// ReactDOM.render goes here:
ReactDOM.render(
  <Greeting name='Groberta' />, 
  document.getElementById('app')
);