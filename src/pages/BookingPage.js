import Nav from '../components/Nav';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';
import styles from './BookingPage.module.css';
import { useReducer } from 'react';

function BookingPage() {
  const reducer = (state, newDate) => {
    return [
      { value: '17:00', label: '17:00' },
      { value: '18:00', label: '18:00' },
      { value: '19:00', label: '19:00' },
      { value: '20:00', label: '20:00' },
      { value: '21:00', label: '21:00' },
      { value: '22:00', label: '22:00' },
    ];
  };

  const initializer = () => [
    { value: '17:00', label: '17:00' },
    { value: '18:00', label: '18:00' },
    { value: '19:00', label: '19:00' },
    { value: '20:00', label: '20:00' },
    { value: '21:00', label: '21:00' },
    { value: '22:00', label: '22:00' },
  ];

  const [availableTimes, dispatchAvailableTimes] = useReducer(
    reducer,
    [],
    initializer,
  );

  return (
    <>
      <Nav />
      <main className={styles.main}>
        <h3>Reserve a table</h3>
        <BookingForm
          availableTimes={availableTimes}
          dispatchAvailableTimes={dispatchAvailableTimes}
        />
      </main>
      <Footer />
    </>
  );
}

export default BookingPage;
