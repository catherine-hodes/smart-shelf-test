import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Fridge from './Fridge'; 
import './styles.css';

const InputList = ({ onAddToGroceryList }) => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [itemToAdd, setItemToAdd] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      const newItem = {
        value: inputValue,
        date: startDate ? startDate : null,
      };

      setItems([...items, newItem]);
      setInputValue('');
      setStartDate(null);

      if (isDateApproaching(newItem.date)) {
        setItemToAdd(newItem.value);
        setShowPopup(true);
      }
    } else {
      alert("Please enter an item.");
    }
  };

  const isDateApproaching = (date) => {
    if (!date) return false;
    const today = new Date();
    const diffTime = date - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays >= 0 && diffDays <= 3; // Change threshold as needed
  };

  const handleConfirmAddToGroceryList = () => {
    onAddToGroceryList(itemToAdd);
    setShowPopup(false);
    setItemToAdd(null);
  };

  const handleCancelAddToGroceryList = () => {
    setShowPopup(false);
    setItemToAdd(null);
  };

  return (
    <div>
      <h1>Enter Food Item</h1>
      <form onSubmit={handleSubmit} className="input-form">
  <div className="input-group">
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="Enter an item"
      className="item-input"
    />
  </div>
  <DatePicker
    selected={startDate}
    onChange={handleDateChange}
    placeholderText="Select a date"
    dateFormat="MMMM d, yyyy"
    className="datepicker-input"
    minDate={new Date()} // Prevent past dates
  />
  <button type="submit">Submit</button>
</form>

      {/* Fridge component to display items */}
      <Fridge items={items} />
      
      {/* Popup logic */}
      {showPopup && (
        <div className="popup">
          <p>{itemToAdd} is about to expire. Do you want to add it to your grocery list?</p>
          <button onClick={handleConfirmAddToGroceryList}>Yes</button>
          <button onClick={handleCancelAddToGroceryList}>No</button>
        </div>
      )}
    </div>
  );
};

export default InputList;


