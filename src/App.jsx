import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './layouts/Dashboard';
import Calculator from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/home" element={<Calculator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
