// promises are a much cleaner way to write ayns functions
// function doStuff(data, callack) {
//     callack('done');
// }

// doStuff('something',(result)=> console.log(result));

function doStuff(data) {
    return new Promise((resolve, reject) => {
        var successMessage = {
            status: "Sucess",
            message: "All good, working well"
        };
        var failureMessage = {
            status: "failure",
            message: "Oops something went wrong"
        };
        if (typeof data === "boolean" && data === true)
            resolve(successMessage);
        else
            reject(failureMessage);
    })
}

doStuff(true).then((successMessage) => {
        console.log(successMessage);
    }, (failureMessage) => {
        console.log(failureMessage);
    }
);

//chaining promises
doStuff(true).then(
    () => {
        console.log("first do stuff recieved");
        return doStuff(false);
    }
).then(
    ()=>{
        console.log("Second do stuff recieved");
    }
).catch(
    ()=>{
        console.log("an error occured");
    }
);


