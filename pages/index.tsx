import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "../styles/Home.module.css";
import { Data, getAdvice } from "./data";
import { Advice } from "./intervace";

const Home: NextPage = () => {
  const [advice, setAdvice] = useState<Data |null>(null);
  const [loading, isLoading] = useState(false);
  const handleAdvice = useCallback(()=>{
    isLoading(true);
    getAdvice().then((result: Data) => setAdvice(result));
  }, []);

  return (
  <>
  <div className="card">
    {!advice && <div>Help</div>}
  
  {advice && <div> 
  <h5>ADVICE #{advice?.id}</h5>
    {advice?.advice}</div>}
  </div>
  <div className="button"><button onClick={handleAdvice}>kostak</button></div>
  </>
  )
};

export default Home;
