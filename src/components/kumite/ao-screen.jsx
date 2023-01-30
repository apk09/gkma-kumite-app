import React, { useState } from 'react';
import styled from 'styled-components';

const AoScreenContainer = styled.div`
  
`;

const AoHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .senshuSelected {
    background: #fff;
    color: #3466ff;
    border-color: #3466ff;
  }
`;

const AoText = styled.h3`
  color: #fff;
  font-size: 50px;
  letter-spacing: 5px;
  margin: 15px 0 0 0;
`;

const SenshuButton = styled.button`
  font-size: 20px;
  margin: 15px 0 0 15px;
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

const AoScoreText = styled.p`
  color: #fff;
  font-size: 225px;
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

  console.log('ao screen rendered');
  const [isSenshu, setIsSenshu] = useState(false);
  const [aoScore, setAoScore] = useState(0);
  const [aoPunishments, setAoPunishments] = useState([{ name: 'C1', selected: false }, { name: 'C2', selected: false }, { name: 'C3', selected: false }, { name: 'HC', selected: false }, { name: 'H', selected: false }]);

  const handlePunishments = (index) => {
    setAoPunishments(() => aoPunishments.map((punishment, idx) => index === idx ? { ...punishment, selected: !punishment?.selected } : index !== idx && punishment?.selected ? { ...punishment, selected: false } : punishment));
  };

  return (
    <AoScreenContainer>
      <AoHeaderContainer>
        <AoText>AO</AoText>
        <SenshuButton onClick={() => setIsSenshu(!isSenshu)} className={`${isSenshu ? 'senshuSelected': ''}`}>SENSHU</SenshuButton>
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
    </AoScreenContainer>
  );
}

export default AoScreen;