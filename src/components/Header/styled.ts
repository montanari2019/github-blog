import styled from "styled-components";

import coverBg from "../../assets/cover-bg.svg";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme["base-profile"]};
`;

export const HeaderBg = styled.div`
  background-image: url(${coverBg});

  height: 296px;

  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DivImg = styled.div``;

export const ImgLog = styled.img`
    margin-top: 4rem;
  width: 148px;
  height: 98px;
`;
