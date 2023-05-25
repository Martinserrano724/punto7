import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ListaEmpleado from "./ListaEmpleado";
const Empleado = () => {
  let empleados = [
    {
      id: 1,
      fullName: "Laya Dueñas",
      title: "CEO",
      department: "Business",
      pic: "https://img.freepik.com/free-icon/user_318-219688.jpg",
    },
    {
      id: 2,
      fullName: "Astryd Vallés",
      title: "CMO",
      department: "Marketing",
      pic: "https://img.freepik.com/free-icon/prisoner_318-198082.jpg?t=st=1685031033~exp=1685031633~hmac=fca3ea774fac0c625882873a4874f6bac518487022b0b7f47a52d7672ec54ea3",
    },
    {
      id: 3,
      fullName: "Shantell Meza",
      title: "CFO",
      department: "Business",
      pic: 'https://cdn.iconscout.com/icon/free/png-512/free-avatar-369-456321.png?f=avif&w=256',
    },
    {
      id: 4,
      fullName: "Sergio Ocampo",
      title: "CTO",
      department: "Engineering",
      pic: "https://cdn.iconscout.com/icon/free/png-512/free-avatar-370-456322.png?f=avif&w=256",
    },
    {
      id: 5,
      fullName: "Ares Jiménez",
      title: "Art Director",
      department: "Marketing",
      pic: "https://img.freepik.com/free-icon/judge_318-198088.jpg?t=st=1685030887~exp=1685031487~hmac=7401c4c75086acd29fcd1843d29656532120c1b841b729c04514c98f491fb1dc",
    },
    {
      id: 6,
      fullName: "Marta Pérez",
      title: "Frontend Dev",
      department: "Engineering",
      pic: "https://cdn.iconscout.com/icon/free/png-512/free-avatar-373-456325.png?f=avif&w=256",
    },
    {
      id: 7,
      fullName: "Ellen Balderas",
      title: "Digital Strategist",
      department: "Marketing",
      pic: "https://cdn.iconscout.com/icon/premium/png-512-thumb/avatar-164-132154.png?f=avif&w=256",
    },
    {
      id: 8,
      fullName: "Cynthia Valentín",
      title: "Backend Dev",
      department: "Engineering",
      pic: "https://cdn.iconscout.com/icon/free/png-512/free-avatar-1253-879841.png?f=avif&w=256",
    },
    {
      id: 9,
      fullName: "Bernard Jung",
      title: "DevOps Engineer",
      department: "Engineering",
      pic: "https://cdn.iconscout.com/icon/premium/png-512-thumb/avatar-169-132160.png?f=avif&w=256",
    },
  ];

  return (
    <>
      <Container>
        <Row>
          <div className="d-flex justify-content-center">  
            <ListaEmpleado empleados={empleados}></ListaEmpleado>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Empleado;
