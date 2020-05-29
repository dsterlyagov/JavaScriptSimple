//Object
const defaults = {
    host: 'localhost',
    dbName: 'blog',
    user: 'admin'
};
const opts = {
    user: 'john',
    password: 'utopia'
}

const res = Object.assign({}, defaults, opts);
console.log(res);