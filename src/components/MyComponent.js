import React from 'react';

export default class MyComponent extends React.Component {
  render() {
    return <div><input
      onChange={(event) => {this.setState({input: ''})}}
      type="text" /></div>;
  }
}
