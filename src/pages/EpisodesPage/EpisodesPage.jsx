import React from 'react';

import { Episodes, EpisodesPagination, } from '../../components';
import { Pagination } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const EpisodesPage = () => {
    const [query, seQuery] = useSearchParams();
    const {pages, episodes} = useSelector(state => state.episodes);
    const {isLoading} = useSelector(store => store.progress)
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        }}>
            
          <Episodes />
            {
                !!episodes?.length && <Pagination
                    count={pages}
                    defaultPage={+query.get('page')}
                    variant="outlined"
                    shape="rounded"
                    onChange={(e, page) => seQuery({page: page.toString()})}
                />
             }
            

            {/* <EpisodesPagination /> */}
        </div>
    )
}
