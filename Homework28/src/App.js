import React, { useState } from 'react';
import Smiley from './components/Smiley';
import './style.css';

const SmileyVotingApp = () => {
  const [smileys, setSmileys] = useState([
    { id: 1, name: '😄', voteCount: 0 },
    { id: 2, name: '😊', voteCount: 0 },
    { id: 3, name: '🥳', voteCount: 0 },
    { id: 4, name: '😎', voteCount: 0 }
  ]);
  const [showResults, setShowResults] = useState(false);
  const [winningSmiley, setWinningSmiley] = useState('');

  const handleVote = (id) => {
    const updatedSmileys = smileys.map((smiley) => {
      if (smiley.id === id) {
        return { ...smiley, voteCount: smiley.voteCount + 1 };
      }
      return smiley;
    });
    setSmileys(updatedSmileys);
  };

  const calculateWinner = () => {
    let maxVotes = -1;
    let winningSmiley = null;
    smileys.forEach((smiley) => {
      if (smiley.voteCount > maxVotes) {
        maxVotes = smiley.voteCount;
        winningSmiley = smiley.name;
      }
    });
    return winningSmiley;
  };

  const handleShowResults = () => {
    const winner = calculateWinner();
    setWinningSmiley(winner);
    setShowResults(true);
  };

  return (
    <div>
      <h1>Smiley Voting App</h1>
      {smileys.map((smiley) => (
        <div key={smiley.id}>
          <span>{smiley.name} VoteCount: {smiley.voteCount}</span>
          <button onClick={() => handleVote(smiley.id)}>Vote</button>
        </div>
      ))}
      <button onClick={handleShowResults}>Show Results</button>
      {showResults && <p>Winning Smiley: {winningSmiley}</p>}
    </div>
  );
};

export default SmileyVotingApp;