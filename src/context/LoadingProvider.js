"use client";
import { createContext, useContext, useEffect, useState } from "react";

import Loading from "@app/loading";
import { setProgress } from "@app/loading";

export const LoadingContext = createContext(null);

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingPercent, setLoadingPercent] = useState(0);

  useEffect(() => {
    const { loaded, clear } = setProgress(setLoadingPercent);

    // Simulate loading completion
    const timer = setTimeout(() => {
      loaded().then(() => {
        setTimeout(() => setIsLoading(false), 3000);
      });
    }, 3000);

    return () => {
      clear();
      clearTimeout(timer);
    };
  }, []);

  const value = {
    isLoading,
    setIsLoading,
    setLoading: setLoadingPercent,
    loadingPercent,
  };

  return (
    <LoadingContext.Provider value={value}>
      {isLoading && <Loading percent={loadingPercent} />}
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
