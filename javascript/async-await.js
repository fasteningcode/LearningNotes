async function doStuff(data) {
    return new Promise(
        ((resolve, reject) => {
            setTimeout(() => {
                if (typeof data === 'number') {
                    resolve(data * data);
                } else {
                    reject("An error occured");
                }
            }, 1000)
        })
    )
}


//async function always return a promise
async function chainStuff() {
    let a = await doStuff(2);
    console.log(a);
    let b = await doStuff(a);
    console.log(b);
    let c = await doStuff(b);
    return c;
}

chainStuff().then(result => {
    console.log(result);
}).catch(error => {
    console.log("Something went wront on async-await file");
});
