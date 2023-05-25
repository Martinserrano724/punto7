import React from 'react';
import ItemEmpleado from './ItemEmpleado';

const ListaEmpleado = ({empleados}) => {
    return (
        <div className='contenedorRow'>
           {empleados.map((emple,index)=>{ return <ItemEmpleado empleado={emple} key={index}></ItemEmpleado>})}
        </div>
    );
};

export default ListaEmpleado;