import React from 'react'

import { Episodes, EpisodesPagination } from '../../components'

export const EpisodesPage = () => {
  return (
    <div style={{
      display:"flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}>
       <Episodes/>
       <EpisodesPagination/>
    </div>
  )
}
