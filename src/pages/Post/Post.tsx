import { PostInfo } from "./components/PostInfo/PostInfo";
import { ContainerPost } from "./styled";

export function Post() {
    return (
        <ContainerPost>
            <h1>Tela Post</h1>
            <PostInfo/>
        </ContainerPost>
    )
}