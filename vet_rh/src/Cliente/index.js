import { Box, Button, FormLabel, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import Cadastro from "./Cadastro";
import Consulta from "./Consulta";

export default function Cliente() {

    const [pagina, setPagina] = useState('');

    const handleChoice = (selecionado) => {
        setPagina(selecionado)
    }

    return(
        <>
            <Grid container>
                <Grid  sx= {{ mt: '-1.5rem', width: '10rem', position: 'fixed' }}>
                    <Paper sx={{ height: '28rem', background: '#E7E1E4', paddingTop: '2rem'}}>
                        <Box
                            onClick={() => handleChoice('Consulta')}
                            sx={{ ":hover": { background: '#BD126C', color: 'white' } }}
                        >
                            <Typography sx={{ ml: '1rem', mt: '1rem', fontSize: '1.2rem' }}                                
                            >
                                Consultar Clientes
                            </Typography>
                        </Box>
                        
                        <Box
                            onClick={() => handleChoice('Cadastro')}
                            sx={{ ":hover": { background: '#BD126C', color: 'white' } }}
                        >
                            <Typography sx={{ ml: '1rem', mt: '1rem', fontSize: '1.2rem' }}                                
                            >
                                Cadastrar Clientes
                            </Typography>
                        </Box>                        
                    </Paper>
                </Grid>
                

                {pagina === 'Consulta' &&
                    <Grid sx= {{ mt: '1rem', ml: '10rem', width: '10rem' }}>
                        <Consulta/>
                    </Grid>
                }               
                {pagina === 'Cadastro' &&
                    <Grid sx= {{ mt: '1rem', ml: '10rem', width: '10rem' }}>
                        <Cadastro/>
                    </Grid>
                }
                
            </Grid>
        </>
    )
}