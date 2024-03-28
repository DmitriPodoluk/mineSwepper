import './styles.css';
import React, { useState, useEffect } from 'react';

function Grid() {

const [grid, setGrid] = useState(Array.from({ length: 5 }, () => Array.from({ length: 5 }, () =>  ' ')));
const [clickedCells, setClickedCells] = useState([]);

useEffect(() => {
  init();
}, []); 

const [Counter, setCounter] = useState(0);
const [pic, setPic] = useState('https://media.istockphoto.com/id/157030584/vector/thumb-up-emoticon.jpg?s=1024x1024&w=is&k=20&c=PtntOtwm-DY9ETqOo23RQKUS48_ZfYUkKpcZXWzEfNI=');
const [message, setMessage] = useState();


function reset(){
  setGrid(Array.from({ length: 5 }, () => Array.from({ length: 5 }, () =>  ' ')));
  init();


}

function check(i,j){


  const alreadyClicked = clickedCells.some(cell => cell.row === i && cell.col === j);
console.log(alreadyClicked);

if (alreadyClicked ) {
  return;
}

setClickedCells([...clickedCells, { row: i, col: j }]);

if(!alreadyClicked && grid[i][j]>0){
  setClickedCells([...clickedCells, { row: i, col: j }]);
}

  if(grid[i][j]=='*'){
    setClickedCells([...clickedCells, { row: i, col: j }]);
    setPic('https://st2.depositphotos.com/1967477/6346/v/450/depositphotos_63462971-stock-illustration-sad-smiley-emoticon-cartoon.jpg')
     setMessage("game  over!!!!!");
  
  }else{

  setCounter(Counter+1);

    
        if (i === 0) {
          if (j === 0) {
            if (grid[i + 1][j] === ' '&& !(alreadyClicked))  {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
              //setClickedCells([...clickedCells, { row: i+1, col: j }]);
              check(i+1,j);
            
            }
            if (grid[i][j + 1] === ' '&& !(alreadyClicked)) {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
              //setClickedCells([...clickedCells, { row: i, col: j+1 }]);
              check(i,j+1);
            }
            if (grid[i + 1][j + 1] === ' '&& !(alreadyClicked)) {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
             // setClickedCells([...clickedCells, { row: i+1, col: j+1 }]);

              check(i+1,j+1);

            }

          } else if (j === grid.length - 1) {
            if (grid[i + 1][j - 1] === ' '&& !(alreadyClicked)) {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
             // setClickedCells([...clickedCells, { row: i+1, col: j-1 }]);
              check(i+1,j-1);
            }
            if (grid[i + 1][j] === ' '&& !(alreadyClicked)) {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
             // setClickedCells([...clickedCells, {row: i+1, col: j }]);
              check(i+1,j);
            }
            if (grid[i][j - 1] === ' '&& !(alreadyClicked)) {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
              //setClickedCells([...clickedCells, {row: i, col: j }]);
              check(i,j);

            }
          } else {
            if (grid[i + 1][j - 1] === ' '&& !(alreadyClicked)) {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
              //setClickedCells([...clickedCells, {row: i+1, col: j-1 }]);
              check(i+1,j-1);
            }
            if (grid[i + 1][j] === ' '&& !(alreadyClicked)) {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
              //setClickedCells([...clickedCells, { row: i+1, col: j }]);
              check(i+1,j);
            }
            if (grid[i + 1][j + 1] === ' '&& !(alreadyClicked)) {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
             // setClickedCells([...clickedCells, { row: i+1, col: j+1 }]);
              check(i+1,j+1);
            }
            if (grid[i][j - 1] === ' '&& !(alreadyClicked)) {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
             // setClickedCells([...clickedCells, { row: i, col: j-1 }]);
              check(i,j-1);

            }
            if (grid[i][j + 1] === ' '&& !(alreadyClicked)) {
             // setClickedCells([...clickedCells, { row: i, col: j }]);
              //setClickedCells([...clickedCells, { row: i, col: j+1 }]);
              check(i,j+1);

            }
          }
          
        } else if (i === grid.length - 1) {
          if (j === 0) {
            if (grid[i - 1][j] === ' '&& !(alreadyClicked)) {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
             // setClickedCells([...clickedCells, {row: i, col: j+1 }]);
              check(i-1,j);
            }
            if (grid[i][j + 1] === ' '&&!(alreadyClicked)) {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
              //setClickedCells([...clickedCells, { frow: i, col: j+1 }]);
              check(i,j+1);
            }
            if (grid[i - 1][j + 1] === ' '&& !(alreadyClicked)) {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
             // setClickedCells([...clickedCells, { row: i-1, col: j+1 }]);
              check(i-1,j+1);
            }
          } else if (j === grid.length - 1) {
            if (grid[i - 1][j - 1] === ' '&& !(alreadyClicked)) {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
             // setClickedCells([...clickedCells, { row: i-1, col: j-1 }]);
              check(i-1,j-1);
            }
            if (grid[i - 1][j] === ' '&& !(alreadyClicked)) {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
              //setClickedCells([...clickedCells, { row: i-1, col: j }]);
              check(i-1,j);
            }
            if (grid[i][j - 1] === ' '&& !(alreadyClicked)) {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
              //setClickedCells([...clickedCells, { row: i, col: j-1 }]);
              check(i,j-1);
            }
          } else {
            if (grid[i - 1][j - 1] === ' '&& !(alreadyClicked)) {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
              //setClickedCells([...clickedCells, { row: i-1, col: j-1 }]);
              check(i-1,j-1);
            }
            if (grid[i - 1][j] === ' '&& !(alreadyClicked)) {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
              //setClickedCells([...clickedCells, { row: i-1, col: j }]);
              check(i-1,j);
            }
            if (grid[i - 1][j + 1] === ' '&& !(alreadyClicked)) {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
              //setClickedCells([...clickedCells, { row: i-1, col: j + 1}]);
              check(i-1,j+1);
            }
            if (grid[i][j - 1] === ' '&& !(alreadyClicked)) {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
              //setClickedCells([...clickedCells, { row: i, col: j - 1}]);
              check(i,j-1);
            }
            if (grid[i][j + 1] === ' '&& !(alreadyClicked)) {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
              //setClickedCells([...clickedCells, { row: i, col: j + 1}]);
              check(i,j+1);

            }
          }
        } else {
          if (j === 0) {
            if (grid[i - 1][j] === ' '&& !(alreadyClicked)) {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
              //setClickedCells([...clickedCells, { row: i-1, col: j }]);
              check(i-1,j);
            }
            if (grid[i + 1][j] === ' '&& !(alreadyClicked)) {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
              //setClickedCells([...clickedCells, { row: i+1, col: j }]);
              check(i+1,j);
                        }
            if (grid[i][j + 1] === ' ' && !(alreadyClicked)) {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
              //setClickedCells([...clickedCells, { row: i, col: j+1 }]);
              check(i,j+1);
            }
            if (grid[i + 1][j + 1] === ' '&&!(alreadyClicked)) {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
              //setClickedCells([...clickedCells, { row: i+1, col: j+1 }]);
              check(i+1,j+1);
            }
            if (grid[i - 1][j + 1] === ' '&& !(alreadyClicked)) {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
              //setClickedCells([...clickedCells, { row: i-1, col: j+1 }]);
              check(i-1,j+1);
            }
          } else if (j === grid.length - 1) {
            
            if (grid[i - 1][j] === ' '&& !(alreadyClicked)) {
             // setClickedCells([...clickedCells, { row: i, col: j }]);
              //setClickedCells([...clickedCells, { row: i-1, col: j }]);
              check(i-1,j);
            }
            if (grid[i + 1][j] === ' '&& !(alreadyClicked)) {             
               //setClickedCells([...clickedCells, { row: i, col: j }]);
              //setClickedCells([...clickedCells, { row: i+1, col: j }]);
              check(i+1,j);
            }

            if (grid[i + 1][j - 1] === ' '&& !(alreadyClicked)) {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
              //setClickedCells([...clickedCells, { row: i+1, col: j- 1  }]);
              check(i+1,j-1);

            }
            if (grid[i - 1][j - 1] === ' '&& !(alreadyClicked)) {
             // setClickedCells([...clickedCells, { row: i, col: j }]);
              //setClickedCells([...clickedCells, { row: i-1, col: j-1 }]);
              check(i-1,j-1);
            }
            if (grid[i][j - 1] === ' '&& !(alreadyClicked)) {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
              //setClickedCells([...clickedCells, { row: i, col: j-1 }]);
              check(i,j-1);
            }
          } else {
            if (grid[i - 1][j - 1] === ' '&& !(alreadyClicked)) {
             // setClickedCells([...clickedCells, { row: i, col: j }]);
              //setClickedCells([...clickedCells, { row: i-1, col: j-1 }]);
              check(i-1,j-1);
            }
            if (grid[i - 1][j] === ' '&& !(alreadyClicked)) {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
              //setClickedCells([...clickedCells, { row: i-1, col: j }]);
              check(i-1,j);
            }
            if (grid[i - 1][j + 1] === ' '&& !(alreadyClicked)) {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
              //setClickedCells([...clickedCells, { row: i-1, col: j+1 }]);
              check(i-1,j+1);
            }
            if (grid[i][j - 1] === ' '&& !(alreadyClicked)) {
             // setClickedCells([...clickedCells, { row: i, col: j }]);
              //setClickedCells([...clickedCells, { row: i, col: j-1 }]);
              check(i,j-1);
                        }
            if (grid[i][j + 1] === ' '&& !(alreadyClicked)) {
             // setClickedCells([...clickedCells, { row: i, col: j }]);
              //setClickedCells([...clickedCells, { row: i, col: j+1 }]);
              check(i,j+1);
            }
            if (grid[i + 1][j - 1] === ' '&& !(alreadyClicked)) {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
              //setClickedCells([...clickedCells, { row: i+1, col: j-1 }]);
              check(i+1,j-1);

            }

            if (grid[i + 1][j] === '' && !(alreadyClicked)) {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
              //setClickedCells([...clickedCells, { row: i+1, col: j }]);
              check(i+1,j);

            }
            if (grid[i + 1][j + 1] === ' '&& !(alreadyClicked)) {
              //setClickedCells([...clickedCells, { row: i, col: j }]);
              //setClickedCells([...clickedCells, { row: i+1, col: j+1 }]);
              check(i+1,j+1);
            }
          }
        
  
      }
    }
}
  


function init(){

  let counter=0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
       if(Math.random() < 0.5&&counter<3){
     counter++;
        grid[i][j]='*';
       }else{

        grid[i][j]=' ';

       }
     
    }

  }
  for (let i = 0; i < grid.length; i++) {

    for (let j = 0; j < grid.length; j++) {
      let value = 0;

      if (grid[i][j] === ' ') {

        if (i === 0) {
          if (j === 0) {
            if (grid[i + 1][j] === '*') {
              value++;
            }
            if (grid[i][j + 1] === '*') {
              value++;
            }
            if (grid[i + 1][j + 1] === '*') {
              value++;
            }
          } else if (j === grid.length - 1) {
            if (grid[i + 1][j - 1] === '*') {
              value++;
            }
            if (grid[i + 1][j] === '*') {
              value++;
            }
            if (grid[i][j - 1] === '*') {
              value++;
            }
          } else {
            if (grid[i + 1][j - 1] === '*') {
              value++;
            }
            if (grid[i + 1][j] === '*') {
              value++;
            }
            if (grid[i + 1][j + 1] === '*') {
              value++;
            }
            if (grid[i][j - 1] === '*') {
              value++;
            }
            if (grid[i][j + 1] === '*') {
              value++;
            }
          }
        } else if (i === grid.length - 1) {
          if (j === 0) {
            if (grid[i - 1][j] === '*') {
              value++;
            }
            if (grid[i][j + 1] === '*') {
              value++;
            }
            if (grid[i - 1][j + 1] === '*') {
              value++;
            }
          } else if (j === grid.length - 1) {
            if (grid[i - 1][j - 1] === '*') {
              value++;
            }
            if (grid[i - 1][j] === '*') {
              value++;
            }
            if (grid[i][j - 1] === '*') {
              value++;
            }
          } else {
            if (grid[i - 1][j - 1] === '*') {
              value++;
            }
            if (grid[i - 1][j] === '*') {
              value++;
            }
            if (grid[i - 1][j + 1] === '*') {
              value++;
            }
            if (grid[i][j - 1] === '*') {
              value++;
            }
            if (grid[i][j + 1] === '*') {
              value++;
            }
          }
        } else {
          if (j === 0) {
            if (grid[i - 1][j] === '*') {
              value++;
            }
            if (grid[i + 1][j] === '*') {
              value++;
            }
            if (grid[i][j + 1] === '*') {
              value++;
            }
            if (grid[i + 1][j + 1] === '*') {
              value++;
            }
            if (grid[i - 1][j + 1] === '*') {
              value++;
            }
          } else if (j === grid.length - 1) {
            if (grid[i - 1][j] === '*') {
              value++;
            }
            if (grid[i + 1][j] === '*') {
              value++;
            }
            if (grid[i + 1][j - 1] === '*') {
              value++;
            }
            if (grid[i - 1][j - 1] === '*') {
              value++;
            }
            if (grid[i][j - 1] === '*') {
              value++;
            }
          } else {
            if (grid[i - 1][j - 1] === '*') {
              value++;
            }
            if (grid[i - 1][j] === '*') {
              value++;
            }
            if (grid[i - 1][j + 1] === '*') {
              value++;
            }
            if (grid[i][j - 1] === '*') {
              value++;
            }
            if (grid[i][j + 1] === '*') {
              value++;
            }
            if (grid[i + 1][j - 1] === '*') {
              value++;
            }
            if (grid[i + 1][j] === '*') {
              value++;
            }
            if (grid[i + 1][j + 1] === '*') {
              value++;
            }
          }
        }
        if(value===0){
          grid[i][j] =' ';

        }else{
          grid[i][j] = value.toString();

        }
       

      }
    }
  
  }
}


function  handleClick  (i,j)  {

    setClickedCells([...clickedCells, { row: i, col: j }]);
    setCounter(Counter+1);

    if(grid[i][j]=='*'){
      setPic('https://st2.depositphotos.com/1967477/6346/v/450/depositphotos_63462971-stock-illustration-sad-smiley-emoticon-cartoon.jpg')
      
       setMessage("game  over!!!!!");
       
       
    }


}

 

    return ( 
      <div className="grid">     
     
      <h1>{Counter}</h1>
   
     
      <h2>{message}</h2>
     

      
      <img src={pic} ></img>
      

        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <input
              style={{
                color: clickedCells.find(cell =>  cell.row === rowIndex && cell.col === colIndex  ) ? "black" : "transparent",
                backgroundColor:clickedCells.find(cell =>   cell.row === rowIndex && cell.col === colIndex) ? "white" : "gray",

              }}
                
            
                key={colIndex}
                type="button"
                value={cell}
                className="cell"
                onClick={(setPic)=>check(rowIndex, colIndex)}
              />

            ))}
          </div>
        ))}

      </div>
    );
            }        
          


  export default Grid;