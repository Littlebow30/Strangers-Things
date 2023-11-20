const COHORT_NAME = '2306-FTB-MT-WEB-PT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export const updatePost = async (title, description, location, price, deliver, id) => {
    try{
        const response = await fetch(`${BASE_URL}/posts/postID/messages`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                post: {
                    title, 
                    description, 
                    location, 
                    price, 
                    deliver, 
                    id
                }
            })
        });
        const result = await response.json();
        return result;
    } catch(err){
        console.log("There was an error updating your post. Please try again.")
    }
}

module.exports(
    updatePost,
)