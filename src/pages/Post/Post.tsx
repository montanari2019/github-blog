import { PostDetails } from "./components/PostDetails/PostDetails";
import { PostInfo } from "./components/PostInfo/PostInfo";
import { ContainerPost } from "./styled";

export function Post() {
    return (
        <ContainerPost>
           
            <PostInfo/>
            <PostDetails/>
        </ContainerPost>
    )
}