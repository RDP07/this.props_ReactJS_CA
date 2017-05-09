var React = require('react');
var ReactDOM = require('react-dom');
var StewDescriber = require('./StewDescriber');

var MainPage = React.createClass({
  render: function () {
    return (
      <div>
        <h1>WELCOME 2 MY SITE WHERE I DESCRIBE THINGS!!</h1>
        <h1>Today I will be describing stews!  Tomorrow, who knows!  Life is a journey</h1>
        <StewDescriber stew="watery, pale, extremely cold stew" />
        <h1>Don't forget to clap back in the comments</h1>
      </div>
    );
  }
});

ReactDOM.render(
  <MainPage />, 
  document.getElementById('app')
);