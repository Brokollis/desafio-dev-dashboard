import { useState, ChangeEvent, useContext } from 'react';
import { ISalesData } from '../../interfaces/SalesData';
import { Box } from '@mui/joy';
import TextField from '@mui/material/TextField';
import GenericButton from '../genericButton';
import './style.css'
import { FileDataContext } from '../../services/UseFileContext';

interface EditFormProps {
  selectedRow: {
    ID: number;
    DATA: string;
    CLIENTE: string;
    IDADE: number;
    ESTADO: string;
    PRODUTO: string;
    QUANTIDADE_VENDIDA: number;
  };
  onUpdate: (updatedData: ISalesData) => void; 
}

function EditForm({ selectedRow, onUpdate }: EditFormProps) {
  const [editedData, setEditedData] = useState(selectedRow);

  const { jsonData, setJsonData } = useContext(FileDataContext);
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const updateDataById = (id: number, newData: Partial<ISalesData>) => {
    const dataIndex = jsonData.findIndex((data) => data.ID === id);
  
    if (dataIndex !== -1) {
      const updatedData = { ...jsonData[dataIndex], ...newData };
  
      const updatedJsonData = [...jsonData];
      updatedJsonData[dataIndex] = updatedData;
  
      setJsonData(updatedJsonData);
    }
  };

  const handleUpdateClick = () => {
    onUpdate(editedData); 
    updateDataById(editedData.ID, editedData); 
  };


  return (
    <div className='edit-form'>
      <h2>Editar Dados</h2>
      <form onSubmit={handleUpdateClick}>
        <Box
            component="div"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                flexDirection: 'column',
                display: "flex"
            }}
        >
            <TextField id="filled-basic" name="CLIENTE" label="Cliente" variant="outlined" value={editedData.CLIENTE} onChange={handleInputChange}/>
            <TextField id="standard-basic" name="IDADE" label="Idade" variant="outlined" value={editedData.IDADE} onChange={handleInputChange}/>
            <TextField id="filled-basic" name="ESTADO" label="Estado" variant="outlined" value={editedData.ESTADO} onChange={handleInputChange}/>
            <TextField id="standard-basic" name="PRODUTO" label="Produto" variant="outlined" value={editedData.PRODUTO}  onChange={handleInputChange}/>
            <TextField id="filled-basic" name="QUANTIDADE_VENDIDA" label="Quantidade vendas" variant="outlined" value={editedData.QUANTIDADE_VENDIDA} onChange={handleInputChange}/>
            <TextField id="standard-basic" name="DATA" label="Data" variant="outlined"  value={editedData.DATA} onChange={handleInputChange}/>

            <div>
                <button type='submit'>Enviar</button>
                <GenericButton
                    onClick={handleUpdateClick}
                    icon
                    margin='0.4em 0em'
                    text='Cancelar'
                    width='250px'
                />
            </div>
        </Box>
      </form>
    </div>
  );
}

export default EditForm;
