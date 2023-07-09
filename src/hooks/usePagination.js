import { useEffect } from 'react'
import { utils_launches } from '../components';

export const usePagination = ({pages, setPages}) => {
    useEffect(() => {
      const infinityObserver = new IntersectionObserver(([entry, observer]) => {
        if (entry.isIntersecting) {
            const nextArr = utils_launches.getNext(); 
            // Если нет следующей страницы завершить работу
            if (!nextArr) {
                infinityObserver.disconnect();
                return;
            }
            setPages(prev => [...prev, ...nextArr])
        }
      },
      { threshold: 0.5})

      if (pages?.length > 0 ) {
        const lastElement = document.querySelector(".launcher__list > li:last-child")
        if (lastElement ) {
          infinityObserver.observe(lastElement);
        }
      }
    
      return () => {
        // Отключаем IntersectionObserver при размонтировании компонента
        infinityObserver.disconnect(); 
      };
    }, [pages, setPages])
}
