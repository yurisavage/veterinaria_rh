import react from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Cadastro from './Cadastro';
import Consulta from './Consulta';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Typography>
          
        </Typography>

        <div>
          <Typography>
            <Routes>
              <Route pat="/" exact element={<Home />}></Route>
              <Route pat="/cadastro" exact element={<Cadastro />}></Route>
              <Route pat="/consulta" exact element={<Consulta />}></Route>
              {/* <Route pat="/" exact element={}></Route> */}
            </Routes>
          </Typography>
        </div>        
      </HashRouter>
    </div>
  );
}

export default App;
