$(document).ready(() => {
    $.get("/api/posts", { followingonly: true }, results => {
        outputPosts(results, $(".postsContainer"));
    })
})

