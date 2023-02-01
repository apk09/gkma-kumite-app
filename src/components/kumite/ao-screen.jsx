import React, { useState } from 'react';
import styled from 'styled-components';

const AoScreenContainer = styled.div`
  .senshuSelected {
    background: #fff;
    color: #3466ff;
    border-color: #3466ff;
  }
`;

const AoHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AoText = styled.h3`
  color: #fff;
  font-size: 50px;
  letter-spacing: 5px;
  margin: 15px 0 0 0;
`;

const AoInputText = styled.input`
  background-color: rgba(0,0,0,.5);
  color: #fff;
  border: 1px solid #000;
  width: 200px;
  height: 25px;
  font-size: 20px;
  margin-right: 10px;
`;

const AoDoneBtn = styled.button`
  background-color: rgba(0,0,0,.5);
  color: #fff;
  height: 30px;
  width: 100px;
  font-size: 20px;
  border: 1px solid #000;
  &:hover {
    background-color: transparent;
    color: #fff;
  }
`;

const SenshuButton = styled.button`
  font-size: 20px;
  margin: 15px 0 0 15px;
  background: #3466ff;
  color: #fff;
  border-color: #fff;
  border-style: double;
  cursor: pointer;
  width: 50%;
  margin-top: 10px;
  &:hover {
    background: #fff;
    color: #3466ff;
    border-color: #3466ff; 
  }
`;

const AoScoreText = styled.p`
  color: #fff;
  font-size: 300px;
  font-weight: 700;
  margin: 0;
`;

const ScoreButtonContainer = styled.div`
  margin: 0;
`;

const ScoreButton = styled.button`
  width: auto;
  margin: 10px 7.5px;
  padding: 10px 20px;
  font-size: 20px;
  background: #3466ff;
  color: #fff;
  border-color: #fff;
  border-style: double;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #3466ff;
    border-color: #3466ff; 
  }
`;

const PunishmentButton = styled.button`
  width: auto;
  margin: 10px 7.5px;
  padding: 10px 20px;
  font-size: 20px;
  background: #3466ff;
  color: #fff;
  border-color: #fff;
  border-style: dotted;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #3466ff;
    border-color: #3466ff; 
  }
`;

const PunishmentButtonContainer = styled.div`
  .selected {
    background: #fff;
    color: #3466ff;
    border-color: #3466ff;
    border-style: double;
  }
`;

const AoScreen = () => {

  const [playerName, setPlayerName] = useState('');
  const [isPlayerName, setIsPlayerName] = useState(false);
  const [isSenshu, setIsSenshu] = useState(false);
  const [aoScore, setAoScore] = useState(0);
  const [aoPunishments, setAoPunishments] = useState([{ name: 'C1', selected: false }, { name: 'C2', selected: false }, { name: 'C3', selected: false }, { name: 'HC', selected: false }, { name: 'H', selected: false }]);

  const handlePunishments = (index) => {
    setAoPunishments(() => aoPunishments.map((punishment, idx) => index >= idx ? { ...punishment, selected: true } : { ...punishment, selected: false }));
  };

  return (
    <AoScreenContainer>
      <AoHeaderContainer>
        {!isPlayerName ? 
          <AoText>AO( <AoInputText value={playerName} onChange={(e) => setPlayerName(e.target.value)} type="text" /><AoDoneBtn onClick={() => setIsPlayerName(true)}>Done</AoDoneBtn> )</AoText> : 
          <AoText>{playerName ? <span>AO({playerName})</span> : <span>AO</span>}</AoText>
        }
      </AoHeaderContainer>
      <AoScoreText>{aoScore}</AoScoreText>
      <ScoreButtonContainer>
        <ScoreButton onClick={() => aoScore > 0 && setAoScore(aoScore - 1)}>-</ScoreButton>
        <ScoreButton onClick={() => setAoScore(aoScore + 1)}>Yuko</ScoreButton>
        <ScoreButton onClick={() => setAoScore(aoScore + 2)}>Waza-ari</ScoreButton>
        <ScoreButton onClick={() => setAoScore(aoScore + 3)}>Ippon</ScoreButton>
        <ScoreButton onClick={() => setAoScore(aoScore + 1)}>+</ScoreButton>
      </ScoreButtonContainer>
      <PunishmentButtonContainer>
        {
          aoPunishments.map((punishment, index) => <PunishmentButton key={index} onClick={() => handlePunishments(index)} className={`${punishment?.selected ? 'selected' : ''}`}>{punishment?.name}</PunishmentButton>)
        }
      </PunishmentButtonContainer>
      <SenshuButton onClick={() => setIsSenshu(!isSenshu)} className={`${isSenshu ? 'senshuSelected': ''}`}>SENSHU</SenshuButton>
    </AoScreenContainer>
  );
}

export default AoScreen;