import {  CalendarBlank,  CaretLeft,  ChatCircle,  CheckSquareOffset,} from "phosphor-react";
import {  Container,  HeaderPostInfo,  CardInfo,  IconsCard,  HeaderItem,  IconsInfo} from "./styled";
import { useNavigate } from "react-router-dom";

import gitLogo from "../../../../assets/git-hub.svg";
import { dateFormat } from "../../../../utils/formatDateRelativeToNow";

interface PostInfoProps{
  title: string,
  nameUser:string,
  comments: number,
  createdAt: string,
  urlGitIssue: string
}


export function PostInfo({ comments, createdAt, nameUser, title, urlGitIssue }: PostInfoProps) {

  const { publisherdDateFormatted, publisherdDateRelativeToNow } = dateFormat(createdAt)
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
          <a href={urlGitIssue} target="_blank">Ver no github</a>
          <CheckSquareOffset size={15} />
        </HeaderItem>
      </HeaderPostInfo>

      <CardInfo>
        <h1>{title}</h1>

        <IconsInfo>
          <IconsCard>
            <img src={gitLogo} />
            <p>{nameUser}</p>
          </IconsCard>

          <IconsCard>
            <CalendarBlank color="#3A536B" size={18} weight="fill" />
            <time 
              title={publisherdDateFormatted}
              dateTime={new Date(createdAt).toISOString()}
            >{publisherdDateRelativeToNow}</time>
          </IconsCard>

          <IconsCard>
            <ChatCircle color="#3A536B" size={18} weight="fill" />
            <p>{comments} comentário(s)</p>
          </IconsCard>
        </IconsInfo>
      </CardInfo>
    </Container>
  );
}
