import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { FileDataContext } from '../../services/UseFileContext';
import { useContext, useState } from 'react';
import './style.css'
import EditForm from '../tableEditData';
import { ISalesData } from '../../interfaces/SalesData';



const columns: GridColDef[] = [
  { field: 'ID', headerName: 'Id', width: 80, editable: false, headerAlign: 'left', align: 'left' },
  { field: 'CLIENTE', headerName: 'Cliente', width: 180, editable: false, headerAlign: 'left', align: 'left' },
  { field: 'IDADE', headerName: 'Idade', type: 'number', width: 80, align: 'left', headerAlign: 'left', editable: false },
  { field: 'ESTADO', headerName: 'Estado', width: 180, editable: false, headerAlign: 'left', align: 'left' }, // Changed the type to string
  { field: 'PRODUTO', headerName: 'Produto', width: 180, editable: false, headerAlign: 'left', align: 'left' },
  { field: 'QUANTIDADE_VENDIDA', headerName: 'Quantidade', width: 180, editable: false, type: 'number', headerAlign: 'left', align: 'left' },
  { field: 'DATA', headerName: 'Data', width: 220, editable: false, headerAlign: 'left', align: 'left' },
];

export default function TableSales() {

  const { jsonData } = useContext(FileDataContext);
  const [selectedRow, setSelectedRow] = useState<ISalesData | null>();

  
  const rows: GridRowsProp = jsonData.map((dataItem, index) => ({
    id: index + 1, 
    ID:  index + 1,
    CLIENTE: dataItem.CLIENTE,
    IDADE: dataItem.IDADE,
    ESTADO: dataItem.ESTADO,
    PRODUTO: dataItem.PRODUTO,
    QUANTIDADE_VENDIDA: dataItem.QUANTIDADE_VENDIDA,
    DATA: dataItem.DATA,
  }));

  
  return (
    <div className='container-table-sales'>
        <DataGrid 
          rows={rows}
          columns={columns}
          getRowId={(row) => row.id} 
          onRowClick={(params) => {
            setSelectedRow(params.row)
          }}
        />
      {selectedRow && (
        <EditForm
          selectedRow={selectedRow}
          onClose={() => setSelectedRow(null)}
        />
      )}

    </div>
  );
}