import { render, screen } from '@testing-library/react';
import BookingForm from '../components/BookingForm';
import { initializeTimes, updateTimes } from './BookingPage';

describe('Booking feature', () => {
  it('should render correctly', () => {
    render(<BookingForm availableTimes={availableTimes} />);

    const submitButtonElement = screen.getByText('Make Your reservation');
    expect(submitButtonElement).toBeInTheDocument();
  });

  it('should call onSubmit callback after click on submit button', () => {
    const onSubmit = jest.fn();
    render(<BookingForm availableTimes={availableTimes} onSubmit={onSubmit} />);

    const submitButtonElement = screen.getByText('Make Your reservation');
    submitButtonElement.click();
    expect(onSubmit).toHaveBeenCalled();
  });

  it('initializeTimes should return the correct array', () => {
    const result = initializeTimes();
    expect(result).toEqual(availableTimes);
  });

  it('updateTimes should return the correct array', () => {
    const result = updateTimes('2021-05-01');
    expect(result).toEqual(availableTimes);
  });
});

const availableTimes = [
  { value: '17:00', label: '17:00' },
  { value: '18:00', label: '18:00' },
  { value: '19:00', label: '19:00' },
  { value: '20:00', label: '20:00' },
  { value: '21:00', label: '21:00' },
  { value: '22:00', label: '22:00' },
];
