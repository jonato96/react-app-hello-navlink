import React from 'react'
import Dog from "./Dog"

class Dogs extends React.Component {
    constructor(props) {
      super(props);
      this.state = { timeToEat: false };
    }
    render() {
      return (
        <div>
          <Dog timeToEat={this.state.timeToEat} />
          <button onClick={() => this.setState({ timeToEat: !this.state.timeToEat })}>
            Change
          </button>
        </div>
      );
    }
  }
  
  export default Dogs;
  