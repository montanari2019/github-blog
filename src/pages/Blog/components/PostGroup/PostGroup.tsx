import { ChangeEvent, useEffect, useState } from "react";
import { gitHubUserApi } from "../../../../services/ApiServices";
import { SearchTitleAndBody } from "../../../../utils/SearchTitleAndBody";
import { PostCard } from "../PostCard/PostCard";
import { PostGrupoProps } from "./@types";
import { Container, HeaderSeach, InputSearch, CardPost } from "./styled";
import ReactGA from "react-ga"
import { useLocation } from "react-router-dom";

export function PostGroup() {

  const location = useLocation()

  useEffect(()=>{
    ReactGA.pageview(location.pathname, [] ,"Pagina inicial de posts")
  },[])
  const query = "repo:montanari2019/github-blog";
  const [issues, setIssues] = useState<PostGrupoProps[]>([]);
  const [search, setSearch] = useState("");


  const searchFilterIssue: PostGrupoProps[] =
  search.length > 0 ? SearchTitleAndBody(issues, search) : [];
  

  function handleSearch(event: ChangeEvent<HTMLInputElement>){
    setSearch(event.target.value)

    ReactGA.event({
      category: 'Pesquisa',
      action: 'Pesquisar issue no blog',
      label: 'search issue'
    });

  }

  function handleClick() {
    console.log("ReactGA event")


    ReactGA.event({
      category: 'Botão',
      action: 'Clique',
      label: 'Botão de exemplo',
      value: 1
    });
  }

  async function LoadIssues(query: string) {
    const { data, status } = await gitHubUserApi.get("search/issues", {
      params: {
        q: query,
      },
    });

    if (status === 200) {
      const { items } = data;
      setIssues(items);
    }
  }

  useEffect(() => {
    if(issues.length === 0){
      LoadIssues(query);
    }
  }, [issues, query]);

  return (
    <Container>
      
      <HeaderSeach>
        <strong>Publicações</strong>
        <p>{searchFilterIssue.length > 0 ? searchFilterIssue.length : issues.length} Publicações</p>
      </HeaderSeach>

      <InputSearch
        type="text"
        placeholder="Buscar conteúdo"
        onChange={handleSearch}
      />

      {/* <button onClick={handleClick} type="button">Testando google analytics</button> */}

      {search.length === 0 ? (
        
          <CardPost>
            {issues.map((index) => {
              return (
                <PostCard
                  key={index.id}
                  numberIssue={index.number}
                  body={index.body}
                  dateCreate={index.created_at}
                  title={index.title}
                />
              );
            })}
          </CardPost>
        
      ) : (
        <CardPost>
          {searchFilterIssue.map((index) => {
            return (
              <PostCard
                key={index.id}
                numberIssue={index.number}
                body={index.body}
                dateCreate={index.created_at}
                title={index.title}
              />
            );
          })}
        </CardPost>
      )}
    </Container>
  );
}
