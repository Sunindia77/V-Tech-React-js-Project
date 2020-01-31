import React from 'react';

const CustomButton=({children, ...otherProps})=>(
    <button 
    {...otherProps}>
{children}

</button>
);

export default CustomButton;