module.exports = {
    getUser: function (){
        return({
            id: "1",
            name: "Test",
            address:{
                city: 'Dhaka',
                street:"19/A1",
                post: '15210'
            }
        })
    },
    getPost: function (){
        return([
            {
                id: '1',
                title: 'Post 1',
                content: 'Hello World',
                comment: 'nice Post'
            },
            {
                id: '2',
                title: 'Post 2',
                content: 'Hello GraphGL',
                comment: 'Nice Post'
            }
        ])
    },
    getFollowers: function (){
        return([
            {
                id: '1',
                name: 'Admin',
            }
        ])
    }
}