import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../utils/firebase';

import FormInput from './FormInput';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../store/user/user-action';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const onChangeHandler = e => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handlerSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('passwords r not match');
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormField();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('cannot create email, already in use');
        resetFormField();
      }
      console.error(error.message);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handlerSubmit}>
        <FormInput
          label={'Username'}
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={onChangeHandler}
        />

        <FormInput
          label={'Email'}
          type="email"
          required
          name="email"
          value={email}
          onChange={onChangeHandler}
        />

        <FormInput
          label={'Password'}
          type="password"
          required
          name="password"
          value={password}
          onChange={onChangeHandler}
        />

        <FormInput
          label={'Confirm Password'}
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChangeHandler}
        />
        <Button type="submit">sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
