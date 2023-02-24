import Input from './Input';
import Select from './Select';
import Button from './Button';
import useFormField from '../hooks/useFormField';
import isNumeric from '../utils/isNumeric';
import { useState } from 'react';

function BookingForm(props) {
  const [date, setDate, dateError] = useFormField(null, validateDate);
  const [time, setTime, timeError] = useFormField(null, validateTime);
  const [guests, setGuests, guestsError] = useFormField(null, validateGuests);
  const [occasion, setOccasion, occasionError] = useFormField(
    null,
    validateOccasion,
  );

  const handleDateChange = (value) => {
    props.dispatchAvailableTimes(value);
    setDate(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Exit when validation fails
    if (dateError || timeError || guestsError || occasionError) return;

    alert('Submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Choose date"
        type="date"
        name="res-date"
        value={date}
        onChange={handleDateChange}
        error={dateError}
      />
      <Select
        label="Choose time"
        name="res-time"
        options={props.availableTimes}
        value={time}
        onChange={setTime}
        error={timeError}
      />

      <Input
        label="Number of guests"
        placeholder="1"
        type="number"
        name="guests"
        min="1"
        max="10"
        value={guests}
        onChange={setGuests}
        error={guestsError}
      />

      <Select
        label="Occasion"
        name="occasion"
        options={occasionOptions}
        value={occasion}
        onChange={setOccasion}
        error={occasionError}
      />

      <Button type="submit">Make Your reservation</Button>
    </form>
  );
}

const occasionOptions = [
  { value: 'birthday', label: 'Birthday' },
  { value: 'anniversary', label: 'Anniversary' },
];

const validateDate = (date) => {
  if (!date) return 'Please select a date';
  if (new Date(date) < new Date()) return 'Please select a future date';
  if (new Date(date).getDay() === 0) return 'We are closed on Sundays';
  return null;
};
const validateTime = (time) => {
  if (!time) return 'Please select a time';
  return null;
};
const validateGuests = (guests) => {
  if (!isNumeric(guests)) return 'Please enter a number';
  if (parseFloat(guests) < 1 || parseFloat(guests) > 10) {
    return 'Number of guests must be between 1 and 10';
  }
  return null;
};
const validateOccasion = (occasion) => {
  if (!occasion) return 'Please select an occasion';
  return null;
};

export default BookingForm;
