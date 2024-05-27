import { Button, FormControl, FormLabel, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Cadastro() {

    const [responsavel, setResponsavel] = useState('');
    const [tipo, setTipo] = useState();
    const [sexo, setSexo] = useState();
    const [cpf, setCpf] = useState('');

    // const [] = useState('');
    const [animal, setAnimal] = useState('');
    const [especie, setEspecie] = useState(null);
    const [raca, setRaca] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [email, setEmail] = useState('');
    const [situacao, setSituacao] = useState();

    const handleCancelar = () => {
        console.log('cancelar')
        setResponsavel('');
        setTipo();
        setSexo();
        setCpf(null);
        setAnimal('');
        setEspecie(null);
        setRaca('');
        setEndereco('');
        setCidade('');
        setUf('');
        setTelefone('');
        setWhatsapp('');
        setEmail('');
        setSituacao();
    }

  return (
    <>
      <Grid sx={{ mt: "1rem", ml: "2rem", width: "65rem" }}>
        <Paper elevation={3} sx={{ mb: '2rem' }}>
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
                >
                    <MenuItem value={10}>Pessoa Física</MenuItem>
                    <MenuItem value={20}>Pessoa Jurídica</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth sx={{ width: '10rem', mt: '1rem', ml: '1rem' }}>
                <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
                <Select 
                    label="Sexo"
                    value={sexo}
                >
                    <MenuItem value={1}>Masculino</MenuItem>
                    <MenuItem value={2}>Feminino</MenuItem>
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
                >
                    <MenuItem value={0}>Ativo</MenuItem>
                    <MenuItem value={1}>Inativo</MenuItem>
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
            <TextField 
                label="Raça"
                value={raca}                
                onChange={e => setRaca(e.target.value)}
                sx={{ width: '20rem', ml: '1rem', mt: '1rem', mb: '1rem'  }}
            ></TextField>
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

        </Paper>
      </Grid>
    </>
  );
}
