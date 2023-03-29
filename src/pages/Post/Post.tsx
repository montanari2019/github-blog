import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gitHubUserApi } from "../../services/ApiServices";
import { DecodedBase64 } from "../../utils/Base64";
import { PostProsp } from "./@types";
import { PostDetails } from "./components/PostDetails/PostDetails";
import { PostInfo } from "./components/PostInfo/PostInfo";
import { ContainerPost } from "./styled";

export function Post() {
  const { number_issue } = useParams();

  const numberIssueDecoded = DecodedBase64(number_issue)
  const [issue, setIssue] = useState<PostProsp>();

  const repository = "github-blog";
  const nameUser = "montanari2019";

  async function LoadIssue() {
    const { status, data } = await gitHubUserApi.get(
      `repos/${nameUser}/${repository}/issues/${numberIssueDecoded}`
    );
    if (status === 200) {
      setIssue(data);
    } else {
      console.log("Erro na requisição");
    }
  }

  useEffect(() => {
    LoadIssue();
  }, []);

  return (
    <ContainerPost>
      {issue !== undefined ? 
      (
        <div>
          <PostInfo
            title={issue.title}
            nameUser={issue.user.login}
            createdAt={issue.created_at}
            comments={issue.comments}
            urlGitIssue={issue.html_url}
          />
          <PostDetails body={issue?.body} />
        </div>
      ) 
      : (
        <></>
      )}

      
    </ContainerPost>
  );
}
