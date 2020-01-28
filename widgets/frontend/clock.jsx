import React from 'react';

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = { newDate: new Date() };
    this.tick = this.tick.bind(this);
    this.interval = null;
  }

  render() {
    return (
      <div className="clock">
        <h1 className='flashit'>Awesome Clock</h1>
        <div className="clock-content">
          <ul className="content-header">
            <li><h2>Time:</h2></li>
            <li><h2>Date:</h2></li>
          </ul>
          <ul className="time-details">
            <li><h2>{this.getHours()}:{this.getMinutes()}:{this.getSeconds()}</h2></li>
            <li><h2>{this.state.newDate.toDateString()}</h2></li>
          </ul>
        </div>
        <button onClick={this.componentWillUnmount.bind(this)}>STOP TIME</button>
      </div>
    );
  }

  tick() {
    this.setState({ newDate: new Date() });
  }

  getSeconds() {
    let seconds = this.state.newDate.getSeconds();
    return seconds;
  }

  getMinutes() {
    let minutes = this.state.newDate.getMinutes();
    return minutes;
  }

  getHours() {
    let hours = this.state.newDate.getHours();
    return hours;
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

}

export default Clock;