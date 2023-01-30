import React, { useState } from 'react';
import styled from 'styled-components';

const AkaScreenContainer = styled.div`
  
`;

const AkaHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .senshuSelected {
    background: #fff;
    color: #fe0000;
    border-color: #fe0000;
  }
`;

const AkaText = styled.h3`
  color: #fff;
  font-size: 50px;
  letter-spacing: 5px;
  margin: 15px 0 0 0;
`;

const SenshuButton = styled.button`
  font-size: 20px;
  margin: 15px 0 0 15px;
  background: #fe0000;
  color: #fff;
  border-color: #fff;
  border-style: double;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #fe0000;
    border-color: #fe0000; 
  }
`;

const AkaScoreText = styled.p`
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
  background: #fe0000;
  color: #fff;
  border-color: #fff;
  border-style: double;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #fe0000;
    border-color: #fe0000; 
  }
`;

const PunishmentButton = styled.button`
  width: auto;
  margin: 10px 7.5px;
  padding: 10px 20px;
  font-size: 20px;
  background: #fe0000;
  color: #fff;
  border-color: #fff;
  border-style: dotted;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #fe0000;
    border-color: #fe0000; 
  }
`;

const PunishmentButtonContainer = styled.div`
  .selected {
    background: #fff;
    color: #fe0000;
    border-color: #fe0000;
    border-style: double;
  }
`;

const AkaScreen = () => {

  console.log('aka screen rendered');
  const [isSenshu, setIsSenshu] = useState(false);
  const [akaScore, setAkaScore] = useState(0);
  const [akaPunishments, setAkaPunishments] = useState([{ name: 'C1', selected: false }, { name: 'C2', selected: false }, { name: 'C3', selected: false }, { name: 'HC', selected: false }, { name: 'H', selected: false }]);

  const handlePunishments = (index) => {
    setAkaPunishments(() => akaPunishments.map((punishment, idx) => index === idx ? { ...punishment, selected: !punishment?.selected } : index !== idx && punishment?.selected ? { ...punishment, selected: false } : punishment));
  };

  return (
    <AkaScreenContainer>
      <AkaHeaderContainer>
        <AkaText>AKA</AkaText>
        <SenshuButton onClick={() => setIsSenshu(!isSenshu)} className={`${isSenshu ? 'senshuSelected': ''}`}>SENSHU</SenshuButton>
      </AkaHeaderContainer>
      <AkaScoreText>{akaScore}</AkaScoreText>
      <ScoreButtonContainer>
        <ScoreButton onClick={() => akaScore > 0 && setAkaScore(akaScore - 1)}>-</ScoreButton>
        <ScoreButton onClick={() => setAkaScore(akaScore + 1)}>Yuko</ScoreButton>
        <ScoreButton onClick={() => setAkaScore(akaScore + 2)}>Waza-ari</ScoreButton>
        <ScoreButton onClick={() => setAkaScore(akaScore + 3)}>Ippon</ScoreButton>
        <ScoreButton onClick={() => setAkaScore(akaScore + 1)}>+</ScoreButton>
      </ScoreButtonContainer>
      <PunishmentButtonContainer>
        {
          akaPunishments.map((punishment, index) => <PunishmentButton key={index} onClick={() => handlePunishments(index)} className={`${punishment?.selected ? 'selected' : ''}`}>{punishment?.name}</PunishmentButton>)
        }
      </PunishmentButtonContainer>
    </AkaScreenContainer>
  );
}

export default AkaScreen;