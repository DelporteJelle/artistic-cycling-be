import './App.css';
import { ChakraProvider } from '@chakra-ui/react'

import {Routes, Route } from 'react-router-dom';

//Context
import { KurProvider } from './context/kurContext';

//Pages
import Home from './pages/Home';
import Data from './pages/Data';
import Kur from './pages/KurPage';
import Login from './pages/Login';


function App() {
  return (
    <ChakraProvider>
      <KurProvider>
        <Routes>
          <Route exact path="/" element={<Home/>}> </Route>
          <Route exact path="/login" element={<Login/>}> </Route>
          <Route exact path="/data" element={<Data/>}></Route>
          <Route exact path="/kur" element={<Kur/>}></Route>
        </Routes>
        </KurProvider>
    </ChakraProvider>
  );
}

export default App;
