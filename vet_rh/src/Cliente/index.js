import { FormLabel, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Cadastro from "./Cadastro";
import Consulta from "./Consulta";

export default function Cliente() {

    return(
        <>
            <Grid container>
                <Grid  sx= {{ mt: '-1.5rem', width: '10rem', position: 'fixed' }}>
                    <Paper sx={{ height: '28rem', background: '#E7E1E4' }}>
                        <Typography sx={{ ml: '1rem', mt: '1rem', fontSize: '1.2rem', paddingTop: '2rem' }}>
                            Consulta
                        </Typography>
                        <Typography sx={{ ml: '1rem', mt: '1rem', fontSize: '1.2rem' }}>
                            Cadastro
                        </Typography>
                    </Paper>
                </Grid>

                <Grid sx= {{ mt: '1rem', ml: '10rem', width: '10rem'}}>
                    <Cadastro/>
                </Grid>
            </Grid>
        </>
    )
}