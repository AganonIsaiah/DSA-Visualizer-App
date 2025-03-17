import axios from 'axios';
import API_URL from '../api/dsa_api';
import { useState } from 'react';

const useListBased = (dsType) => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');
  const [peekValue, setPeekValue] = useState(null);
  const [recentlyRemoved, setRecentlyRemoved] = useState(null);

  const addElement = async (reqType) => {
    if (input !== '') {
      try {
        const response = await axios.post(`${API_URL}/${dsType}/${reqType}`, input);
        setList(response.data);
        setInput('');
        setPeekValue(null);
        setRecentlyRemoved(null);
      } catch (error) {
        console.error('Error adding element', error);
      }
    }
  };

  const removeElement = async (reqType, showRemoved) => {
    try {
      const response = await axios.post(`${API_URL}/${dsType}/${reqType}`);
      const removed = showRemoved === 'yes' ? list[0] : list[list.length-1];
      
      setList(response.data);
      setPeekValue(null);
      setRecentlyRemoved(removed)
    } catch (error) {
      console.error('Error removing element', error);
    }
  };

  const peekElement = async (reqType) => {
    try {
      const response = await axios.get(`${API_URL}/${dsType}/${reqType}`);
      setPeekValue(response.data);
      setRecentlyRemoved(null);
    } catch (error) {
      console.error('Error peeking element', error);
    }
  };

  const emptyList = async (reqType) => {
    try {
      const res = await axios.post(`${API_URL}/${dsType}/${reqType}`);
      setList(res.data);
      setInput('');
      setPeekValue(null);
      setRecentlyRemoved(null);
    } catch (err) {
      console.error('Error emptying list', err);
    }
  };

  return {
    list,
    input,
    peekValue,
    recentlyRemoved,
    setInput,
    addElement,
    removeElement,
    peekElement,
    emptyList,
  };
};

export default useListBased;