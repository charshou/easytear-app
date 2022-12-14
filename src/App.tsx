import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './constants/theme';
import Home from './pages/Home/Home';
import logo from './logo.svg';
import Video from './pages/Video/Video';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos/:id" element={<Video />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
