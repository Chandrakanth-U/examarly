import "./index.css";
import Progress from "../Progress";
import { Component } from "react";

class Strengthbar extends Component {
  render() {
    const { progressed } = this.props;
    let progressed_1 = progressed > 33 ? 100 : progressed;
    let progressed_2 = progressed > 66 ? 100 : progressed;
    let progressed_3 = progressed - 66;
    return (
      <div className="bar-container">
        <div className="header-container">
          <h1>Strength Bar</h1>
          <p>Introducing strength bar to help you know your week subjects.</p>
        </div>
        <div className="container">
          <div className="grid-1">
            <p>Weak</p>
            <div className="progress-container">
              <Progress className="float-child" completed={progressed_1} />
              <Progress className="float-child" completed={progressed_2} />
              <Progress className="float-child" completed={progressed_3 * 3} />
            </div>
          </div>

          <div className="grid-2">
            <p>Average</p>
            <div className="progress-container">
              <Progress className="float-child" completed={progressed_1} />
              <Progress className="float-child" completed={progressed_2} />
              <Progress className="float-child" completed={progressed_3 * 3} />
            </div>
          </div>

          <div className="grid-3">
            <p>Improvement</p>
            <div className="progress-container">
              <Progress className="float-child" completed={progressed_1} />
              <Progress className="float-child" completed={progressed_2} />
              <Progress className="float-child" completed={progressed_3 * 3} />
            </div>
          </div>

          <div className="grid-4">
            <p>Cutoff level</p>
            <div className="progress-container">
              <Progress className="float-child" completed={100} />
              <Progress className="float-child" completed={100} />
              <Progress className="float-child" completed={100} />
            </div>
          </div>
        </div>
        <div className="button-container">
          <button>Finish</button>
        </div>
      </div>
    );
  }
}

export default Strengthbar;
