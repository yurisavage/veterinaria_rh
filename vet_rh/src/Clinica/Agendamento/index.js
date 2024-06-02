import { AppBar, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function Agendamento() {

    const [horario, setHorario] = useState([]);
    const [colaboradores, setColaboradores] = useState([])
    const [clientes, setClientes] = useState([])
    const [servicos, setServicos] = useState([]);

    const [horaInicial, setHoraInicial] = useState('');
    const [horaFinal, setHoraFinal] = useState('');
    const [colaborador, setColaborador] = useState(null);
    const [animal, setAnimal] = useState('');
    const [responsavel, setResponsavel] = useState('');
    const [especie, setEspecie] = useState('');
    const [servico, setServico] = useState('');

    // const [] = useState('');
    // const [] = useState('');

    
    useEffect(() => {

        setHorario([])
        fetch("./dados/horario.json", {
            headers: {
                Accept: "application/json"
            }
        }).then(res => res.json())
            .then(res => setHorario(res.data))

        
        setColaboradores([])
        fetch("./dados/operador.json", {
            headers: {
                Accept: "application/json"
            }
        }).then(res => res.json())
            .then(res => setColaboradores(res.data))

        setClientes([])
        fetch("./dados/cliente.json", {
            headers: {
                Accept: "application/json"
            }
        }).then(res => res.json())
            .then(res => setClientes(res.data))

        setServicos([])
        fetch("./dados/servico.json", {
            headers: {
                Accept: "application/json"
            }
        }).then(res => res.json())
            .then(res => setServicos(res.data))
        
      },[])


      const handleHoraInicial = (horaInicialSelecionada, horaFinalSelecionada) => {
        setHoraInicial(horaInicialSelecionada)
        setHoraFinal(horaFinalSelecionada)
      }

      const handleColaborador = (operador) => {
        setColaborador(operador)
      }

      const handleCliente = (responsavelSelecionado, animalSelecional, especieDoAnimal) => {
        setAnimal(animalSelecional)
        setResponsavel(responsavelSelecionado)
        setEspecie(especieDoAnimal)
      }

      const handleServico = (servico) => {
        setServico(servico.servico)
      }

      const handleCancelar = () => {
        setHoraInicial('');
        setHoraFinal('');
        setColaborador('');
        setAnimal('');
        setResponsavel();
        setEspecie('');
        setServico('');
      }



    return(
        <>
            <Grid sx={{ mt: "0.5rem", ml: "2rem", width: "65rem" }}>
                <Paper elevation={3} sx={{ mb: '2rem' }}>
                    <AppBar sx={{ position: 'relative', mb: 2, zIndex: 1, height: '2rem', background: '#BD126C' }}>
                        <Typography sx={{ ml: '1rem', mt: '0.1rem', fontWeight: 'bold', fontSize: '1.3rem' }}>Agendamentos</Typography>
                    </AppBar>

                    <div>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <Grid>
                                <InputLabel sx={{ ml: '1rem', mt: '1rem' }}>Hora Inicial</InputLabel>
                                <Select
                                    label="Hora Inicial"
                                    value={horaInicial}                    
                                    MenuProps={MenuProps}            
                                    sx={{ width: '8rem', ml: '1rem', mt: '1rem' }}
                                >
                                    {horario.map((hora) => (
                                        <MenuItem value={hora.horaInicial}
                                            onClick={() => handleHoraInicial(hora.horaInicial, hora.horaFinal)}
                                        >{hora.horaInicial}</MenuItem>
                                    ))}
                                </Select>     
                                <TextField            
                                    label="Hora Final"                        
                                    value={horaFinal}
                                    sx={{ width: '8rem', ml: '1rem', mt: '1rem' }}
                                ></TextField>
                            </Grid>                       
                        </FormControl>

                        <div>
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel sx={{ ml: '1rem', mt: '1rem' }}>Colaborador</InputLabel>
                                <Select
                                    label="Colaborador"
                                    value={colaborador}                                    
                                    MenuProps={MenuProps}
                                    sx={{ width: '25rem', ml: '1rem', mt: '1rem', mb: '1rem' }}
                                >
                                    {colaboradores.map((user) => (
                                        <MenuItem 
                                            value={user.operador}
                                            onClick={() => handleColaborador(user.operador)}
                                        >{user.operador}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel sx={{ ml: '1rem', mt: '1rem' }}>Serviço</InputLabel>
                                <Select
                                    label="Serviço"
                                    value={servico}                                    
                                    MenuProps={MenuProps}
                                    sx={{ width: '25rem', ml: '1rem', mt: '1rem', mb: '1rem' }}
                                >
                                    {servicos.map((item) => (
                                        <MenuItem
                                            value={item.servico}
                                            onClick={() => handleServico(item)}
                                        >{item.servico}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>

                        <div>
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <Grid>
                                    <InputLabel sx={{ ml: '1rem', mt: '1rem' }}>Responsável</InputLabel>
                                    <Select
                                        label="Responsável"
                                        value={responsavel}
                                        MenuProps={MenuProps}
                                        sx={{ width: '25rem', ml: '1rem', mt: '1rem', mb: '1rem' }}
                                    >
                                        {clientes.map((cliente) => (
                                            <MenuItem
                                                value={cliente.responsavel}
                                                onClick={() => handleCliente(cliente.responsavel, cliente.animal, cliente.especie)}
                                            >{cliente.responsavel}</MenuItem>
                                        ))}
                                    </Select>

                                    <TextField       
                                        label="Animal"                             
                                        value={animal}
                                        sx={{ width: '12rem', ml: '2rem', mt: '1rem' }}
                                    ></TextField>

                                    <TextField
                                        label="Espécie"
                                        value={especie}
                                        sx={{ width: '8rem', ml: '2rem', mt: '1rem' }}
                                    ></TextField>
                                </Grid>
                            </FormControl>
                        </div>

                        <div>
                            <Button variant="outlined" 
                                onClick={handleCancelar}
                                sx={{ mb: '1rem', ml: '48rem' }}
                            >Limpar</Button>

                            <Button variant="contained" 
                                sx={{ mb: '1rem', ml: '55rem', mt: '-5rem', diplay: 'flex', background: '#BD126C' }}
                            >Gravar</Button>
                        </div>


                    </div>

                </Paper>

            </Grid>
        </>
    )
}