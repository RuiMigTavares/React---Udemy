import React from 'react';
import styles from'./Cockpit.css';
import Aux from '../../hoc/Aux';

const Cockpit = (props) => {
    let btnClass = styles.Button;
    if (props.showPersons) {
        btnClass = [styles.Button, styles.Red].join(' ');
    }

    let classes = [];
    if(props.persons.length < 2){
      classes.push('red');
    }
    if(props.persons.length < 1){
      classes.push('bold');
    }

    return (
        <Aux>
        <p className={classes.join(' ')}>
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button className={btnClass} onClick={props.clicked}>Change Names</button>
        </Aux>
    );
}

export default Cockpit;