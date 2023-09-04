import React from 'react';
import './style.css';

interface IPropsGenericButton{
    onClick?: () => void;
    type?: string;
    text: string;
    icon?: React.ReactNode;
    margin: string;
    width: string;
}

const GenericButton = ({onClick, text, icon, margin, width} : IPropsGenericButton) => {
    return(
        <button 
            className='genericButton'
            onClick = {onClick} 
            style={
                {
                    margin:margin,
                    width: width
                }
        }>
            <p className='button-text'>
                {text}
            </p>
            <div className='button-icon'>
                {icon}
            </div>
        </button>
    );
}

export default GenericButton;