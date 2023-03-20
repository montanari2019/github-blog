import { useNavigate } from "react-router-dom";
import { PostCardProps } from "./@types";
import { ContainerCard, ParagraphContent, TitileDisplay } from "./styled";

import { format, formatDistanceToNow } from "date-fns";

import ptBR from "date-fns/locale/pt-BR";
import { ReliceBodyIssue } from "../../../../utils/ReliceBodyIssue";
import { dateFormat } from "../../../../utils/formatDateRelativeToNow";


export function PostCard({body, dateCreate, title, numberIssue}:PostCardProps ) {
  
  const history = useNavigate()

 const { publisherdDateFormatted, publisherdDateRelativeToNow } = dateFormat(dateCreate)

  function routerPost(){
    history(`/post/${numberIssue}`)
  }


  return (
    <ContainerCard onClick={routerPost}>
      <TitileDisplay>
        <h2>{title}</h2>
        <time  title={publisherdDateFormatted} dateTime={new Date(dateCreate).toISOString()}>
          {publisherdDateRelativeToNow}
        </time>
      </TitileDisplay>

      <ParagraphContent>
        {ReliceBodyIssue(body)}
      </ParagraphContent>
    </ContainerCard>
  );
}
