import { AppBar, Button, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Atendimento() {

    const [atendimentos, setAtendimentos] = useState([]);

    const [responsavel, setResponsavel] = useState('');
    const [animal, setAnimal] = useState('');
    const [resultado, setResultado] = useState([]);

    // const [] = useState();


    useEffect(() => {

        setAtendimentos([])
        fetch("./dados/atendimento.json", {
            headers: {
                Accept: "application/json"
            }
        }).then(res => res.json())
            .then(res => setAtendimentos(res.data))
    },[])

    const handleLimpar = () => {
        setResponsavel('');
        setAnimal('');
        setResultado([]);
    }

    const handleClick = () => {
        if (responsavel === '' && animal === '')
            handleLimpar()
    
        if (responsavel !== '' || animal !== ''){
            const nomeResponsavel = atendimentos.filter(nome => nome.responsavel.toUpperCase() === responsavel.toUpperCase()
                                                                || nome.animal.toUpperCase() === animal.toUpperCase())
            return setResultado(nomeResponsavel)
        }          
    }

    return(
        <>
            <Grid sx={{ mt: "0.5rem", ml: "2rem", width: "65rem" }}>
                <Paper elevation={3} sx={{ mb: '2rem' }}>
                    <AppBar sx={{ position: 'relative', mb: 2, zIndex: 1, height: '2rem', background: '#08CFDE' }}>
                        <Typography sx={{ ml: '1rem', mt: '0.1rem', fontWeight: 'bold', fontSize: '1.3rem' }}>Atendimentos</Typography>
                    </AppBar>

                    <div>
                        <TextField
                            label="Nome do Responsável"
                            value={responsavel}
                            onChange={e => setResponsavel(e.target.value)}
                            sx={{ width: '30rem', ml: '1rem', mt: '1rem', mb: '1rem' }}
                            size="small"
                        ></TextField>

                        <TextField
                            label="Animal"
                            value={animal}
                            onChange={e => setAnimal(e.target.value)}
                            sx={{ width: '20rem', ml: '1rem', mt: '1rem', mb: '1rem' }}
                            size="small"
                        ></TextField>
                        
                        <Button variant="outlined" 
                            onClick={handleLimpar}
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
                                    <TableCell sx={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Serviço</TableCell>
                                    <TableCell sx={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Valor</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {resultado.length === 0 && atendimentos.map((item) => 
                                    <TableRow sx={{ ":hover": { background: '#F1ECEC' } }}>
                                        <TableCell sx={{ fontSize: '1rem' }}>{item.responsavel}</TableCell>
                                        <TableCell sx={{ fontSize: '1rem' }}>{item.animal}</TableCell>
                                        <TableCell sx={{ fontSize: '1rem' }}>{item.servico}</TableCell>
                                        <TableCell sx={{ fontSize: '1rem' }}>{item.valor}</TableCell>
                                    </TableRow>
                                )}

                                {resultado !== 0 && resultado.map((item) => 
                                    <TableRow sx={{ ":hover": { background: '#E7E1E4' } }}>
                                        <TableCell sx={{ fontSize: '1rem' }}>{item.responsavel}</TableCell>
                                        <TableCell sx={{ fontSize: '1rem' }}>{item.animal}</TableCell>
                                        <TableCell sx={{ fontSize: '1rem' }}>{item.servico}</TableCell>
                                        <TableCell sx={{ fontSize: '1rem' }}>{item.valor}</TableCell>
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