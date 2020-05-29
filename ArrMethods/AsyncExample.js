const resolveAfter2Seconds = (x) => {
    return new Promise((resolve) => setTimeout(()=> resolve(x), 2000));
};

const add1 = async (x) => {
    const a = resolveAfter2Seconds(20);
    const b = resolveAfter2Seconds(30);
    return x + await a + await b;
};

add1(10).then(v => console.log(v));

const add2 = async (x) =>{
    const a = await resolveAfter2Seconds(20);
    const b = await resolveAfter2Seconds(30);
    return x + a + b;
};

add2(10).then(v=>console.log(v));
