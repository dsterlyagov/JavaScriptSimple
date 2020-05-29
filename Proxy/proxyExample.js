const withDefaultValue = (target, defaultValue=0) =>{
    return new Proxy(target, {
        get: (obj, prop) =>(prop in obj ? obj[prop] : defaultValue)
    })
};

const position = withDefaultValue({
    x: 24,
    y: 42
},0)


