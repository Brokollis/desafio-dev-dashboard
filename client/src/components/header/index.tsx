import GenericButton from '../genericButton';
import GenericInput from '../genericInput';
import { FileDataContext } from '../../services/UseFileContext';
import * as XLSX from 'xlsx';
import { useContext, useEffect } from 'react';
import { format } from 'date-fns';

import './style.css';
import logo from '../../assets/images/manchester_logo.png'


interface IExcelData {
    CLIENTE: string;
    DATA: string;
    ESTADO: string;
    IDADE: string;
    PRODUTO: string;
    QUANTIDADE_VENDIDA: string;
  }

const HeaderComponent = () => {

    const { jsonData, setJsonData, xlsxData, setXlsxData } = useContext(FileDataContext);
   
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files && event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target?.result as string;
  
          const workbook = XLSX.read(content, { type: 'binary' });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const data = XLSX.utils.sheet_to_json<IExcelData>(sheet, {
            raw: false,
            dateNF: 'dd/mm/yyyy',
          });
  
          const formattedData = data.map((item, index) => ({
            ID: index + 1,
            CLIENTE: item.CLIENTE,
            IDADE: parseInt(item.IDADE),
            ESTADO: item.ESTADO,
            PRODUTO: item.PRODUTO,
            QUANTIDADE_VENDIDA: parseInt(item.QUANTIDADE_VENDIDA),
            DATA: format(new Date(item.DATA), 'dd/MM/yyyy'),
          }));
  
          setJsonData(formattedData);
        };
        reader.readAsBinaryString(file);
      }
    };

    const exportToExcel = () => {
      const worksheet = XLSX.utils.json_to_sheet(xlsxData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Tabela de Vendas');
      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = URL.createObjectURL(data);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'tabela_vendas.xlsx');
      document.body.appendChild(link);
      link.click();
    };

    useEffect(() => {
      const mutableRows = jsonData.map((row) => ({
        CLIENTE: row.CLIENTE,
        IDADE: row.IDADE,
        ESTADO: row.ESTADO,
        PRODUTO: row.PRODUTO,
        QUANTIDADE_VENDIDA: row.QUANTIDADE_VENDIDA,
        DATA: row.DATA,
      }));

      setXlsxData(mutableRows);
    }, [jsonData, setXlsxData]); 
      

    return (
        <header>
          <div className="header-container">
            <div className="title-container">
              <img className="logo" src={logo} alt="logo"/>
              <p className="title-page">
                  Balanço  de  vendas
              </p>
            </div>
            <div className="options-container">
              <GenericInput onChange={handleFileChange} width='48%'/>
              <GenericButton
                text="Download"
                margin="0em 0em 0em 1em"
                width='94%'
                onClick={exportToExcel}
                icon={
                  <svg width={15} height={15} fill="none" stroke="#5C5656" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24">
                      <path d="M3 14v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6" />
                      <path d="M12 3v14m0 0-5-5.444M12 17l5-5.444" />
                  </svg>
                }
              />
            </div>
          </div>
        </header>
    )
}

export default HeaderComponent;


