import { AppBar, Button, Divider, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import api from "../../service/apiService";

export default function Consulta() {

  const [responsavel, setResponsavel] = useState('');
  const [animal, setAnimal] = useState('');
  const [especie, setEspecie] = useState('');
  const [users, setUsers] = useState([]);

  const [resultado, setResultado] = useState([]);

  const handleCancelar = () => {
    setResponsavel('');
    setAnimal('');
    setEspecie('');
    setResultado([]);
  }

  const handleClick = () => {
    if (responsavel === '' && animal === '' && especie === '')
      handleCancelar()

    let payload= {
      'nome': responsavel || '',
      'nomeAnimal': animal || '',
      'especie': especie || null
    }

    console.log('payload -- ', payload)

    api.post('cliente/consultacliente', payload)
    .then(response => {
      setResultado(response.data)
    })
    .catch(error => {
      console.log('erro -- ', error)
    })

    // if (responsavel !== '' || animal !== '' || especie !== ''){
    //     const nomeOperador = users.filter(nome => nome.responsavel.toUpperCase() === responsavel.toUpperCase() 
    //                                       || nome.animal.toUpperCase() === animal.toUpperCase() || nome.especie === especie)
    //     return setResultado(nomeOperador)
    // }          
  }

  useEffect(() => {

    setUsers([])
    api.get('cliente/listaclientes')
    .then(response => {
      setUsers(response.data)
    })
    .catch(error => {
      console.log('error -- ', error)
    })


    // fetch("./dados/cliente.json", {
    //     headers: {
    //         Accept: "application/json"
    //     }
    // }).then(res => res.json())
    //     .then(res => setUsers(res.data))
    
  },[])



  return(
    <>
      <Grid sx={{ mt: "0.5rem", ml: "2rem", width: "65rem" }}>
        <Paper elevation={3} sx={{ mb: '2rem' }}>
          <AppBar sx={{ position: 'relative', mb: 2, zIndex: 1, height: '2rem', background: '#08CFDE' }}>
            <Typography sx={{ ml: '1rem', mt: '0.1rem', fontWeight: 'bold', fontSize: '1.3rem' }}>Consultar Clientes</Typography>
          </AppBar>

          <div>
            <TextField 
              label="Responsável"
              value={responsavel}
              onChange={e => setResponsavel(e.target.value)}
              sx={{ width: '30rem', ml: '1rem', mt: '1rem' }}
              size="small"
            ></TextField>
          </div>

          <div>
            <TextField 
              label="Animal"
              value={animal}
              onChange={e => setAnimal(e.target.value)}
              sx={{ width: '30rem', ml: '1rem', mt: '1rem', mb: '1rem' }}
              size="small"
            ></TextField>

            <FormControl fullWidth sx={{ width: '10rem', mt: '1rem', ml: '1rem' }}>
              <InputLabel sx={{ top: '-0.5rem' }}>Espécie</InputLabel>
              <Select 
                label="Espécie"
                value={especie}
                onChange={e => setEspecie(e.target.value)}
                size="small"
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
                sx={{ mb: '1rem', ml: '48rem' }}
            >Limpar</Button>

            <Button variant="contained" 
                onClick={handleClick}
                sx={{ mb: '1rem', ml: '55rem', mt: '-5rem', diplay: 'flex', background: '#08CFDE' }}
            >Buscar</Button>
          </div>

          <Divider/>
          
          <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow sx= {{ background: '#C8C8C8' }}>
                                    <TableCell sx={{ fontSize: '1.1rem', fontWeight: 'bold', paddingLeft: '8rem' }}>Responsável</TableCell>
                                    <TableCell sx={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Animal</TableCell>
                                    <TableCell sx={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Espécie</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {resultado.length === 0 && users.map((item) => 
                                    <TableRow sx={{ ":hover": { background: '#F1ECEC' } }}>
                                        <TableCell sx={{ fontSize: '1rem' }}>{item.nome}</TableCell>
                                        <TableCell sx={{ fontSize: '1rem' }}>{item.nomeAnimal}</TableCell>
                                        <TableCell sx={{ fontSize: '1rem' }}>{item.especie}</TableCell>
                                    </TableRow>
                                )}

                                {resultado !== 0 && resultado.map((item) => 
                                    <TableRow sx={{ ":hover": { background: '#E7E1E4' } }}>
                                        <TableCell sx={{ fontSize: '1rem' }}>{item.nome}</TableCell>
                                        <TableCell sx={{ fontSize: '1rem' }}>{item.nomeAnimal}</TableCell>
                                        <TableCell sx={{ fontSize: '1rem' }}>{item.especie}</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>


        </Paper>
      </Grid>
    </>
  )  
}
