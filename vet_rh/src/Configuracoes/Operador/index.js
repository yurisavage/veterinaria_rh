import { AppBar, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Operador() {

    const [operador, setOperador] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, SetConfirmaSenha] = useState('');
    const [nivelAcesso, setNivelAcesso] = useState('');

    const handleCancelar = () => {
        console.log('nivel --- ', nivelAcesso)
        setOperador('');
        setCpf('');
        setSenha('');
        SetConfirmaSenha('');
        setNivelAcesso('');
    }

    return(
        <>
            <Grid sx={{ mt: "0.5rem", ml: "2rem", width: "65rem" }}>
                <Paper elevation={3} sx={{ mb: '2rem' }}>
                    <AppBar sx={{ position: 'relative', mb: 2, zIndex: 1, height: '2rem', background: '#BD126C' }}>
                        <Typography sx={{ ml: '1rem', mt: '0.1rem', fontWeight: 'bold', fontSize: '1.3rem' }}>
                            Dados do Operador
                        </Typography>
                    </AppBar>

                    <div>
                        <TextField 
                            label="Nome do Operador"
                            value={operador}
                            onChange={e => setOperador(e.target.value)}
                            sx={{ width: '30rem', ml: '1rem', mt: '1rem' }}
                        ></TextField>

                        <TextField 
                            label="CPF"
                            value={cpf}
                            onChange={e => setCpf(e.target.value)}
                            sx={{ width: '13rem', ml: '1rem', mt: '1rem' }}
                        ></TextField>
                    </div>

                    <div>
                        <TextField 
                            label="Senha"
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                            sx={{ width: '20rem', ml: '1rem', mt: '1rem', mb: '1rem' }}
                        ></TextField>

                        <TextField 
                            label="Confirma Senha"
                            value={confirmaSenha}
                            onChange={e => SetConfirmaSenha(e.target.value)}
                            sx={{ width: '20rem', ml: '1rem', mt: '1rem', mb: '1rem' }}
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
                            sx={{ mb: '1rem', ml: '46rem' }}
                        >Cancelar</Button>

                        <Button variant="contained" 
                            sx={{ mb: '1rem', ml: '55rem', mt: '-5rem', diplay: 'flex', background: '#BD126C' }}
                        >Salvar</Button>
                    </div>

                </Paper>
            </Grid>
        </>
    )
}