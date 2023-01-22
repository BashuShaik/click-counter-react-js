// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  increment = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked
          <br />
          <span className="span">{count}</span> times
        </h1>
        <p className="heading">click the button to increase the count</p>
        <button type="button" className="button" onClick={this.increment}>
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
