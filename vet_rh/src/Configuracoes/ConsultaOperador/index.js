import React, { useEffect, useState } from "react";
import { AppBar, Button, Divider, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";

export default function ConsultaOperador() {

    const [operador, setOperador] = useState('');
    const [nivelAcesso, setNivelAcesso] = useState('');
    const [users, setUsers] = useState([]);
    const [resultado, setResultado] = useState([]);

    const handleCancelar = () => {
        setOperador('');
        setNivelAcesso(''); 
        setResultado([]);
    }

    const handleClick = () => {

        console.log('click -- ', nivelAcesso)

        if (operador !== '' || nivelAcesso !== ''){
            const nomeOperador = users.filter(nome => nome.operador === operador || nome.nivelacesso === nivelAcesso)
            return setResultado(nomeOperador)
            // if (nivelAcesso !== ''){
            //     const nivelUsuario = nomeOperador.filter(nivel => nivel.nivelacesso === nivelAcesso)
            //     return setResultado(nivelUsuario)
            // }else{
            //     return setResultado(nomeOperador)
            // }
        }  
        
    }
    
    useEffect(() => {

        fetch("./dados/operador.json", {
            headers: {
                Accept: "application/json"
            }
        }).then(res => res.json())
            .then(res => setUsers(res.data))
        
    },[])


    return(
        <>
            <Grid sx={{ mt: "0.5rem", ml: "2rem", width: "65rem" }}>
                <Paper elevation={3} sx={{ mb: '2rem' }}>
                    <AppBar sx={{ position: 'relative', mb: 2, zIndex: 1, height: '2rem', background: '#BD126C' }}>
                        <Typography sx={{ ml: '1rem', mt: '0.1rem', fontWeight: 'bold', fontSize: '1.3rem' }}>
                            Consulta Operadores
                        </Typography>
                    </AppBar>

                    <div>
                        <TextField 
                        label="Nome do Operador"
                        value={operador}
                        onChange={e => setOperador(e.target.value)}
                        sx={{ width: '30rem', ml: '1rem', mt: '1rem' }}
                        ></TextField>
                    </div>
                    
                    <div>
                        <FormControl fullWidth sx={{ width: '13rem', mt: '1rem', ml: '1rem', mb: '1rem' }}>
                            <InputLabel>Nível de Acesso</InputLabel>
                            <Select 
                                label="Nível de Acesso"
                                value={nivelAcesso}
                                onChange={e => setNivelAcesso(e.target.value)}
                                >
                                <MenuItem>
                                    <em>Selecione uma opção</em>
                                </MenuItem>
                                <MenuItem value={'Estagiario'}>Estagiário</MenuItem>
                                <MenuItem value={'Administrativo'}>Administrativo</MenuItem>
                                <MenuItem value={'Veterinario'}>Veterinário</MenuItem>
                                <MenuItem value={'Diretor'}>Diretor</MenuItem>
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
                            sx={{ mb: '1rem', ml: '55rem', mt: '-5rem', diplay: 'flex', background: '#BD126C' }}
                        >Buscar</Button>
                    </div>

                    <Divider/>

                    
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow sx= {{ background: '#E7E1E4' }}>
                                    <TableCell sx={{ fontSize: '1.2rem', fontWeight: 'bold', paddingLeft: '8rem' }}>Nome</TableCell>
                                    <TableCell sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Nível de Acesso</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {resultado.length === 0 && users.map((item) => 
                                    <TableRow sx={{ ":hover": { background: '#E7E1E4' } }}>
                                        <TableCell sx={{ paddingLeft: '4rem', fontSize: '1.2rem' }}>{item.operador}</TableCell>
                                        <TableCell sx={{ fontSize: '1.2rem' }}>{item.nivelacesso}</TableCell>
                                    </TableRow>
                                )}

                                {resultado !== 0 && resultado.map((item) => 
                                    <TableRow sx={{ ":hover": { background: '#E7E1E4' } }}>
                                        <TableCell sx={{ paddingLeft: '4rem', fontSize: '1.2rem' }}>{item.operador}</TableCell>
                                        <TableCell sx={{ fontSize: '1.2rem' }}>{item.nivelacesso}</TableCell>
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