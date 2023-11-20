const COHORT_NAME = '2306-FTB-MT-WEB-PT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export const createPost = async (title,description, location, price, deliver) => {
    try{
        const response = await fetch(`${BASE_URL}/posts/`, {
            method: "POST",
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
                }
            })
        });
        const result = await response.json();
        return result;
    } catch(err){
        console.log("There was an error creating your post. Please try again.")
    }
}

module.exports(
    createPost,
)