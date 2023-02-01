import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #000;
`;

const FooterText = styled.p`
  color: #fff;
  font-weight: bold;
`;

const GkmaFooter = () => {
  return (
    <FooterContainer>
      <FooterText>© 2023 GKMA. All Rights Reserved.</FooterText>
    </FooterContainer>
  );
};

export default GkmaFooter;
