'use client';

import { useEffect, useState } from 'react';

export const Effect = () => {
  const [time, setTime] = useState(0);
  const interval = () => {
    setTime((prev) => prev + 1);
  };

  useEffect(() => {
    console.log('useEffect is called');
    let a = null;
    a = window.setInterval(interval, 1000);

    return () => {
      console.log('clean up');
      // 一時停止
      window.clearInterval(a);
    };
  }, []);

  return (
    <>
      <p>{time}秒経過</p>
    </>
  );
};
