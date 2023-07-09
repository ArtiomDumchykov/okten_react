import { useEffect } from 'react'
import { utils_launches } from '../components';

export const useObserver = ({pages, setPages}) => {
    useEffect(() => {
      const infinityObserver = new IntersectionObserver(([entry, observer]) => {
        if (entry.isIntersecting) {
            const arr = utils_launches.getNext(); 
            // Если нет следующей страницы завершить работу
            if (!arr) {
                infinityObserver.disconnect();
                return null;
            }
            setPages(prev => [...prev, ...arr])
        }
      },
      { threshold: 0.5})

      if (pages?.length > 0 ) {
        infinityObserver.observe(document.querySelector(".launcher__list > li:last-child"));
      }
    
      return () => {
        // Отключаем IntersectionObserver при размонтировании компонента
        infinityObserver.disconnect(); 
      };
    }, [pages, setPages])
}
