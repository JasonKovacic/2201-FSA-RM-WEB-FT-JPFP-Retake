import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import AddRobot from

class AddRobot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleKey = this.handleKey.bind(this);
  }

  handleKey(evt) {
    if (evt.key === 'Enter') {
      this.props.add(this.state.input);
      this.setState({ input: '' });
    }
  }

  render() {
    return (
      <div className="add-project">
        <input
          type="text"
          value={this.state.input}
          onChange={(evt) => this.setState({ input: evt.target.value })}
          onKeyDown={this.handleKey}
        />
        <button
          type="button"
          onClick={() => {
            this.props.add(this.state.input);
            this.setState({ input: '' });
          }}
        >
          Add Project
        </button>
      </div>
    );
  }
}

export default AddRobot;
