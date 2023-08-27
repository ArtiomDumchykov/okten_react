import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Episode = ({ episode }) => {
    const { id: episodesId, air_date, name, episode: episodeName, characters } = episode;
    const navigate = useNavigate();

    const toCharacters = () => {
        const ids = characters.map(character => character.split('/').slice(-1)[0]).join(',');
        navigate('/rickmorty/characters', { state: { ids } })
    }

    return (
        <Box sx={{width: "100%"}}>
            <Card variant="outlined">
                <CardContent>
                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                        Episode
                    </Typography>
                    <Typography sx={{height: 56}} variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{mb: 1.5}} color="text.secondary">
                        {episodeName}
                    </Typography>
                    <Typography variant="body2">
                        {air_date}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant={'contained'} onClick={toCharacters}>Characters</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

// OLD
// export const Episode = ({ episode }) => {
//     const { id, name, episode: chapter, characters } = episode;
//     const navigate = useNavigate();
//     return (
//         <div onClick={() => navigate('/rickmorty/characters', { state: { id: characters } })}>
//             <div>id: {id}</div>
//             <div>name: {name}</div>
//             <div>chapter: {chapter}</div>
//         </div>
//     )
// }
