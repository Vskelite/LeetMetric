document.addEventListener('DOMContentLoaded', function(){
    const searchButton = document.querySelector("submit-btn");
    const userNameInput = document.getElementById("username");
    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgreeCircle = document.querySelector(".medium-progrss");
    const hardProgressCircle = document.querySelector(".hard-progress");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStatsContainer = document.querySelector(".stats-cards");


    function validateUsername(username){
        if(username.trim() === ""){
            alert("Usernme should not br empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(username);
        if(isMatching){
            alert("Invalid username");
        }
        return isMatching;
    }

    async function fetchUserDetails(username) {
        const url = `https://leetcode-stats-api.herokuapp.com/${username}}`
        try{

            searchButton.textContent = "Searching...";
            searchButton.disabled = true;
            const response = await fetch(url);
            if(!response.ok){
                throw new Error("Unable to fetch the User details");
            }

            const data = await response.json();
            console.log("Logging data: ", data);
        }
        catch(error){

        }
        finally{

        }
    }
    searchButton.addEventListener("click", function(){
        const username = userNameInput.value;
        console.log("Logging username: ", username);
        if(validateUsername(username)){
             fetchUserDetails(username);
        }
    })
})