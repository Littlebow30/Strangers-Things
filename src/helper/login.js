const COHORT_NAME = '2306-FTB-MT-WEB-PT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export const login = async (userName, password) => {
    try{
        const response = await fetch(`${BASE_URL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {
                    userName,
                    password
                }
            })
        });
        const result = await response.json();
        return re
    } catch(err){
        console.log("There was a problem logging in. Please try again.")
    }
}

module.exports(
    login
)