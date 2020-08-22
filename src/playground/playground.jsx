class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteAll = this.handleDeleteAll.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.state = {
      options: ['Option Test One', 'Option Test Two', 'Option Test Three']
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      this.setState(() => ({options: options}));
    } catch (error) {
      // DO NOTHING IF ERROR
    }
  }

  // DONT UNDERSTAND WHY PREVPROPS IS NECESSARY HERE
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json);
    }
  }

  handleDeleteOption(option) {
    console.log("Option deleted:", option)
  }

  handleDeleteAll() {
    console.log("Deleted")
    this.setState(() => ({options: []}))
  }

  handleAddOption(option) {
    console.log("Executed: ", option)
    this.setState((prevState) => ({options: prevState.options.concat(option)}))
  }

  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options
        options = {this.state.options}
        handleDeleteAll = {this.handleDeleteAll}
        handleDeleteOption={this.handleDeleteOption} />
        <AddOption handleAddOption = {this.handleAddOption} />
      </div>
    );
  }
}

// HEADER STATELESS COMPONENTs

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision App (test)'
}

const Action = () => {
  return (
    <div>
      <button>What Should I Do</button>
    </div>
  );
}

// OPTIONS STATELESS COMPONENT

const Options = (props) => {
  return (
    <div>
      <button onClick = {props.handleDeleteAll}>Remove All</button>
      {props.options.map((option) =>
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      )}
    </div>
  );
}

// OPTION STATELESS COMPONENT

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button onClick={(e) => {
        props.handleDeleteOption(props.optionText)}} >Remove</button>
    </div>
  );
}

// ADD OPTION CLASS BASED COMPONENT

class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value;
    console.log(option);
    this.props.handleAddOption(option);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

// RENDERING TO DOM

ReactDOM.render(<IndecisionApp />, document.getElementById("app"))

















