import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import Operador from "./Operador";
import ConsultaOperador from "./ConsultaOperador";

export default function Configuracoes(){

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
                            onClick={() => handleChoice('Operador')}
                            sx={{ ":hover": { background: '#BD126C', color: 'white' } }}>
                            <Typography sx={{ ml: '1rem', mt: '1rem', fontSize: '1.2rem' }}>
                                Operador
                            </Typography>
                        </Box>

                        <Box
                            onClick={() => handleChoice('ConsultaOperador')}
                            sx={{ ":hover": { background: '#BD126C', color: 'white' } }}>
                            <Typography sx={{ ml: '1rem', mt: '1rem', fontSize: '1.2rem' }}>
                                Consulta
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>

                {pagina === 'Operador' &&
                    <Grid sx= {{ mt: '1rem', ml: '10rem', width: '10rem' }}>
                        <Operador/>
                    </Grid> }

                {pagina === 'ConsultaOperador' &&
                    <Grid sx= {{ mt: '1rem', ml: '10rem', width: '10rem' }}>
                        <ConsultaOperador/>
                    </Grid>                                   
                }

            </Grid>
        </>
    )
}