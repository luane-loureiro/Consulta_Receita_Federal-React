import { useState, useEffect } from "react";
import exemploCNPJ from "../../db/exemploCNPJ.json";

const useConectaAPI = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setData(exemploCNPJ);
    };

    fetchData();
  }, []);

  return data;
};

export default useConectaAPI;
