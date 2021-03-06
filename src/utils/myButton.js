import React from 'react';

//Material UI
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

export default ({children,onClick,btnClassName,tipClassName,tip})=>{
    return (
        <Tooltip title={tip} className={tipClassName} placement="top">
            <IconButton onClick={onClick} className={btnClassName}>
            {children}    
            </IconButton> 
        </Tooltip>
    )
};
