var React = require('react');
var ReactDOM = require('react-dom');
var GuessWhoContainer = require('./container/GuessWhoContainer.jsx');

window.onload = function(){
  ReactDOM.render(
    <GuessWhoContainer />,
    document.getElementById('app')
  );
}
