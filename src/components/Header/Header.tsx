import logoGitBlog from "../../assets/git-blog-logo.svg";

import coverBg from "../../assets/cover-bg.svg";

import { DivImg, HeaderBg, HeaderContainer, ImgLog } from "./styled";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderBg>
        <DivImg>
          <ImgLog src={logoGitBlog} />
        </DivImg>
      </HeaderBg>
    </HeaderContainer>
  );
}
