import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ResetStyleCSS from './styles/ResetStyleCSS';
import GlobalStyle from './styles/GlobalStyle';

import Home from './pages/home';
import CalculatorPage from './pages/CalculatorPage';

const App = () => {
  return (
    <>
      <ResetStyleCSS />
      <GlobalStyle />
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/calculator-page' element={<CalculatorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
