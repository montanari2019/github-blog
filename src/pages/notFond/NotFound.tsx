import { Moon } from "phosphor-react";
import { Container } from "./styled";

export function NotFoundPage() {
  return (
    <Container>
      <h1>404, Pagina Não encontrada</h1>
      <div>
        <Moon size={80} weight="thin"/>
      </div>
    </Container>
  );
}
