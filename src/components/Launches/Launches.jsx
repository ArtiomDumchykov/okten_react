import React from 'react'
import { useLaunches } from '../../hooks/useLaunches'
import { Launch } from './Launch/Launch'
import styles from './Launches.module.scss'
import { usePagination } from '../../hooks'

export const utils_launches = {
  limit: 10,
  allLaunchers: null,
  sortedPages: {},
  page: 1,
  getPage(page) {
    return this.sortedPages[`page_${page}`];
  },
  getNext() {
    this.page++
    return this.getPage(this.page) ;
  },
}

export  const Launches = () => {
  const  {pages, setPages} = useLaunches();
  usePagination({pages, setPages})

  return (
    <>
      <div className={styles.launches__container + ' _container'}>
        <ul className={styles.launches__list + " launcher__list"}>
          {
            !!pages?.length && [...pages].map((item) => <Launch key={`${item.mission_name}_${item.id}`} launch={item} />)
          }
        </ul>
      </div>
    </>
  )
}
