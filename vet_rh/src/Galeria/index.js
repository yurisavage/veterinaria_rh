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
    background: "#ebe480",
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
                    src=""
                ></CardMedia>
            </Card>
        </Grid>

        <Box>
            {clientes.map((item) => (
                <>
                    <CardMedia 
                        component='img' 
                        image={'img/animais/' + item.id + '.jpg'} 
                        onClick={() => handleOpen(item)}
                        sx={{ borderRadius: '20rem', width: 'auto', height: '10rem', 
                                ":hover": { height: '11rem'} }}>
                    </CardMedia>

                    {/* <div>
                        <Box sx={{ width: '10rem', height: '10rem', borderRadius: '20rem', background: "#900950",
                                    marginTop: '-2rem', ml: '0.5rem', ":hover": { background: "#6b7132" }
                        }}
                            // onClick={() => handleOpen(2)}
                        >
                            <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.5rem', 
                                                mt: '3.5rem', ml: '2rem', paddingTop: '3.5rem'
                                            }}
                            >
                                {item.animal}
                            </Typography>
                        </Box>
                    </div> */}
                </>
            ))}            
        </Box>

        <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ mr: '15rem' }}
            >
                <Box sx={style}>
                    <Card sx={{ borderRadius: '3rem' }}>
                        <CardMedia component='img' image={imagem} sx={{ height: '15rem', borderRadius: '3rem' }}>                
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