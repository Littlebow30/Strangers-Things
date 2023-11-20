const COHORT_NAME = '2306-FTB-MT-WEB-PT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export const deletePost = async (postId) => {
    try{
        const response = await fetch(`${BASE_URL}/posts/postID/`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message
            })
        });
        const result = await response.json();
        return result;
    } catch(err){
        console.log("There was an error deleteing your post. Please try again.")
    }
}

module.exports(
    deletePost,
)