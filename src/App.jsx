
import './App.css'
import { Button } from 'flowbite-react';
import NavBar from './components/NavBar/NavBar';
// import Form from './components/Form/Form';

function App() {

  return (
    <>
    <section className=' container mx-auto'>
      <NavBar />
      <div className=' flex justify-center my-20 '>
        <Button>Click me</Button>
      </div>

    </section>
    {/* <Form /> */}
    </>
  )
}

export default App
