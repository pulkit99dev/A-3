{
    let createPost = function(){
        let newPostForm = $('#new-post-form');

        newPostForm.submit(function(e){
            e.preventDefault();

        $.ajax({
            type : 'post',
            url : '/posts/create',
            data : newPostForm.serialize(),
            success : function(data){
                let newPost = newPostDom(data.data.post);
                $('#post-list-container>ul').prepend(newPost)
            }, error: function(error){
                console.log(error.responseText)
            }

        })
        })
    }

    //dom
    let newPostDom = function(post){
        return $(`
                    <li id="post-${post._id}">
                <p>${post.content}</p>
                <br>
                <small>${post.user.name}</small>
                
                <p><a class="delete-post-button" href="/posts/destroy/${post.id}">Delete</a></p>
                

            <div>
                
                    <form action="/comments/create" method="POST">
                        <input type="text" name="content" placeholder="Type Here to add comment..." required>
                        <input type="hidden" name="post" value="${post._id}" >
                        <input type="submit" value="Add Comment">
                    </form>
                
                
                <div class="post-comments">
                    <ul id="post-comments-${post._id}">
                    </ul>
                </div>

            </div>

            </li>
                    `)
    }

    createPost();
}