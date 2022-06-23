import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ResetStyleCSS from './styles/ResetStyleCSS';
import GlobalStyle from './styles/GlobalStyle';

import Home from './pages/home/Home';

const App = () => {
  return (
    <>
      <ResetStyleCSS />
      <GlobalStyle />
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
