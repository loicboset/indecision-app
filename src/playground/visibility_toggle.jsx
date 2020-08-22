class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      toggle: false
    }
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        toggle: !prevState.toggle
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{
          this.state.toggle ? "Hide details" : "Show details"
        }</button>
        {this.state.toggle && <p>Some details</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"))

// const onToggle = () => {
//   toggle = !toggle;
//   render();
// };

// let toggle = false;

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={onToggle}>{toggle ? "Hide details" : "Show details"}</button>
//       {toggle && <p>Some details</p>}
//     </div>
//   );

//   ReactDOM.render(jsx, document.getElementById("app"));
// };

// render();
