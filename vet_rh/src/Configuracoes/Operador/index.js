import { AppBar, Grid, Paper, Typography } from "@mui/material";
import React from "react";

export default function Operador() {

    return(
        <>
            <Grid sx={{ mt: "0.5rem", ml: "2rem", width: "65rem" }}>
                <Paper elevation={3} sx={{ mb: '2rem' }}>
                    <AppBar sx={{ position: 'relative', mb: 2, zIndex: 1, height: '2rem', background: '#BD126C' }}>
                        <Typography sx={{ ml: '1rem', mt: '0.1rem', fontWeight: 'bold', fontSize: '1.3rem' }}>
                            Dados do Operador
                        </Typography>
                    </AppBar>
                </Paper>
            </Grid>
        </>
    )
}