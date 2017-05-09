import logo from './logo.svg';
import './App.css';
var React = require('react');
var ReactDOM = require('react-dom');


var PropsDisplayer = React.createClass({
  render: function () {
    var stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
});

ReactDOM.render(<PropsDisplayer />, document.getElementById('app'));
