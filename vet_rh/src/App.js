import react from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Cadastro from './Cadastro';
import Consulta from './Consulta';
import Editar from './Edicao';
import Galeria from './Galeria';
import { AppBar, Box, Card, CardMedia, Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <AppBar sx={{ background: '#900950' }}>
        <Box component="img" src="img/pata1.jpg" sx={{ width: '6rem', height: '5rem' }}></Box>
        <Typography variant='h3'
          sx={{ ml: '6rem', mb: '1rem', mt: '-4rem', color: 'white', background: '#900950',
          fontFamily: 'Cursive', WebkitTextStrokeColor: 'black', display: 'flex',
          WebkitTextStrokeWidth: '0.1rem', fontWeight: 'bold' }}
        >
          Clínica Veterinária Dra. Rebeca Herdade
        </Typography>
      </AppBar>

      <HashRouter>
        <Typography sx={{ position: 'fixed', height: '9rem', width: '100%', top: '7rem', zIndex: 1 }}>
          <Box sx={{ display: 'flex', background: 'white', border: '0.2rem solid',
                      borderRadius: '20rem', width: '30rem', height: '30rem',
                      ml: '25rem', mt: '-1rem' }}>
            <div>            
              <Box sx={{ background: '#900950', borderRadius: '20rem', width: '10rem', height: '10rem',
                          ml: '-2rem', ":hover": { background: "#BD126C" }
                      }} 
              >
                <Typography sx={{ fontFamily: 'Cursive', color: 'white', fontWeight: 'bold', 
                                  ml: '2.5rem', paddingTop: '3.8rem', fontSize: '1.2rem' }} >
                  Consulta
                </Typography>
              </Box>
              <Box sx={{ background: '#900950', borderRadius: '20rem', width: '10rem', height: '10rem',
                          mt: '8rem', ml: '-2rem', ":hover": { background: "#BD126C" }
                      }} 
              >
                <Typography sx={{ fontFamily: 'Cursive', color: 'white', fontWeight: 'bold', 
                                  ml: '3rem', paddingTop: '3.8rem', fontSize: '1.2rem' }} >
                      Edição
                </Typography>
              </Box>
            </div>

            <div>
              <Box component="img" src="img/pata2.jpg" 
                  sx={{ width: '12rem', height: '10rem', mt: '10rem', ml: '1rem'}} ></Box>
            </div>

            <div>
              <Box sx={{ background: '#900950', borderRadius: '20rem', width: '10rem', height: '10rem',
                          ml: '2rem', ":hover": { background: "#BD126C" }
                      }} 
              >
                <Typography sx={{ fontFamily: 'Cursive', color: 'white', fontWeight: 'bold', 
                                  ml: '2.5rem', paddingTop: '3.8rem', fontSize: '1.2rem' }} >
                      Cadastro
                </Typography>
              </Box>
              <Box sx={{ background: '#900950', borderRadius: '20rem', width: '10rem', height: '10rem',
                          mt: '8rem', ml: '2rem', ":hover": { background: "#BD126C" }
                      }} 
              >
                <Typography sx={{ fontFamily: 'Cursive', color: 'white', fontWeight: 'bold', 
                                  ml: '3rem', paddingTop: '3.8rem', fontSize: '1.2rem' }} >
                      Galeria
                </Typography>
              </Box>
            </div>
          </Box>          
        </Typography>

        <div>
          <Typography>
            <Routes>
              <Route pat="/" exact element={<Home />}></Route>
              <Route pat="/cadastro" exact element={<Cadastro />}></Route>
              <Route pat="/consulta" exact element={<Consulta />}></Route>
              <Route pat="/edicao" exact element={<Editar />}></Route>
              <Route pat="/galeria" exact element={<Galeria />}></Route>
            </Routes>
          </Typography>
        </div>        
      </HashRouter>
    </div>
  );
}

export default App;
