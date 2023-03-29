import { useEffect, useState } from "react";
import { gitHubUserApi } from "../../../../services/ApiServices";
import { SearchTitleAndBody } from "../../../../utils/SearchTitleAndBody";
import { PostCard } from "../PostCard/PostCard";
import { PostGrupoProps } from "./@types";
import { Container, HeaderSeach, InputSearch, CardPost } from "./styled";

export function PostGroup() {
  const query = "repo:montanari2019/github-blog";
  const [issues, setIssues] = useState<PostGrupoProps[]>([]);
  const [search, setSearch] = useState("");


  const searchFilterIssue: PostGrupoProps[] =
  search.length > 0 ? SearchTitleAndBody(issues, search) : [];

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
        onChange={(event) => setSearch(event.target.value)}
      />

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
