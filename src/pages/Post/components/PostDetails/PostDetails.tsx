import {
  Container,
  ParagraphContent,
  CodeSpan,
  VariavelType,
  ResultIten,
  ComentCode,
  CodePost,
} from "./styled";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw"
import remarkHighlightjs from "remark-highlight.js";
import remarkBreaks from "remark-breaks";
import remarkFormat from "remark-code-frontmatter"

{
  /* <Code>: Define o fragmento de código
<var>: Explica variáveis
<samp> : Lança a saída do computador
<kbd> : Ajuda a exibir a entrada do teclado */
}

interface PostBodyPropd{
  body: string
}

export function PostDetails({ body }: PostBodyPropd) {
  return (
    <Container>
      <ParagraphContent>
        <ReactMarkdown 
           
          children={body}
          remarkPlugins={[remarkBreaks, remarkHighlightjs, remarkFormat]}
          rehypePlugins={[rehypeRaw]}
        />
        
      </ParagraphContent>

     
    </Container>
  );
}
