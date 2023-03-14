import {  CalendarBlank,  CaretLeft,  ChatCircle,  CheckSquareOffset,} from "phosphor-react";
import {  Container,  HeaderPostInfo,  CardInfo,  IconsCard,  HeaderItem,  IconsInfo} from "./styled";
import { useNavigate } from "react-router-dom";

import gitLogo from "../../../../assets/git-hub.svg";

export function PostInfo() {
    const history = useNavigate()

    function routerHome(){
        history("/")
    }
  return (
    <Container>
      <HeaderPostInfo>
        <HeaderItem onClick={routerHome}>
          <CaretLeft size={15} weight="light" />
          <strong>Voltar</strong>
        </HeaderItem>

        <HeaderItem>
          <strong>Ver no github</strong>
          <CheckSquareOffset size={15} />
        </HeaderItem>
      </HeaderPostInfo>

      <CardInfo>
        <h1>JavaScript data types and data structures</h1>

        <IconsInfo>
          <IconsCard>
            <img src={gitLogo} />
            <p>montanari2019</p>
          </IconsCard>

          <IconsCard>
            <CalendarBlank color="#3A536B" size={18} weight="fill" />
            <p>Há 1 dia</p>
          </IconsCard>

          <IconsCard>
            <ChatCircle color="#3A536B" size={18} weight="fill" />
            <p>5 comentários</p>
          </IconsCard>
        </IconsInfo>
      </CardInfo>
    </Container>
  );
}
