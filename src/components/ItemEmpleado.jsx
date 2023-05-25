import React from "react";
import Table from "react-bootstrap/Table";
import EmpleadoAvatar from "./EmpleadoAvatar";

const ItemEmpleado = ({ empleado }) => {
  return (
    <div>
     <div className=" ">
              <div className="row d-flex align-items-center">
                <div className="col-4">
                <EmpleadoAvatar avatar={empleado.pic} alt={empleado.fullName} ></EmpleadoAvatar>
                  
                </div>
                <div className="col-8 p-0  flex-column ">
                  <div className="">{empleado.fullName}</div>
                  <div className="d-flex flex-row">
                    <p className="p-0 me-2 txtTitulo">{empleado.title} <span className="p-0 ms-2 bg-primary ">{empleado.department}</span></p>
                  </div>
                </div>
              </div>
            </div>
            {/*{
      id: 1,
      fullName: "Laya Dueñas",
      title: "CEO",
      department: "Business",
      pic: "https://img.freepik.com/free-icon/user_318-219688.jpg",
    },*/}
            
    </div>
  );
};

export default ItemEmpleado;
