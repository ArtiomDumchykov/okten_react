import { useEffect, useState } from "react"
import { albumsService } from "../setvices";

export const useAlbums = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const {data} = await albumsService.getAll_Albums();
                setAlbums(data)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])
    
    return {
        albums, setAlbums
    }
}