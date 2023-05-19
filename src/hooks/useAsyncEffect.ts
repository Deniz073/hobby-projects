import { useEffect } from 'react';

const useAsyncEffect = (asyncCallback: () => Promise<() => void>, dependencies: any[]) => {
  useEffect(() => {
    let isMounted = true;
    const callback = async () => {
      try {
        await asyncCallback();
      } catch (error) {
        console.error(error);
      }
    };
    callback();

    return () => {
      isMounted = false;
    };
  }, dependencies);
};

export default useAsyncEffect;