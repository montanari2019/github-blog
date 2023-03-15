import {
  Container,
  ParagraphContent,
  CodeSpan,
  VariavelType,
  ResultIten,
  ComentCode,
  CodePost,
} from "./styled";

{
  /* <Code>: Define o fragmento de código
<var>: Explica variáveis
<samp> : Lança a saída do computador
<kbd> : Ajuda a exibir a entrada do teclado */
}

export function PostDetails() {
  return (
    <Container>
      <ParagraphContent>
        <p>
          <strong>
            Programming languages all have built-in data structures, but these
            often differ from one language to another.
          </strong>{" "}
          This article attempts to list the built-in data structures available
          in JavaScript and what properties they have. These can be used to
          build other data structures. Wherever possible, comparisons with other
          languages are drawn.
        </p>

        <br />

        <a href="#">Dynamic typing</a>

        <p>
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned) values of all
          types:
        </p>
      </ParagraphContent>

      <CodePost>
        <pre>
          <code>
            <CodeSpan>
              <VariavelType>let</VariavelType> foo ={" "}
              <ResultIten>42;</ResultIten>{" "}
              <ComentCode>// foo is now a number </ComentCode>
            </CodeSpan>

            <CodeSpan>
              foo = <ResultIten>‘bar’</ResultIten>;{" "}
              <ComentCode>// foo is now a string </ComentCode>
            </CodeSpan>

            <CodeSpan>
              foo =<ResultIten>true</ResultIten>;{" "}
              <ComentCode>// foo is now a boolean</ComentCode>
            </CodeSpan>
          </code>
        </pre>
      </CodePost>
    </Container>
  );
}
