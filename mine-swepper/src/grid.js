import React, { useState } from 'react';
import './styles.css';

function Grid() {
  const [grid, setGrid] = useState(Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => Math.random() > 0.5 ? '*' : ' ')));
  const [grid1, setGrid1] = useState(Array.from({ length: 10 }, () => Array.from({ length: 10 }, () =>  ' ')));

  const handleCellClick = (i, j) => {
    const newGrid1 = [...grid1]; 
    newGrid1[i][j] = grid[i][j];  
    setGrid1(newGrid1);           
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
        grid[i][j] = value.toString();
       

      }
    }
  }

    return (
      <div className="grid">
        {grid1.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <input
                key={colIndex}
                type="button"
                value={cell}
                className="cell"
                onClick={() => handleCellClick(rowIndex, colIndex)}

              />
              
            ))}
          </div>
        ))}
      </div>
    );
  }



  export default Grid;