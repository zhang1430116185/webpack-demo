// 这里必须用function   不能用箭头函数
module.exports = function(source){
    console.log(this.query.name);
    return source.replace('zyn',this.query.name);
}