import { PostGroup } from "./components/PostGroup/PostGroup";
import { Profile } from "./components/Profle/Profile";
import { BlogContainer } from "./styled";

export function Blog(){
    return(
        <BlogContainer>
            <Profile/>

            <PostGroup/>
        </BlogContainer>
    )
}