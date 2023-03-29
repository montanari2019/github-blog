import { useNavigate } from "react-router-dom";
import { PostCardProps } from "./@types";
import { ContainerCard, ParagraphContent, TitileDisplay } from "./styled";

import { format, formatDistanceToNow } from "date-fns";

import ptBR from "date-fns/locale/pt-BR";
import { ReliceBodyIssue } from "../../../../utils/ReliceBodyIssue";
import { dateFormat } from "../../../../utils/formatDateRelativeToNow";
import { DecodedBase64, EncodedBase64 } from "../../../../utils/Base64";


export function PostCard({body, dateCreate, title, numberIssue}:PostCardProps ) {
  
  const history = useNavigate()

 const { publisherdDateFormatted, publisherdDateRelativeToNow } = dateFormat(dateCreate)

 const numberIssueEncoded = EncodedBase64(numberIssue.toLocaleString())
 

  function routerPost(){
    history(`/post/${numberIssueEncoded}`)
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
