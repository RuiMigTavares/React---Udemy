import React, { PureComponent } from 'react';
//import logo from '../assets//logo.svg';
//import Radium, {StyleRoot} from 'radium'
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import wrapClass from '../hoc/wrapClass';
import Aux from '../hoc/Aux';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      persons: [
        { id: '1', name: 'Rui', age: 36 },
        { id: '2', name: 'Karina', age: 36 },
      ],
      otherState: 'some other state',
      showPersons: false,
      togglePersons: 0
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  /*shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] Inside shouldComponentUpdate()');
    //return false //Stop
    return nextState.persons !== this.state.persons ||
        nextState.showPersons !== this.state.showPersons;
  }*/

  componentWillUpdate(nextProps, nextState) {
    console.log('[App.js] Inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[App.js] Inside componentDidUpdate()');
  }

  /*state = {
    persons: [
      { id: '1', name: 'Rui', age: '36' },
      { id: '2', name: 'Karina', age: '36' },
    ],
    otherState: 'some other state',
    showPersons: false
  }*/

  switchNameHandler = (name) => {
    this.setState({
      persons: [
        { name: name, age: 36 },
        { name: 'Rui e Karina', age: 36 },
      ]
    });
  }

  nameChangedHandler = (event, id) => {
    let personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;

    let persons = [...this.state.persons];
    persons[personIndex] = person;
    //const person = Object.assign({}, this.state.persons[personIndex]); //Old version

    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (personIndex) => {
    //let persons = this.state.persons; //this is ok
    //let persons = this.state.persons.slice(); //this is best practice 
    let persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  showPersonsHandler = () => {
    const doesPersons = this.state.showPersons;
    this.setState( (prevState, props) => { 
      return { 
        showPersons: !doesPersons,
        togglePersons: prevState.togglePersons + 1
      }
    })
  }

  render() {
    console.log('[App.js] Inside render()');
    /*const style = {
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid black',
      padding: '8px',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }*/

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      )

      /*persons = (
        <div>
          { this.state.persons.map((person, index) => 
            <Person 
            key={person.id}
            name={person.name} 
            age={person.age}
            click={() => this.deletePersonHandler(index)}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
          )
          }
        </div> 
      )*/

      /*style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }*/
    }

    return (
      <Aux>
        <Cockpit clicked={this.showPersonsHandler} persons={this.state.persons} showPersons={this.state.showPersons} />
        <button onClick={() => { this.setState({showPersons:true})}}> Show </button>
        {persons}
      </Aux>

    );
  }
}

//export default Radium(App);
export default wrapClass(App, styles.App);