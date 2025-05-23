// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables, Async/Await

// abstract into functions

// maybe from a form 
const getDataFromForm = () => {
   const requestObj = {
    firstName: "Bruce",
    lastName: "Lee",
    categories: ["nerdy"]
   };
   return requestObj;
}

const buildRequestUrl = (requestdata) => {
    return `http://api.icndb.com/jokes/random?firstName=${requestdata.firstName}&lastName=${requestdata.lastName}& limitTo={requestData.categories}`;
}

const requestJoke = async (url) => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const joke = jsonResponse.value.joke;
    postJokeToPage(joke);
}

const postJokeToPage = (joke) => {
    console.log(joke);
}

// Procedural "workflow" function
const processJokeRequest = async () => {
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestJoke(requestUrl);
    console.log("finished!");
}

processJokeRequest();
