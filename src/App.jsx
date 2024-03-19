
import './App.css'
import { Button } from 'flowbite-react';
import NavBar from './components/NavBar/NavBar';
import PriceOptions from './components/PriceOptions/PriceOptions';
import LineChart from './components/LineChart/LineChart';
import Pichart from './components/Pichart/Pichart';
// import Form from './components/Form/Form';

function App() {

  return (
    <>
    <section className=' container mx-auto'>
      <NavBar />
      <div className=' flex justify-center my-20 '>
        <Button>Click me</Button>
      </div>

      <PriceOptions />

      <LineChart />

      <Pichart />

    </section>
    {/* <Form /> */}
    </>
  )
}

export default App
