import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "../styles/Home.module.css";
import { Data, getAdvice } from "./data";
import { Advice } from "./intervace";

const Home: NextPage = () => {
  const [advice, setAdvice] = useState<Data | null>(null);
  const [loading, isLoading] = useState(false);
  const handleAdvice = useCallback(() => {
    isLoading(true);
    getAdvice().then((result: Data) => setAdvice(result));
  }, []);

  return (
    <>
      <div className="card">
        {!advice && <div>Help</div>}

        {advice && (
          <div>
            <div className="number">
              {" "}
              <h5>ADVICE #{advice?.id}</h5>
            </div>
            <div className="advice">{advice?.advice}</div>
          </div>
        )}
        <div className="kreska">

              {/* <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
                  <g transform="translate(138)" fill="#CEE3E9">
                    <rect width="6" height="16" rx="3" />
                    <rect x="14" width="6" height="16" rx="3" />
                  </g>
                </g>
              </svg> */}

              <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
                  <g transform="translate(212)" fill="#CEE3E9">
                    <rect width="6" height="16" rx="3" />
                    <rect x="14" width="6" height="16" rx="3" />
                  </g>
                </g>
              </svg>
            
          
        </div>
      </div>

      <div className="button">
        <button onClick={handleAdvice}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Home;
