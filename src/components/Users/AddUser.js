import React, { useState,useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
import Wrapper from '../UI/Wrapper';

const AddUser = (props) => {

 const nameInputRef = useRef();
 const ageInputRef=useRef();

 const College_name=useRef();

  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName= nameInputRef.current.value;
    const enteredUserAge =ageInputRef.current.value;
    const enteredCollegeName=College_name.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge,enteredCollegeName);
    // setEnteredUsername('');
    // setEnteredAge('');
    nameInputRef.current.value='';
    ageInputRef.current.value='';
    College_name.current.value=''
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
           <label htmlFor="college_name">College Name</label>
           <input
            id="college_name"
            type="text"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={College_name}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
      </Wrapper>
  );
};

export default AddUser;
