import { AppBar, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import api from "../../service/apiService";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

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

    const [snackBarMessage, setSnackBarMessage] = useState('');
    const [snackBarSeverity, setSnackBarSeverity] = useState('info');
    const [open, setOpen] = useState(false);

    const handleCancelar = () => {
        setResponsavel('');
        setTipo('');
        setSexo('');
        setCpf('');        
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

    const handleSubmit = () => {
        let camposPreenchidos = {
            "nome": responsavel,
            "tipoCliente": tipo,
            "sexoCliente": sexo,
            "cpfCnpj": cpf,
            "endereco": endereco,
            "cidade": cidade,
            "estado": uf,
            "telefone": telefone,
            "whatsapp": whatsapp,
            "email": email,
            "situacao": situacao,
            "nomeAnimal": animal,
            "especie": especie,
            "raca": raca,
            "sexoDoAnimal": sexoDoAnimal
        }

        api.post('cliente/cadastrocliente', camposPreenchidos)
        .then((response) => {
            console.log('response -- ', response.data)
            showSnackbar('Novo registro salvo com sucesso.','success')
        })
        .catch((error) => {
            showSnackbar('Ocorreu uma falha. Contate o administrador.', 'error')
            console.log('error -- ', error)
        })
        .finally(() => {
            setResponsavel('');
            setTipo('');
            setSexo('');
            setCpf('');        
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
        })
    }

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway'){
            return
        }
        setOpen(false)
    }

    const showSnackbar = (message, severity) => {
        setSnackBarSeverity(severity)
        setSnackBarMessage(message)
        setOpen(true)
    }

  return (
    <>
      <Grid sx={{ mt: "0.5rem", ml: "2rem", width: "65rem" }}>
        <Paper elevation={3} sx={{ mb: '2rem' }}>
            <AppBar sx={{ position: 'relative', mb: 2, zIndex: 1, height: '2rem', background: '#08CFDE' }}>
                <Typography sx={{ ml: '1rem', mt: '0.1rem', fontWeight: 'bold', fontSize: '1.3rem' }}>Cadastrar Cliente</Typography>
            </AppBar>
            <div>
            <TextField 
                label="Responsável"
                value={responsavel}
                onChange={e => setResponsavel(e.target.value)}
                sx={{ width: '30rem', ml: '1rem', mt: '1rem' }}
                size="small"
            ></TextField>

            <FormControl fullWidth sx={{ width: '15rem', mt: '1rem', ml: '1rem' }}>
                <InputLabel id="demo-simple-select-label" sx={{ top: '-0.5rem' }}>Tipo</InputLabel>
                <Select 
                    label="Tipo"
                    value={tipo}
                    onChange={e => setTipo(e.target.value)}
                    size="small"
                >
                    <MenuItem value={1}>Pessoa Física</MenuItem>
                    <MenuItem value={2}>Pessoa Jurídica</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth sx={{ width: '10rem', mt: '1rem', ml: '1rem' }}>
                <InputLabel id="demo-simple-select-label" sx={{ top: '-0.5rem' }}>Sexo</InputLabel>
                <Select 
                    label="Sexo"
                    value={sexo}
                    onChange={e => setSexo(e.target.value)}
                    size="small"
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
                size="small"
            ></TextField>
          </div>

          

          <div>
            <TextField 
                label="Endereço"
                value={endereco}
                onChange={e => setEndereco(e.target.value)}
                sx={{ width: '20rem', ml: '1rem', mt: '1rem'  }}
                size="small"
            ></TextField>

            <TextField 
                label="Cidade"
                value={cidade}
                onChange={e => setCidade(e.target.value)}
                sx={{ width: '20rem', ml: '1rem', mt: '1rem'  }}
                size="small"
            ></TextField>

            <TextField 
                label="UF"
                value={uf}
                onChange={e => setUf(e.target.value)}
                sx={{ width: '5rem', ml: '1rem', mt: '1rem'  }}
                size="small"
            ></TextField>
          </div>

          <div>
            <TextField 
                label="Telefone"
                value={telefone}
                onChange={e => setTelefone(e.target.value)}
                sx={{ ml: '1rem', mt: '1rem'  }}
                size="small"
            ></TextField>

            <TextField 
                label="Whatsapp"
                value={whatsapp}
                onChange={e => setWhatsapp(e.target.value)}
                sx={{ ml: '1rem', mt: '1rem'  }}
                size="small"
            ></TextField>

            <TextField 
                label="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                sx={{ ml: '1rem', mt: '1rem', width: '30rem'  }}
                size="small"
            ></TextField>            
          </div>

          <div>
            <FormControl fullWidth sx={{ width: '10rem', mt: '1rem', ml: '1rem' }}>
                <InputLabel sx={{ top: '-0.5rem' }}>Situação</InputLabel>
                <Select 
                    label="Situação"
                    value={situacao}
                    onChange={e => setSituacao(e.target.value)}
                    size="small"
                >
                    <MenuItem value={1}>Ativo</MenuItem>
                    <MenuItem value={2}>Inativo</MenuItem>
                </Select>
            </FormControl>
          </div>

          <div>
            <TextField 
                label="Animal"
                value={animal}
                onChange={e => setAnimal(e.target.value)}
                sx={{ width: '20rem', ml: '1rem', mt: '1rem', mb: '1rem'  }}
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
            <TextField 
                label="Raça"
                value={raca}                
                onChange={e => setRaca(e.target.value)}
                sx={{ width: '20rem', ml: '1rem', mt: '1rem', mb: '1rem'  }}
                size="small"
            ></TextField>

                <FormControl fullWidth sx={{ width: '12rem', mt: '1rem', ml: '1rem' }}>
                <InputLabel sx={{ top: '-0.5rem' }}>Sexo do Animal</InputLabel>
                <Select 
                    label="Sexo do Animal"
                    value={sexoDoAnimal}
                    onChange={e => setSexoDoAnimal(e.target.value)}
                    size="small"
                >
                    <MenuItem value={1}>Macho</MenuItem>
                    <MenuItem value={2}>Fêmea</MenuItem>
                </Select>
            </FormControl>
          </div>

          <div>
            <Button variant="outlined" 
                onClick={handleCancelar}
                sx={{ mb: '1rem', ml: '46rem' }}
            >Cancelar</Button>

            <Button variant="contained" 
                onClick={() => handleSubmit()}
                sx={{ mb: '1rem', ml: '55rem', mt: '-5rem', diplay: 'flex', background: '#08CFDE' }}
            >Salvar</Button>
          </div>

            <Snackbar 
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open} autoHideDuration={6000} onClose={handleSnackbarClose}
                sx={{ mt: '7rem'}}>
                <Alert
                    onClose={handleSnackbarClose}
                    severity={snackBarSeverity}
                >
                    {snackBarMessage}
                </Alert>
            </Snackbar>

        </Paper>        
      </Grid>
    </>
  );
}
