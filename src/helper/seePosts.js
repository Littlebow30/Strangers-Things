const COHORT_NAME = '2306-FTB-MT-WEB-PT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export const seePosts = async () => {
    try{
        const response = await fetch(`${BASE_URL}/posts`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const result = await response.json();
        return result;
    } catch(err){
        console.log("There was trouble creating user. Please try again.")
    }
}

module.exports(
    createUser
)