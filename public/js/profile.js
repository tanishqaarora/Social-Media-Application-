$(document).ready(() => {
    loadPosts();
});

function loadPosts() {
    $.get("/api/posts", { postedBy: profileUserId, isReply: true}, results => {
        outputPosts(results, $(".postsContainer"));
    })
}