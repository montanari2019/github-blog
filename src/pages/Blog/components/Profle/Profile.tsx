
import { BioParagraph, CardIcon, CardInfo, CardTextProfile, CardTitle, GitButton, ImgProfile, ProfileContainer } from "./styled";
import { CheckSquareOffset } from "phosphor-react"

import gitLogo from "../../../../assets/git-hub.svg";
import predioLogo from "../../../../assets/predio.svg";
import pessoasLogo from "../../../../assets/pessoas.svg";
import { useEffect, useState } from "react";
import { gitHubUserApi } from "../../../../services/ApiServices";
import { ProfileProps } from "./@types";

export function Profile() {

  const [userProfile, setUserProfile] = useState<ProfileProps>()


  const nameUser = "montanari2019"

  async function LoadUser(){

    const { data, status } = await gitHubUserApi.get(`users/${nameUser}`)
    if(status === 200){
      setUserProfile(data)
      // console.log(data)
    }else{
      console.log("Erro na requisição")
    }
  }

  useEffect(()=>{
    LoadUser()
  },[])


  return (
    <ProfileContainer>
      <ImgProfile src={userProfile?.avatar_url} />
      <CardTextProfile>

        <CardTitle>
          <strong>{userProfile?.name}</strong>
          <GitButton target="_blank"  href={userProfile?.html_url}>GitHub 
          <CheckSquareOffset size={15} />
          
          </GitButton>
        </CardTitle>
        <BioParagraph>
         {userProfile?.bio}
          
        </BioParagraph>

        <CardInfo>
          <CardIcon>
            <img src={gitLogo} />
            <p>{userProfile?.login}</p>
          </CardIcon>

          <CardIcon>
            <img src={predioLogo} />
            <p>{userProfile?.company}</p>
          </CardIcon>

          <CardIcon>
            <img src={pessoasLogo} />
            <p>{userProfile?.followers} seguidores</p>
          </CardIcon>
        </CardInfo>
      </CardTextProfile>
    </ProfileContainer>
  );
}
