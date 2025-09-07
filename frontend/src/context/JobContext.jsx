import { createContext } from "react";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  return <JobContext.Provider value="salam">{children}</JobContext.Provider>;
};
