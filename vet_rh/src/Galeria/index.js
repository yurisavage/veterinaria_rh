import { Box, Card, CardMedia, Grid, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    background: "#C1EBEE",
    borderRadius: '3rem'
  };

export default function Galeria() {

const [clientes, setClientes] = useState([]);
const [imagem, setImagem] = useState(null);
const [animal, setAnimal] = useState('');
const [especie, setEspecie] = useState('');
const [raca, setRaca] = useState('');

const [open, setOpen] = useState(false);  
const handleClose = () => setOpen(false);

const handleOpen = (cliente) => {
    setImagem(null);
    setImagem('img/animais/' + cliente.id + '.jpg');
    setAnimal('');
    setAnimal(cliente.animal)
    setEspecie('');
    setEspecie(cliente.especie)
    setRaca('')
    setRaca(cliente.raca)

    setOpen(true);
}

useEffect(() => {

    setClientes([])
        fetch("./dados/cliente.json", {
            headers: {
                Accept: "application/json"
            }
        }).then(res => res.json())
            .then(res => setClientes(res.data))

},[])




return(
    <>
        <Grid>
            <Card>
                <CardMedia
                    component="audio"
                    autoPlay
                    src="audio/david-bowie-starman.mp3"
                ></CardMedia>
            </Card>
        </Grid>
        
        <Box sx={{ backgroundColor: '#C1EBEE', borderRadius: '30rem', width: 'auto', height: 'auto', mt: 1 }} >
            <Grid container spacing={2} sx={{ ml: 4 }}>
                {clientes.map((item) => (
                    <>
                        {item.id % 2 === 0 ? (
                            <Grid item xs={12} sm={6} md={4} lg={2} >
                                <CardMedia 
                                    component='img' 
                                    image={'img/animais/' + item.id + '.jpg'} 
                                    onClick={() => handleOpen(item)}
                                    sx={{ borderRadius: '20rem', width: '12rem', height: '12rem', transition: 'transform 0.3s',
                                            ":hover": { transform: 'scale(1.5)' } }}>
                                </CardMedia>
                            </Grid>
                        ) : (
                            <Grid item xs={12} sm={6} md={4} lg={2}
                                sx={{ ml: 4 }}
                            >
                                <CardMedia 
                                    component='img' 
                                    image={'img/animais/' + item.id + '.jpg'} 
                                    onClick={() => handleOpen(item)}
                                    sx={{ borderRadius: '20rem', width: '10rem', height: '10rem', mt: 2, transition: 'transform 0.3s',
                                            ":hover": { transform: 'scale(1.5)' } }}>
                                </CardMedia>
                            </Grid>
                        )}
                        
                    </>
                ))}     
            </Grid>       
        </Box>

        <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"                
            >
                <Box sx={style}>
                    <Card sx={{ borderRadius: '3rem' }}>
                        <CardMedia component='img' image={imagem} sx={{ height: '20rem', borderRadius: '3rem' }}>                
                        </CardMedia>
                    </Card>
                    <Typography id="modal-modal-description" sx={{ mt: 2, fontWeight: 'bold' }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nome do Pet: {animal}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 1, fontWeight: 'bold' }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Espécie: {especie}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 1, fontWeight: 'bold' }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Raça: {raca}
                    </Typography>
                </Box>
            </Modal>
    </>
)
}