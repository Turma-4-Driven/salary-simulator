import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ResetStyleCSS from './styles/ResetStyleCSS';
import GlobalStyle from './styles/GlobalStyle';

import Home from './pages/home';
import SimulatorPage from './pages/simulatorPage';
import SummaryPage from './pages/summaryPage';

const App = () => {
  return (
    <>
      <ResetStyleCSS />
      <GlobalStyle />
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/simulator' element={<SimulatorPage />} />
          <Route path='/summary' element={<SummaryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
