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

doStuff(false).then((successMessage) => {
        console.log(successMessage);
    }, (failureMessage) => {
        console.log(failureMessage);
    }
);
