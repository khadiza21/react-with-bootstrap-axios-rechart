import React from "react";
import { CardGroup } from "react-bootstrap";
import Card1 from "../Card/Card1";

const Cardgroup = () => {
  let cars = [
    {
      id: "1",
      color: "purple",
      type: "minivan",
      img: "https://media.istockphoto.com/photos/red-generic-sedan-car-isolated-on-white-background-3d-illustration-picture-id1189903200?k=20&m=1189903200&s=612x612&w=0&h=L2bus_XVwK5_yXI08X6RaprdFKF1U9YjpN_pVYPgS0o=",
      registration: new Date("2017-01-03"),
      capacity: 7,
    },
    {
      id: "2",
      color: "red",
      type: "station wagon",
      img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      registration: new Date("2018-03-03"),
      capacity: 5,
    },
    {
      id: "3",
      color: "red",
      type: "station wagon",
      img: "https://images.hindustantimes.com/auto/img/2020/09/28/600x338/avtr_2_1601265290527_1601265294715.JPG",
      registration: new Date("2018-03-03"),
      capacity: 6,
    },
  ];
  
  return (
    <CardGroup>
      {cars.map((car) => (
        <Card1 key={car.id} car={car}></Card1>
      ))}
    </CardGroup>
  );
};

export default Cardgroup;
