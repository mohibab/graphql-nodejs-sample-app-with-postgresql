const {userList, post, followers} = require('./data')

module.exports = {
    getUser: function (params){
        console.log(params);
        let result = userList.filter(item => item.id == params.id)
        return result[0];
    },
    getPost: function (params){
        let result = post.filter(item => item.id == params.id)
        return result[0];   
    },
    getFollowers: function (params){
        let result = followers.filter(item => item.id == params.id)
        return result[0];
    }
}