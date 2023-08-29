import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";

import React from 'react';

export const Character = ({ character }) => {
    const {name, status, species, image} = character;
    return (
        <Box sx={{width: 275}}>
            <Card variant="outlined">
                <CardContent>
                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                        Character
                    </Typography>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{mb: 1.5}} color="text.secondary">
                        {status}
                    </Typography>
                    <Typography variant="body2">
                        {species}
                    </Typography>
                </CardContent>
                <CardMedia
                    component={'img'}
                    image={image}
                    alt={name}
                />
            </Card>
        </Box>
    )
}

// OLD
// export const Character = ({ character }) => {
//     const { id, name, image } = character;
//     return (
//         <li>
//             <div>
//                 <div>id: {id}</div>
//                 <div>name: {name}</div>
//                 <img src={image} alt={name} />
//             </div>
//         </li>
//     )
// }
