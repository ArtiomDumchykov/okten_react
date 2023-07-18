import React from 'react';
import './App.css';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';


// const usersService = new UsersService()
// async function f () {
  // const response = await carsService.getAll()
  // console.log(response);
  // const response = await carsService.getCarsId(5471)
  // console.log(response);

  // const response = await carsService.createCar({brand: "Rainmettal", price: 1488, year: 2000})
  // console.log(response);

  // const response = await carsService.updateCar(5485, {brand: "Rainmettal", price: 7777, year: 2000})
  // console.log(response);
  // const response = await carsService.deleteCar(5485)
  // console.log(response);
// }


function App() {
  return (
    <>
    <RegisterPage />
    </>
  );
}

export default App;
