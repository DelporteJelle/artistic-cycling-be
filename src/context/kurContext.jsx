import {
  createContext,
  useState,
  useCallback,
  useMemo,
  useContext,
} from "react";
import * as kurAPI from "../api/kur";

export const KurContext = createContext();
export const useKurContext = () => useContext(KurContext);

export const KurProvider = ({ children }) => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const [kur, setKur] = useState();

  const getKurById = useCallback(async (id) => {
    try {
      setError();
      setLoading(true);

      const kur = await kurAPI.getById(id);

      setKur(kur);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  //Voor de kur te rijden
  const [oefList, setOefList] = useState({ oefeningen: [] });
  const [currentOef, setCurrentOef] = useState(0);
  const [kurRunning, setkurRunning] = useState(false)

  const prepareKur = useCallback(async () => {
    // kur.oefeningen.map();
    setCurrentOef(0);
  }, []);

  const startKur = useCallback(async () => {
    if(!kurRunning){
      setkurRunning(true);
      console.log("start kur")
    }
  }, [kurRunning]);

  const addAftrek = useCallback(async (aftrek) => {
    setCurrentOef(currentOef + 1);
  }, [currentOef]);

  const resetKur = useCallback(async () => {
    prepareKur();
    setkurRunning(false)
  }, [prepareKur]);

  const endKur = useCallback(async () => {
    setkurRunning(false)
    setCurrentOef(0)
  }, []);

  const value = useMemo(
    () => ({
      error,
      loading,
      kur,
      getKurById,
      oefList,
      currentOef,
      kurRunning,
      prepareKur,
      startKur,
      addAftrek,
      resetKur,
      endKur,
    }),
    [error, loading, kur, getKurById, oefList, currentOef, kurRunning, prepareKur, startKur, addAftrek, resetKur, endKur]
  );

  return <KurContext.Provider value={value}>{children}</KurContext.Provider>;
};
