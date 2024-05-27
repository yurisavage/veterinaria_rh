import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import Agendamento from "./Agendamento";
import Atendimento from "./Atendimento";

export default function Clinica() {

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
                            sx={{ ":hover": { background: '#BD126C', color: 'white' } }}
                        >
                            <Typography sx={{ ml: '1rem', mt: '1rem', fontSize: '1.2rem' }}>
                                Agendamento
                            </Typography>
                        </Box>

                        <Box
                            onClick={() => handleChoice('Atendimento')}
                            sx={{ ":hover": { background: '#BD126C', color: 'white' } }}
                        >
                            <Typography sx={{ ml: '1rem', mt: '1rem', fontSize: '1.2rem' }}>
                                Atendimento
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>

                {pagina === 'Agendamento' ? (
                    <Grid sx= {{ mt: '1rem', ml: '10rem', width: '10rem' }}>
                        <Agendamento/>
                    </Grid>
                ) :                
                (pagina === 'Atendimento' &&
                    <Grid sx= {{ mt: '1rem', ml: '10rem', width: '10rem' }}>
                        <Atendimento/>
                    </Grid>
                )}

            </Grid>
        </>
    )
}