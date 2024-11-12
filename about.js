
import React from "react";
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>About the Battleship Game</h2>
      
      <p>
        Battleship is a classic two-player strategy game where players take turns guessing the location of the opponent's ships on a grid.
        The goal is to sink all the opponent's ships by hitting their positions. The game involves clever strategy, planning, and prediction.
      </p>

      <div className="about-images">
        <img src="path_to_image/board_example.jpg" alt="Game Board Example" />
        <p><em>Example of a typical Battleship game grid.</em></p>
      </div>
      
      <h3>Game Rules & Instructions:</h3>
      <ul>
        <li>The game is played on a 5x5 grid.</li>
        <li>Each player has three ships, each of length 3.</li>
        <li>Each ship can be placed either horizontally or vertically on the grid.</li>
        <li>On each turn, you will click on a cell of the opponent's grid to make a guess.</li>
        <li>If you hit a ship, it will be marked as 'X'. If you miss, it will be marked as 'O'.</li>
        <li>The game ends when all of the opponent's ships are sunk.</li>
        <li>The player who sinks all the opponent's ships first wins the game!</li>
      </ul>

      <button className="start-game-btn" onClick={() => alert('Start the game!')}>Start Game</button>
    </div>
  );
};

export default About;



