//actions folder
import axios from 'axios';
import { FETCH_USER } from './types';

//Action creator gets current user model
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
   }; 
//action creator update user model eith amount of credits
export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

    dispatch({ type: FETCH_USER, payload: res.data });
   };
