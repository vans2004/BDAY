import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  return (
    <>
      <h2>
        5 Birthdays Today
      </h2>
      <main>
        <section className='container'>
        <List data ={data}/>
        <button>
          clear all 
        </button>
         </section>
      
      </main>
      
    </>

  )
}

export default App;
