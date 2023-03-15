
import { BioParagraph, CardIcon, CardInfo, CardTextProfile, CardTitle, GitButton, ImgProfile, ProfileContainer } from "./styled";
import { CheckSquareOffset } from "phosphor-react"

import gitLogo from "../../../../assets/git-hub.svg";
import predioLogo from "../../../../assets/predio.svg";
import pessoasLogo from "../../../../assets/pessoas.svg";

export function Profile() {
  return (
    <ProfileContainer>
      <ImgProfile src="https://github.com/montanari2019.png" />
      <CardTextProfile>

        <CardTitle>
          <strong>Ikaro Motanari</strong>
          <GitButton href="#">GitHub 
          <CheckSquareOffset size={15} />
          
          </GitButton>
        </CardTitle>
        <BioParagraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
          inventore nesciunt molestiae dolorum accusantium tempora vero
          
        </BioParagraph>

        <CardInfo>
          <CardIcon>
            <img src={gitLogo} />
            <p>montanari2019</p>
          </CardIcon>

          <CardIcon>
            <img src={predioLogo} />
            <p>Rocketseat</p>
          </CardIcon>

          <CardIcon>
            <img src={pessoasLogo} />
            <p>32 seguidores</p>
          </CardIcon>
        </CardInfo>
      </CardTextProfile>
    </ProfileContainer>
  );
}
