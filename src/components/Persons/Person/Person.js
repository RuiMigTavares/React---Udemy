import React, { Component } from 'react';
//import Radium from 'radium';
import styles from './Person.css';
import wrapClass from '../../../hoc/wrapClass';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';

/*const person = (props) => {
    /*let style = {
        width: '60%',
        margin: '16px auto',
        border: '1px solid #eee',
        boxShadow: '0 2px 3px #ccc',
        padding: '16px',
        textAlign: 'center',
        '@media (min-width: 500px)':{
            width: '450px'
        }
    }
    return (
        <div className={styles.Person}>
        <p>I'm {props.name} and I have {props.age} years old</p>
        <p>{props.children}</p>
        <button onClick={props.click}>Click</button>
        <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}*/

class Person extends Component {
    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
        this.inputElement.focus();
    }

    clickHandler(input) {
        console.log(input.value); 
    }

    render() {
        console.log('[Person.js] Inside render()');
        return (
            <Aux>
            <p>I'm {this.props.name} and I have {this.props.age} years old</p>
            <p>{this.props.children}</p>
            <button onClick={this.props.click}>Click</button>
            <input ref={(input) => { this.inputElement = input }} type="text" onChange={this.props.changed} value={this.props.name}/>
            <button type="button" onClick={() => this.clickHandler(this.inputElement)}>Click</button>
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

//export default Radium(Person);
export default wrapClass(Person, styles.Person);