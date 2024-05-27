import { AppBar, Button, Divider, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Table, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { tableHeaders } from "./tableSettings";

export default function Consulta() {

  const [responsavel, setResponsavel] = useState('');
  const [animal, setAnimal] = useState('');
  const [especie, setEspecie] = useState('');

  const [resultado, setResultado] = useState(null);

  const handleCancelar = () => {
    setResponsavel('');
    setAnimal('');
    setEspecie('');
}

  return(
    <>
      <Grid sx={{ mt: "0.5rem", ml: "2rem", width: "65rem" }}>
        <Paper elevation={3} sx={{ mb: '2rem' }}>
          <AppBar sx={{ position: 'relative', mb: 2, zIndex: 1, height: '2rem', background: '#BD126C' }}>
            <Typography sx={{ ml: '1rem', mt: '0.1rem', fontWeight: 'bold', fontSize: '1.3rem' }}>Consulta</Typography>
          </AppBar>
          
          <div>
            <TextField 
              label="Responsável"
              value={responsavel}
              onChange={e => setResponsavel(e.target.value)}
              sx={{ width: '30rem', ml: '1rem', mt: '1rem' }}
            ></TextField>
          </div>

          <div>
            <TextField 
              label="Animal"
              value={animal}
              onChange={e => setAnimal(e.target.value)}
              sx={{ width: '30rem', ml: '1rem', mt: '1rem', mb: '1rem' }}
            ></TextField>

            <FormControl fullWidth sx={{ width: '10rem', mt: '1rem', ml: '1rem' }}>
              <InputLabel>Espécie</InputLabel>
              <Select 
                label="Espécie"
                value={especie}
                onChange={e => setEspecie(e.target.value)}
                >
                  <MenuItem value={1}>Canino</MenuItem>
                  <MenuItem value={2}>Felino</MenuItem>
                  <MenuItem value={3}>Pássaros</MenuItem>
                  <MenuItem value={4}>Réptil</MenuItem>
                  <MenuItem value={5}>Roedores</MenuItem>
                  <MenuItem value={6}>S/ Espécie</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div>
            <Button variant="outlined" 
                onClick={handleCancelar}
                sx={{ mb: '1rem', ml: '46rem' }}
            >Cancelar</Button>

            <Button variant="contained" 
                sx={{ mb: '1rem', ml: '55rem', mt: '-5rem', diplay: 'flex' }}
            >Salvar</Button>
          </div>

          <Divider/>
          
          <Table
            headers={
              tableHeaders(
                resultado
              )
            }
          ></Table>

        </Paper>
      </Grid>
    </>
  )  
}
