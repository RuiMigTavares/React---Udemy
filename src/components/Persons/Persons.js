import React, { Component } from 'react';
import Person from './Person/Person';

/*const persons = (props) => props.persons.map((person, index) => {
    return <Person 
            key={person.id}
            name={person.name} 
            age={person.age}
            click={() => props.clicked(index)}
            changed={(event) => props.changed(event, person.id)}/>
} );*/

class Persons extends Component {

    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount()');
    }

    componentWillReceiveProps() {
        console.log('[Persons.js] Inside ccomponentWillReceiveProps()');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] Inside shouldComponentUpdate()');
        //return false //Stop
        return nextProps.persons !== this.props.persons ||
        nextProps.changed !== this.props.changed ||
        nextProps.clicked !== this.props.clicked;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[Persons.js] Inside componentWillUpdate()', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[Persons.js] Inside componentDidUpdate()');
    }

    render() {
        console.log('[Persons.js] Inside render()');
        return (this.props.persons.map((person, index) => {
            return <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.props.clicked(index)}
                changed={(event) => this.props.changed(event, person.id)} />
        })
        )
    }
}

export default Persons;