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
            <Route path='/' element={<About />}/>
            <Route path='/menu' element={<Menu />} />
            <Route path='/about' element={<About />} />
            <Route path='/order' element={<Order />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
