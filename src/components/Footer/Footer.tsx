import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react"
import { Container, Desenvolvedor, LinkSocial, LogosFooter } from "./styled"

export function Footer(){
    const anoAtual = new Date().getFullYear()
    return(
        <Container>
            <LogosFooter >
                <LinkSocial  href="https://www.instagram.com/ikaro.montanari/" target="_blank" type="button">
                    <InstagramLogo size={30} />
                </LinkSocial>
                <LinkSocial href="https://www.linkedin.com/in/ikaro-montanari-5aa120208/"  target="_blank"type="button">
                    <LinkedinLogo size={30} />
                </LinkSocial>
                <LinkSocial href="https://github.com/montanari2019"  target="_blank"type="button">
                    <GithubLogo size={30} />
                </LinkSocial>
            </LogosFooter>

            <Desenvolvedor >
                <strong>
                    Desenvolvido por Ikaro Monatanri
                </strong>
                <p>{anoAtual}</p>
            </Desenvolvedor>
            
        </Container>
    )
}