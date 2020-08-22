// Stateles functional component
// Class based component

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.state = {
      options: props.options
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options: options}));
      }
    } catch (error) {
      // Do nothing if error detected

    }

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json)
    }
  }

  componentWillUnmount() {
    console.log('component will unmount')
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
        options: prevState.options.filter((option) => {
          return optionToRemove !== option;
        })
    }));
  }

  handlePick() {
    let random = Math.floor(Math.random() * this.state.options.length)
    console.log(this.state.options[random])
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({options: prevState.options.concat(option)}));
  }

  render() {
    const subTitle = 'Put your life in the hands of a computer'

    return (
      <div>
        <Header subTitle={subTitle}/>
        <Action
        hasOptions={this.state.options.length > 0}
        handlePick={this.handlePick}
        />
        <Options
        options={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}
        handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
        handleAddOption={this.handleAddOption}
        />
      </div>
    );
  };
}

// DEFAULT PROPS FOR INDECISION APP

IndecisionApp.defaultProps = {
  options: []
};

// HEADER STATELESS COMPONENT

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subTitle && <h2>{props.subTitle}</h2>}
    </div>
  );
}

// HEADER DEFAULT PROPS

Header.defaultProps = {
  title: "Indecision (app.jsx)"
}


// ACTION STATELESS COMPONENT

const Action = (props) => {
  return (
    <div>
      <button
      onClick={props.handlePick}
      disabled={!props.hasOptions}>
      What should I do?
      </button>
    </div>
  );
}

// OPTIONS STATELESS COMPONENT

const Options = (props) => {
  return (
    <div>
    <button onClick={props.handleDeleteOptions}>Remove all</button>
    {props.options.length === 0 && <p>Please add an option</p>}
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
      <button
      onClick={(e) => {
        props.handleDeleteOption(props.optionText)
      }}
      >
      Remove
      </button>
    </div>
  );
}

// ADDOPTION CLASS BASED COMPONENT

class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e) {
    e.preventDefault(); // Prevent page refresh

    const option = e.target.elements.option.value.trim(); // Get input value
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error: error }));
    if (!error) {
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"></input>
          <button>Add option</button>
        </form>
      </div>
    );
  }

}


// USER STATELESS COMPONENT

const User = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

// RENDERING TO DOM

ReactDOM.render(<IndecisionApp options={['Devils', 'Second D']}/>, document.getElementById("app"))

















