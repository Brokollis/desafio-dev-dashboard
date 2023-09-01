import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { FileDataContext } from '../../services/UseFileContext';
import { useContext, useEffect, useState } from 'react';
import './style.css'
import {ISalesData} from '../../interfaces/SalesData';
import EditForm from '../tableEditData';



const columns: GridColDef[] = [
  { field: 'CLIENTE', headerName: 'Cliente', width: 180, editable: true, headerAlign: 'left', align: 'left' },
  { field: 'IDADE', headerName: 'Idade', type: 'number', width: 80, align: 'left', headerAlign: 'left', editable: true },
  { field: 'ESTADO', headerName: 'Estado', width: 180, editable: true, headerAlign: 'left', align: 'left' }, // Changed the type to string
  { field: 'PRODUTO', headerName: 'Produto', width: 180, editable: true, headerAlign: 'left', align: 'left' },
  { field: 'QUANTIDADE_VENDIDA', headerName: 'Quantidade', width: 180, editable: true, type: 'number', headerAlign: 'left', align: 'left' },
  { field: 'DATA', headerName: 'Data', width: 220, editable: true, headerAlign: 'left', align: 'left' },
];

export default function TableSales() {

  const { jsonData, setXlsxData, updateData } = useContext(FileDataContext);
  const [selectedRow, setSelectedRow] = useState(null);



  const handleUpdate = (updatedData: ISalesData) => {
    const { ID, DATA, CLIENTE, IDADE, ESTADO, PRODUTO, QUANTIDADE_VENDIDA } = updatedData;
    updateData({
      ID,
      DATA,
      CLIENTE,
      IDADE,
      ESTADO,
      PRODUTO,
      QUANTIDADE_VENDIDA,
    });
    setSelectedRow(null); // Limpa a seleção após a atualização
  };
  
  
  const rows: GridRowsProp = jsonData.map((dataItem, index) => ({
    id: index + 1, // Gere um ID único para cada linha
    CLIENTE: dataItem.CLIENTE,
    IDADE: dataItem.IDADE,
    ESTADO: dataItem.ESTADO,
    PRODUTO: dataItem.PRODUTO,
    QUANTIDADE_VENDIDA: dataItem.QUANTIDADE_VENDIDA,
    DATA: dataItem.DATA,
  }));


  useEffect(() => {
    const mutableRows = rows.map((row) => ({
      DATA: row.DATA,
      CLIENTE: row.CLIENTE,
      IDADE: row.IDADE,
      ESTADO: row.ESTADO,
      PRODUTO: row.PRODUTO,
      QUANTIDADE_VENDIDA: row.QUANTIDADE_VENDIDA,
    }));

    setXlsxData(mutableRows);
  }, [rows, setXlsxData]); 

  
  return (
    <div className='container-table-sales'>
        <DataGrid 
         rows={rows}
         columns={columns}
         getRowId={(row) => row.id} // Use o id como identificador único
         onRowClick={(params) => setSelectedRow(params.row)}
        />
      {selectedRow && (
        <EditForm
          selectedRow={selectedRow}
          onUpdate={handleUpdate} // Crie uma função para atualizar os dados
        />
      )}

    </div>
  );
}