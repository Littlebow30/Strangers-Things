const COHORT_NAME = '2306-FTB-MT-WEB-PT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export const createUser = async (userName, password) => {
    try{
        const response = await fetch(`${BASE_URL}/login/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {
                    userName: userName,
                    password: password,
                }
            })
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