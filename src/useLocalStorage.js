// export default function useLocalStorage(key) {
//     const [localStorage, setLocalStorage] = useState(() => {
//       try {
//         const storedValue = window.localStorage.getItem(key);
//         return storedValue ? JSON.parse(storedValue) : undefined;
//       } catch (error) {
//         console.error(error);
//         return undefined;
//       }
//     });
  
//     useEffect(() => {
//       try {
//         window.localStorage.setItem(key, JSON.stringify(localStorage));
//       } catch (error) {
//         console.error(error);
//       }
//     }, [key, localStorage]);
  
//     return [localStorage, setLocalStorage];
//   }

export const useLocalStorage = (key) => {
    const setItem = (value) => {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.log(error);
      }
    };
  
    return { setItem};
  };