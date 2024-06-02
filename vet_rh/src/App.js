import { useEffect, useState } from 'react';
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import { AppBar, Box, Button, Modal, Typography, Card, CardMedia } from '@mui/material';
import Home from './Home';
import Cliente from './Cliente';
import Clinica from './Clinica';
import Configuracoes from './Configuracoes';
import Galeria from './Galeria';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  background: "#C1EBEE",
  borderRadius: '3rem'
};

function App() {

  const [oculto, setOculto] = useState(true);

  const handleClickHome = () => setOculto(true);
  const handleClick = () => setOculto(false);
  
  const [open, setOpen] = useState(false);  
  const handleClose = () => setOpen(false);
  
  const handleOpen = () => {
    setOpen(true);
}

  useEffect(() => {

    console.log('click - ', oculto)

  },[oculto])


  return (
    <>
    <div className="App">
      <AppBar sx={{ background: '#08CFDE' }}>
        <Box component="img" src="img/pata3.jpg" sx={{ width: '6rem', height: '5rem' }}></Box>
        <Typography variant='h3'
          sx={{ ml: '6rem', mb: '1rem', mt: '-4rem', color: 'white', background: '#08CFDE',
          fontFamily: 'Cursive', WebkitTextStrokeColor: 'black', display: 'flex',
          WebkitTextStrokeWidth: '0.1rem', fontWeight: 'bold' }}
        >
          Clínica Veterinária Dra. Rebeca Herdade
        </Typography>
      </AppBar>

      <HashRouter>
        {oculto && 
        <Typography sx={{ position: 'fixed', height: '9rem', width: '100%', top: '7rem', zIndex: 1 }}>
          <Box sx={{ display: 'flex', background: 'white', border: '0.2rem solid',
                      borderRadius: '20rem', width: '30rem', height: '30rem',
                      ml: '25rem', mt: '-1rem' }}>
            <div>   
              <Link to="/cliente" onClick={handleClick} style={{ textDecoration: 'none' }}>        
                <Box sx={{ background: '#08CFDE', borderRadius: '20rem', width: '10rem', height: '10rem', transition: 'transform 0.3s',
                            ml: '-2rem', ":hover": { background: "#14E6F5", transform: 'scale(1.1)' }
                        }} 
                      onClick={handleClick}
                >
                  <Typography sx={{ fontFamily: 'Cursive', color: 'white', fontWeight: 'bold', 
                                    ml: '2.5rem', paddingTop: '3.8rem', fontSize: '1.2rem' }} >
                    Cliente
                  </Typography>
                </Box>
              </Link>

              <Link to="/configuracoes" onClick={handleClick} style={{ textDecoration: 'none' }}>
                <Box sx={{ background: '#08CFDE', borderRadius: '20rem', width: '10rem', height: '10rem', transition: 'transform 0.3s',
                            mt: '8rem', ml: '-2rem', ":hover": { background: "#14E6F5", transform: 'scale(1.1)' }
                        }} 
                        onClick={handleClick}
                >
                  <Typography sx={{ fontFamily: 'Cursive', color: 'white', fontWeight: 'bold', 
                                    ml: '1rem', paddingTop: '3.8rem', fontSize: '1.2rem' }} >
                        Configurações
                  </Typography>
                </Box>
              </Link>
            </div>

            <div>
              <Box component="img" src="img/pata2.jpg" 
                  onClick={() => handleOpen()}
                  sx={{ width: '12rem', height: '10rem', mt: '10rem', ml: '1rem', transition: 'transform 0.3s',
                        ":hover": { background: "#14E6F5", transform: 'scale(1.2)' }
                  }} ></Box>
            </div>

            <div>
              <Link to="/clinica" onClick={handleClick} style={{ textDecoration: 'none' }}> 
                <Box sx={{ background: '#08CFDE', borderRadius: '20rem', width: '10rem', height: '10rem', transition: 'transform 0.3s',
                            ml: '2rem', ":hover": { background: "#14E6F5", transform: 'scale(1.1)' }
                        }} 
                      onClick={handleClick}
                >
                  <Typography sx={{ fontFamily: 'Cursive', color: 'white', fontWeight: 'bold', 
                                    ml: '3rem', paddingTop: '3.8rem', fontSize: '1.2rem' }} >
                        Clínica
                  </Typography>
                </Box>
              </Link>
              <Link to="/galeria" onClick={handleClick} style={{ textDecoration: 'none' }}>
                <Box sx={{ background: '#08CFDE', borderRadius: '20rem', width: '10rem', height: '10rem', transition: 'transform 0.3s',
                            mt: '8rem', ml: '2rem', ":hover": { background: "#14E6F5", transform: 'scale(1.1)' }
                        }} 
                      onClick={handleClick}
                >
                  <Typography sx={{ fontFamily: 'Cursive', color: 'white', fontWeight: 'bold', 
                                    ml: '3rem', paddingTop: '3.8rem', fontSize: '1.2rem' }} >
                        Galeria
                  </Typography>
                </Box>
              </Link>
            </div>
          </Box>          
        </Typography> }

        {!oculto && 
          <Typography sx={{ background: '#08CFDE', height: '8rem', position: 'fixed', width: '100%', top: '0.5rem', zIndex: 10 }}>
            <Button component={Link} to="/" variant="outlined" 
                  sx={{ mt: '5.5rem', ml: '4rem', borderColor:'#A6EEE6FF', height: '2rem', 
                        color:'#08CFDE', background: 'white', fontWeight: 'bold', fontSize: '1rem',
                        ":hover": { background: "#E7E1E4", color: '#08CFDE' }
                      }}
                    onClick={handleClickHome}
            >
              Home
            </Button>            
          </Typography>
        }

        <div>
          <Typography sx= {{ mt: '9rem' }}>
            <Routes>
              <Route path="/" exact element={<Home />}></Route>
              <Route path="/cliente" exact element={<Cliente />}></Route>
              <Route path="/clinica" exact element={<Clinica />}></Route>
              <Route path="/configuracoes" exact element={<Configuracoes />}></Route>
              <Route path="/galeria" exact element={<Galeria />}></Route>
            </Routes>
          </Typography>
        </div>        
      </HashRouter>
    </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"                
            >
                <Box sx={style}>
                    <Typography id="modal-modal-description" sx={{ fontWeight: 'bold' }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;Nosso foco principal é garantir a saúde e o bem-estar dos animais, 
                        proporcionando cuidados de alta qualidade e atenção personalizada.
                    </Typography>
                    <Typography sx={{ mt: 2, fontWeight: 'bold' }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;Nos dedicamos a oferecer um atendimento de excelência, com uma equipe 
                        capacitada e equipamentos de ponta para diagnósticos e tratamentos eficazes.
                    </Typography>
                    <Typography sx={{ mt: 2, fontWeight: 'bold' }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;Tratamos cada animal e seu tutor com empatia e respeito, compreendendo a importância do vínculo entre eles.
                    </Typography>
                    <Typography sx={{ mt: 2, fontWeight: 'bold' }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;Operamos com altos padrões éticos e transparência em todas as nossas ações, mantendo nossos clientes informados 
                        sobre os cuidados e procedimentos recomendados.
                    </Typography>
                    <Typography sx={{ mt: 2, fontWeight: 'bold' }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;Comprometemo-nos com práticas sustentáveis para minimizar nosso impacto ambiental e contribuir para um mundo mais verde.
                    </Typography>
                </Box>
            </Modal>
    </>
  );
}

export default App;
