interface PostGrupoProps {
  
    body: string;
    created_at: string;
    title: string;
    updated_at: string;
    id: number,
    number: number
  }
  

export function SearchTitleAndBody(posts: PostGrupoProps[], search:string){
    
    const consultTitle:PostGrupoProps[] = posts.filter((element)=> element.title.toLowerCase().includes(search.toLowerCase()))
    // console.log("Consulta title: ", consultTitle)
    
    if(consultTitle.length === 0){
        const consultBody = posts.filter((element) => element.body.toLowerCase().includes(search.toLowerCase()))
        // console.log("Consulta boy", consultBody)

        return consultBody
    }else{
        return consultTitle

    }


}