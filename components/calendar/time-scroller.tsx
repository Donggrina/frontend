import { useEffect, useRef } from 'react';
import styles from './time-scroller.module.scss';

interface TimeScrollerProps {
  scrollItems: (string | number)[];
  refPusher: (el: HTMLDivElement) => void;
  className: string;
  selectedItem: string | number;
}

export default function TimeScroller({ scrollItems, refPusher, className, selectedItem }: TimeScrollerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    if (e.deltaY > 0 && ref.current) ref.current.scrollTop += 14;
    if (e.deltaY < 0 && ref.current) ref.current.scrollTop -= 14;
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (ref.current) ref.current.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div ref={ref} className={styles.scroller}>
      {scrollItems.map((item, i) => (
        <div
          key={i}
          ref={refPusher}
          className={`${className} ${styles.scrollItem} ${item === selectedItem.toString().padStart(2, '0') ? styles.magnify : ''}`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
