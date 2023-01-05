import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Container from 'react-bootstrap/Container';
import CartScreen from './screens/CartScreen';

function App() {

  return (
    <BrowserRouter>
      <Container className="mt-3">
        <Routes>
          <Route path="/reviews" element={<CartScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
