import { GithubLogo } from "phosphor-react";
import { ProfileContainer } from "./styled";



export function Profile(){
    return(
        <ProfileContainer>

            <div>
                 <img src=""/> 
                 <div>
                    <strong>Ikaro Motanari</strong>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos inventore nesciunt molestiae dolorum accusantium tempora vero corrupti? Quas voluptatem consequatur sed dolor harum quis. Similique eaque minima adipisci distinctio corrupti.</p>

                    <div>
                        <div>
                            <GithubLogo size={18}/>
                            <p>montanari2019</p>
                        </div>

                        <div>
                            <GithubLogo size={18}/>
                            <p>montanari2019</p>
                        </div>

                        <div>
                            <GithubLogo size={18}/>
                            <p>montanari2019</p>
                        </div> 
                    </div>

                 </div>
            </div>

            <h1>Meu Perfil</h1>
            
        </ProfileContainer>
    )
}