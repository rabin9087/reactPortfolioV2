import './App.css';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/Themes';
import Home from './pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import SignInPage from './pages/signin/SignInPage';



function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignInPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
