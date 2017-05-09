var React = require('react');

var StewDescriber = React.createClass({
  render: function () {
    return (
      <div>
        <h1>I AM THE STEW DESCRIBER</h1>;
        <h1>THE WORLD'S GREATEST STEW IS {this.props.stew.toUpperCase()}!</h1>
        <h1>HERE'S MY DESCRIPTION: IT'S MAD TASTY</h1>
      </div>
    );
  }
});

module.exports = StewDescriber;