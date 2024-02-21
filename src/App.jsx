import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  // let a = 1;
  // function add(){
  //   a = a+1
  //   console.log(a)
  // }

  // const [a, setA] = useState(1)
  // function add() {
  //   setA(a + 1)
  // }

  const [people, setPeople] = useState(data)
  function clear(){
    setPeople([])
  }
  return (
    <>

      <main>
        <section className='container'>
          <h3>
            {people.length} Birthdays Today
          </h3>
          <List data={people} />
          <button onClick={clear}>
            clear all
          </button>
        </section>

      </main>

    </>

  )
}
export default App;
