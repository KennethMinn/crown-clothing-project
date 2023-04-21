import { useState } from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../utils/firebase';
import FormInput from './FormInput';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../store/user/user-action';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const dispatch = useDispatch();

  const loginWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const onChangeHandler = e => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  // console.log(formFields);

  const handlerSubmit = async e => {
    e.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormField();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password');
          resetFormField();
          break;

        case 'auth/user-not-found':
          alert('no user associated with this email');
          resetFormField();
          break;

        default:
          console.error(error);
      }
      // if (error.code === "auth/wrong-password") alert("incorrect password");
      // if (error.code === "auth/user-not-found")
      // alert("no user associated with this email");
      // console.error(error.message);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handlerSubmit}>
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
        <div className=" d-flex justify-content-center gap-3">
          <Button type="submit">sign in</Button>
          <Button type="button" buttonType={'google'} onClick={loginWithGoogle}>
            Sign in with google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
