import React, { createContext, useState } from 'react';
import {ISalesData, IFormatedSalesData} from '../interfaces/SalesData';

interface IFileDataContext {
  jsonData: ISalesData[];
  setJsonData: React.Dispatch<React.SetStateAction<ISalesData[]>>;
  xlsxData: IFormatedSalesData[];
  setXlsxData: React.Dispatch<React.SetStateAction<IFormatedSalesData[]>>;
}


export const FileDataContext = createContext<IFileDataContext>({} as IFileDataContext)

export const FileDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [jsonData, setJsonData] = useState<ISalesData[]>([]);
  const [xlsxData, setXlsxData] = useState<IFormatedSalesData[]>([])


 
  return(
    <FileDataContext.Provider value={{ jsonData, setJsonData, xlsxData, setXlsxData }}>
      {children}
    </FileDataContext.Provider>
  )
}
