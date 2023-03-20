import { useEffect, useState } from "react";
import { gitHubUserApi } from "../../../../services/ApiServices";
import { PostCard } from "../PostCard/PostCard";
import { PostGrupoProps } from "./@types";
import { Container, HeaderSeach, InputSearch, CardPost } from "./styled";

export function PostGroup(){

    const [ issues, setIssues]= useState<PostGrupoProps[]>([])


    const query = "repo:montanari2019/github-blog"

    async function LoadIssues(query: string) {
        const { data, status} = await gitHubUserApi.get("search/issues",{
            params:{
                q: query
            }
        })

        if(status === 200){
            const { items } = data
            setIssues(items)
        }


        
    }

    useEffect(()=>{

        LoadIssues(query)

    },[])

    return(
        <Container>
            <HeaderSeach>
                <strong>Publicações</strong>
                <p>{issues.length} Publicações</p>
            </HeaderSeach>

            <InputSearch type="text" placeholder="Buscar conteúdo"/> 

            <CardPost>
                {
                    issues.map((index)=>{
                        return(
                            < PostCard key={index.id} numberIssue={index.number} body={index.body} dateCreate={index.created_at} title={index.title}/>
                        )
                    })
                }
            </CardPost>

        </Container>
    )
}