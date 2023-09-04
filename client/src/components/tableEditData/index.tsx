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
  onClose: () => void;
}

const EditForm = ({ selectedRow, onClose }: EditFormProps) => {

  const [editedData, setEditedData] = useState(selectedRow);
  // const [isEditing, setIsEditing] = useState(true);
  const { jsonData, setJsonData } = useContext(FileDataContext);
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newValue = name === 'IDADE' || name === 'QUANTIDADE_VENDIDA' ? parseInt(value) : value;
    setEditedData({ ...editedData, [name]: newValue });
  };

  const handleEditData = ( newData: ISalesData) => {
    const updateData = jsonData.map((data) =>
      data.ID ===  selectedRow.ID ? { ...newData } : data
    );
    setJsonData(updateData);
    onClose();
  }

  const handleDeleteData = () => {
    const updateDeletedData = jsonData.filter((data) => data.ID !== selectedRow.ID);
    setJsonData(updateDeletedData);
    onClose();
  }


    return (
      <div className='edit-form'>
        <h2>Editar Dados</h2>
        <form 
          onSubmit={(e) => {
            e.preventDefault(); handleEditData(editedData)
          }}
        >
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
            <div className='edit-form_buttons'>
              <GenericButton
                margin='0.4em 0em'
                text='Salvar'
                width='100%'
              />
              <GenericButton
                onClick={ handleDeleteData}
                margin='0.4em 0em'
                text='Deletar'
                width='100%'
              />
               <GenericButton
                onClick={onClose}
                margin='0.4em 0em'
                text='Cancelar'
                width='100%'
              />
            </div>
          </Box>
        </form>
      </div>
    );    
}

export default EditForm;
