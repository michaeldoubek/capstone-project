import Head from './components/Head';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Head />

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<HomePage />} />
          <Route path="/order-online" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
