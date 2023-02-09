import React, { useEffect } from 'react';
import { useState } from "react";
import './App.css';

export const App = () => {
    
    
    
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);
    const [active5, setActive5] = useState(false);
    
    useEffect(() => {
      console.log(active1);
    }, [active1])


const changeActive1 = () => {
   setActive1(true);
   setActive2(false);
   setActive3(false);
   setActive4(false);
   setActive5(false);
};
const changeActive2 = () => {
    setActive1(false);
    setActive2(true);
    setActive3(false);
    setActive4(false);
    setActive5(false);
 };
const changeActive3 = () => {
    setActive1(false);
    setActive2(false);
    setActive3(true);
    setActive4(false);
    setActive5(false);
 };
const changeActive4 = () => {
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(true);
    setActive5(false);
 };
const changeActive5 = () => {
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(true);
 };

  return (
    <>
    <div className='container'>
        <div className={active1 ? 'panel active' : 'panel' } 
            onClick={changeActive1}
            
            style={{backgroundImage:`url("https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")`}}
        >         
            <h3>Picture 1</h3>
        </div>
        <div className={active2 ? 'panel active' : 'panel' } 
            onClick={changeActive2}

            style={{backgroundImage:`url("https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")`}}
        >         
            <h3>Picture 2</h3>
        </div>
        <div className={active3 ? 'panel active' : 'panel' } 
            onClick={changeActive3} 
            style={{backgroundImage:`url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80")`}}
        >         
            <h3>Picture 3</h3>
        </div>
        <div className={active4 ? 'panel active' : 'panel' } 
            onClick={changeActive4}
            style={{backgroundImage:`url("https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80")`}}
        >         
            <h3>Picture 4</h3>
        </div>
        <div className={active5 ? 'panel active' : 'panel' } 
            onClick={changeActive5} 
            style={{backgroundImage:`url("https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")`}}
        >         
            <h3>Picture 5</h3>
        </div>
     
    </div>
    </>
  )
}

export default App;
