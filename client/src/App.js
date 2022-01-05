import './App.css';
import { ThemeProvider, CssBaseline } from '@mui/material'
import { createTheme } from '@mui/material';
import unica from './assets/UnicaOne-Regular.ttf'
import NavBar from './components/NavBar/NavBar';
import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter
} from "react-router-dom";

import Menu from './pages/Menu/Menu';
import Order from './pages/Order/Order';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Signup from './components/Signup/Signup';
import Account from './pages/Account/Account';

const theme = createTheme({
  typography: {
    fontFamily: 'Unica One',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [unica],
      },
    },
  },
});


function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HashRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/menu' element={<Menu />} />
            {/* <Route path='/about' element={<About />} /> */}
            <Route path='/order' element={<Order />} />
            <Route path='/login' element={<Signup/>}/>
            <Route path='/account' element={<Account/>}/>
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
