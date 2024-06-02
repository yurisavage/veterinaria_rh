import { AppBar, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Cadastro() {

    const [responsavel, setResponsavel] = useState('');
    const [tipo, setTipo] = useState('');
    const [sexo, setSexo] = useState('');
    const [cpf, setCpf] = useState('');    
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [email, setEmail] = useState('');
    const [situacao, setSituacao] = useState('');
    const [animal, setAnimal] = useState('');
    const [especie, setEspecie] = useState('');
    const [raca, setRaca] = useState('');
    const [sexoDoAnimal, setSexoDoAnimal] = useState('');

    const handleCancelar = () => {
        setResponsavel('');
        setTipo('');
        setSexo('');
        setCpf(null);        
        setEndereco('');
        setCidade('');
        setUf('');
        setTelefone('');
        setWhatsapp('');
        setEmail('');
        setSituacao('');
        setAnimal('');
        setEspecie('');
        setRaca('');
        setSexoDoAnimal('');
    }

  return (
    <>
      <Grid sx={{ mt: "0.5rem", ml: "2rem", width: "65rem" }}>
        <Paper elevation={3} sx={{ mb: '2rem' }}>
            <AppBar sx={{ position: 'relative', mb: 2, zIndex: 1, height: '2rem', background: '#BD126C' }}>
                <Typography sx={{ ml: '1rem', mt: '0.1rem', fontWeight: 'bold', fontSize: '1.3rem' }}>Cadastrar Cliente</Typography>
            </AppBar>
            <div>
            <TextField 
                label="Responsável"
                value={responsavel}
                onChange={e => setResponsavel(e.target.value)}
                sx={{ width: '30rem', ml: '1rem', mt: '1rem' }}
            ></TextField>

            <FormControl fullWidth sx={{ width: '15rem', mt: '1rem', ml: '1rem' }}>
                <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                <Select 
                    label="Tipo"
                    value={tipo}
                    onChange={e => setTipo(e.target.value)}
                >
                    <MenuItem value={'PF'}>Pessoa Física</MenuItem>
                    <MenuItem value={'PJ'}>Pessoa Jurídica</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth sx={{ width: '10rem', mt: '1rem', ml: '1rem' }}>
                <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
                <Select 
                    label="Sexo"
                    value={sexo}
                    onChange={e => setSexo(e.target.value)}
                >
                    <MenuItem value={'Masculino'}>Masculino</MenuItem>
                    <MenuItem value={'Feminino'}>Feminino</MenuItem>
                </Select>
            </FormControl>
          </div>

          <div>
            <TextField 
                label="CPF / CNPJ"
                value={cpf}
                onChange={e => setCpf(e.target.value)}
                sx={{ width: '15rem', ml: '1rem', mt: '1rem'  }}
            ></TextField>
          </div>

          

          <div>
            <TextField 
                label="Endereço"
                value={endereco}
                onChange={e => setEndereco(e.target.value)}
                sx={{ width: '20rem', ml: '1rem', mt: '1rem'  }}
            ></TextField>

            <TextField 
                label="Cidade"
                value={cidade}
                onChange={e => setCidade(e.target.value)}
                sx={{ width: '20rem', ml: '1rem', mt: '1rem'  }}
            ></TextField>

            <TextField 
                label="UF"
                value={uf}
                onChange={e => setUf(e.target.value)}
                sx={{ width: '5rem', ml: '1rem', mt: '1rem'  }}
            ></TextField>
          </div>

          <div>
            <TextField 
                label="Telefone"
                value={telefone}
                onChange={e => setTelefone(e.target.value)}
                sx={{ ml: '1rem', mt: '1rem'  }}
            ></TextField>

            <TextField 
                label="Whatsapp"
                value={whatsapp}
                onChange={e => setWhatsapp(e.target.value)}
                sx={{ ml: '1rem', mt: '1rem'  }}
            ></TextField>

            <TextField 
                label="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                sx={{ ml: '1rem', mt: '1rem', width: '30rem'  }}
            ></TextField>            
          </div>

          <div>
            <FormControl fullWidth sx={{ width: '10rem', mt: '1rem', ml: '1rem' }}>
                <InputLabel>Situação</InputLabel>
                <Select 
                    label="Situação"
                    value={situacao}
                    onChange={e => setSituacao(e.target.value)}
                >
                    <MenuItem value={'Ativo'}>Ativo</MenuItem>
                    <MenuItem value={'Inativo'}>Inativo</MenuItem>
                </Select>
            </FormControl>
          </div>

          <div>
            <TextField 
                label="Animal"
                value={animal}
                onChange={e => setAnimal(e.target.value)}
                sx={{ width: '20rem', ml: '1rem', mt: '1rem', mb: '1rem'  }}
            ></TextField>
           
            <FormControl fullWidth sx={{ width: '10rem', mt: '1rem', ml: '1rem' }}>
                <InputLabel>Espécie</InputLabel>
                <Select 
                    label="Espécie"
                    value={especie}
                    onChange={e => setEspecie(e.target.value)}
                >
                    <MenuItem value={'Canino'}>Canino</MenuItem>
                    <MenuItem value={'Felino'}>Felino</MenuItem>
                    <MenuItem value={'Pássaros'}>Pássaros</MenuItem>
                    <MenuItem value={'Réptil'}>Réptil</MenuItem>
                    <MenuItem value={'Roedores'}>Roedores</MenuItem>
                    <MenuItem value={'S/ Espécie'}>S/ Espécie</MenuItem>
                </Select>
            </FormControl>
          </div>

          <div>
            <TextField 
                label="Raça"
                value={raca}                
                onChange={e => setRaca(e.target.value)}
                sx={{ width: '20rem', ml: '1rem', mt: '1rem', mb: '1rem'  }}
            ></TextField>

                <FormControl fullWidth sx={{ width: '12rem', mt: '1rem', ml: '1rem' }}>
                <InputLabel>Sexo do Animal</InputLabel>
                <Select 
                    label="Sexo do Animal"
                    value={sexoDoAnimal}
                    onChange={e => setSexoDoAnimal(e.target.value)}
                >
                    <MenuItem value={'Macho'}>Macho</MenuItem>
                    <MenuItem value={'Fêmea'}>Fêmea</MenuItem>
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
  );
}
