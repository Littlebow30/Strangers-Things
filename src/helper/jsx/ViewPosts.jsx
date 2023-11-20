import { useEffect, useState } from "react"
export default  function ViewPosts () {
    const COHORT_NAME = '2306-FTB-MT-WEB-PT'
    const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
    const [getPosts, setGetPosts] = useState([])
        
    useEffect(() => {
        async function waitPosts() {
            const info = await fetchPost()
            const posts = info.data.posts
            setGetPosts(posts) 
            console.log(posts)
        }
        waitPosts()
    },[])


    const fetchPost = async () => {
        try { 
            const response = await fetch(`${BASE_URL}/posts`)

            const result = await response.json();
            return result
        } catch (err){
            console.log(err);
        }
    }
    
   

    return (
        <ul>
            {getPosts.map((postItems) => {
                return (
                    <div key={postItems._id}>
                        <h2>{postItems.title}</h2>
                        <h3>{postItems.location}</h3>
                    </div>
                )
            })}
        </ul>
    )

    
}
