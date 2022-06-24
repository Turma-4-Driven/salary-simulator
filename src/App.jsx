import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ResetStyleCSS from './styles/ResetStyleCSS';
import GlobalStyle from './styles/GlobalStyle';

import Home from './pages/home';
import CalculatorPage from './pages/CalculatorPage';
import SummaryPage from './pages/summaryPage';

const App = () => {
  return (
    <>
      <ResetStyleCSS />
      <GlobalStyle />
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/calculator-page' element={<CalculatorPage />} />
          <Route path='/summary-page' element={<SummaryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
