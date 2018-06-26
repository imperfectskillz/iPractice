import React, { Component } from 'react';
import {FormGroup, Button, ControlLabel, FormControl, HelpBlock, Checkbox, Radio} from 'react-bootstrap';

const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2)

class Stopwatch extends Component {
  constructor(props, context) {
    super(props, context);
  this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: "",
      secondsElapsed: 0,
      laps: [],
      laptext: [],
      laps: [{time: '', note: ""}],
      lastClearedIncrementer: null
    };
    this.incrementer = null;
  }



  handleChange(e) {
   this.setState({ value: e.target.value,
 });
 }

 handleSubmit(e){
    this.setState({
    lastClearedIncrementer: this.incrementer,
    laps: [{time: this.state.secondsElapsed, note: this.state.value}, ...this.state.laps]
  });
  }

  handleStartClick() {
    this.incrementer = setInterval( () =>
      this.setState({
        secondsElapsed: this.state.secondsElapsed + 1
      })
    , 1000);
  }

  handleStopClick() {
    clearInterval(this.incrementer);
    this.setState({
      lastClearedIncrementer: this.incrementer
      //laps: this.state.laps.concat([this.state.secondsElapsed])
    });
  }

  handleResetClick() {
    clearInterval(this.incrementer);
    this.setState({
      secondsElapsed: 0,
      laps: []
    });
  }



  render() {
    return (
      <div className="stopwatch">
        <h1 className="stopwatch-timer">{formattedSeconds(this.state.secondsElapsed)}</h1>

        {(this.state.secondsElapsed === 0 ||
          this.incrementer === this.state.lastClearedIncrementer
          ? <input type='Button' value='start' className="start-btn" onClick={this.handleStartClick.bind(this)} />
          : <input type='Button' value='stop' className="stop-btn" onClick={this.handleStopClick.bind(this)} />
        )}




        {(this.state.secondsElapsed !== 0 &&
          this.incrementer === this.state.lastClearedIncrementer
          ? <input type='Button' value='reset' className="start-btn" onClick={this.handleResetClick.bind(this)} />
          : null
        )}

        <form>
          <FormGroup controlId="formControlsTextarea" className="stopwatch">
            <ControlLabel><h3 className='stopwatch'>Notes:</h3></ControlLabel>
          <FormControl componentClass="textarea" onChange={this.handleChange.bind(this)}/>
          <Button onClick={this.handleSubmit.bind(this)} >Submit</Button>
            </FormGroup>
        </form>

        <ul className="stopwatch-laps">
          { this.state.laps.map((lap, i) =>
              <li><h2>{lap.note}/ {formattedSeconds(lap.time)}</h2></li>)
          }
        </ul>
      </div>
    );
  }
}


export default Stopwatch;
