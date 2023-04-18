import { useState } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Navigation from './routes/Navigation';
import SignIn from './routes/SignIn';
import Shop from './routes/Shop';
import CheckOutPage from './routes/CheckOutPage';
import { useEffect } from 'react';
import {
  onAuthStateChangedListener,
  signOutUser,
  createUserDocumentFromAuth,
} from './utils/firebase';
import { setCurrentUser } from './store/user/user-action';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(user => {
      if (user) createUserDocumentFromAuth(user);
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="checkout" element={<CheckOutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
