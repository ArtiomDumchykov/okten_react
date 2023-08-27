import {Box, CircularProgress, LinearProgress} from "@mui/material";
import {useSelector} from "react-redux";

import css from './Header.module.css';

export const EpisodesHeader = () => {
    const {isLoading} = useSelector(state => state.progress); 
    const {current} = useSelector(state => state.episodes);
    return (
        <div style={{padding: "0 0 20px "}}>
            <div className={css.label}>{current ? current : 'The Rick and Morty'}</div>
            {
                isLoading ? (
                    <Box sx={{width: '100%', height: '40px', display: "flex", justifyContent: "center"}}>
                        {/* <LinearProgress/> */}
                        <CircularProgress />
                    </Box>
                )
                : 
                <div style={{height: '40px'}}></div>
            }
        </div>
    );
};


