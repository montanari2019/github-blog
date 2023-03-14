import { PostCard } from "../PostCard/PostCard";
import { Container, HeaderSeach, InputSearch, CardPost } from "./styled";

export function PostGroup(){
    return(
        <Container>
            <HeaderSeach>
                <strong>Publicações</strong>
                <p>6 Publicações</p>
            </HeaderSeach>

            <InputSearch type="text" placeholder="Buscar conteúdo"/> 

            <CardPost>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
            </CardPost>

        </Container>
    )
}