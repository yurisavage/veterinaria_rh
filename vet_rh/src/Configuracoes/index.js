import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import Operador from "./Operador";

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
                            onClick={() => handleChoice('Agendamento')}
                            sx={{ ":hover": { background: '#BD126C', color: 'white' } }}>
                            <Typography>
                                Dados do Operador
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>

                {pagina === 'Agendamento' &&
                    <Grid sx= {{ mt: '1rem', ml: '10rem', width: '10rem' }}>
                        <Operador/>
                    </Grid>
                }

            </Grid>
        </>
    )
}