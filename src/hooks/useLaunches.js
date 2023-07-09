import { useState, useEffect } from "react";
import { LaunchesRequestService } from "../services/request.service";
// import { dataFilter } from "../utils/filter";
import { createPages, dataFilter } from "../utils";
import { utils_launches } from "../components";

import spacexDefault from '../assets/spacex_default.png';

const launchesRequestService = new LaunchesRequestService();

export  const useLaunches =  () => {

    const [pages, setPages] = useState(utils_launches.pages)
    const [error, setError] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const {data} = await launchesRequestService.getLaunches();
                const newData = dataFilter(data, ({launch_year: year}) => year !== '2020')
                                    .map(({mission_name, launch_year, links}, index) => ({
                                    id: index,
                                    mission_name,
                                    launch_year,
                                    links: {
                                        mission_patch_small: links.mission_patch_small || spacexDefault

                                    }
                                }))              
                utils_launches.allLaunchers = newData  
                createPages(utils_launches);        
                setPages(utils_launches.sortedPages["page_1"]);

            } catch (error) {
                setError(error.message)
            }
           
        })()
    }, [])

    return {
        
        pages,
        setPages,
        error,
        setError
    }
}