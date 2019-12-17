function creatpost(post) {
  let name = post.username;
  let comment = post.message;
  let Imgsource = post.image_url;
  //   create new scope for new post
  const newpost = document.createElement("article");
  newpost.classList.add("singlepost");
  const newdiv = document.createElement("div");
  newdiv.appendChild(newpost);
  //  name space bar for user name
  const namebar = document.createElement("header");
  namebar.classList.add("nameheader");
  const username_bar = document.createElement("header");
  username_bar.classList.add("username");
  const account = document.createElement("div");
  account.classList.add("account_name");
  const username = document.createElement("p");
  username.classList.add("post_username");
  username.innerHTML = name;
  namebar.appendChild(username_bar);
  username_bar.appendChild(account);
  account.appendChild(username);
  // materical icon space
  const logobar = document.createElement("div");
  logobar.classList.add("socialmedia_icon");
  const icon = document.createElement("i");
  icon.classList.add("material-icons", "fa");
  icon.innerHTML = "favorite";
  const icon1 = document.createElement("i");
  icon1.classList.add("material-icons");
  icon1.innerHTML = "comment";
  const icon2 = document.createElement("i");
  icon2.classList.add("material-icons");
  icon2.innerHTML = "share";
  username_bar.appendChild(logobar);
  logobar.appendChild(icon);
  logobar.appendChild(icon1);
  logobar.appendChild(icon2);
  icon.addEventListener("click", e => {
    e.preventDefault();
    icon.classList.toggle("colorred");
    likedPost(post.id);
  });
  //Img space
  const figure = document.createElement("figure");
  figure.classList.add("img_space");
  const img = document.createElement("img");
  img.classList.add("IMGpost");
  img.src = Imgsource;
  figure.appendChild(img);
  const img_caption = document.createElement("section");
  img_caption.classList.add("caption");
  const figurecaption = document.createElement("figcaption");
  figurecaption.classList.add("IMGcaption");
  figurecaption.innerHTML = comment;
  img_caption.appendChild(figurecaption);
  figure.appendChild(img_caption);
  //assemble area
  newpost.appendChild(namebar);
  newpost.appendChild(figure);
  var comment_review = document.createElement("section");
  comment_review.classList.add("comment_review");
  var comments = document.createElement("section");
  comments.classList.add("comments");
  for (const PostComment of post.comments) {
    let usercomment = createNewComment(PostComment.message);
    comments.appendChild(usercomment);
    comment_review.appendChild(comments);
  }
  //comment bar
  const submission = document.createElement("section");
  submission.classList.add("submission_area");
  const inputform = document.createElement("form");
  inputform.classList.add("comment-form");
  inputform.innerHTML =
    '<input id="comment-message" class="comment-input" type="text" name="comment" placeholder="Add a comment..." required>\n    <button class="postcomments">Post</button>';
  inputform.addEventListener("submit", function(event) {
    event.preventDefault();
    const message = inputform.querySelector(".comment-input").value;
    createComment(post.id, message);
  });
  submission.appendChild(inputform);
  newpost.appendChild(comment_review);
  newpost.appendChild(submission);
  return newdiv;
}

function likedPost(e) {
  console.log(`likePost ${e}`);
}

function createNewComment(message) {
  const usercomment = document.createElement("div");
  usercomment.classList.add("usercomment");
  const account_box = document.createElement("i");
  account_box.classList.add("material-icons");
  account_box.innerHTML = "account_box";
  const comment_text = document.createElement("p");
  comment_text.classList.add("comment_text");
  comment_text.innerHTML = message;
  usercomment.appendChild(account_box);
  usercomment.appendChild(comment_text);
  return usercomment;
}

createComment = (e, t) => {
  console.log({ message: t, postId: e });
  fetch(`https://instasam-one.herokuapp.com/api/insta_posts/${e}/comments`, {
    method: "post",
    body: JSON.stringify({ message: t, postId: e }),
    headers: { "Content-Type": "application/json" }
  })
    .then(status => (status.ok ? fetchAllPosts() : console.log("error")))
    .then(() => {
      console.log("ok");
    })
    .catch(err => {
      console.log(err);
    });
};
createNewPost = (name, comment, Imgsource) => {
  const newPost = {
    username: name,
    message: comment,
    image_url: Imgsource,
    comments: []
  };
  fetch("https://instasam-one.herokuapp.com/api/insta_posts", {
    method: "post",
    body: JSON.stringify({ post: newPost }),
    headers: { "Content-Type": "application/json" }
  })
    .then(status => (status.ok ? fetchAllPosts() : console.log("error")))
    .then(() => {
      console.log("ok");
    })
    .catch(err => {
      console.log("error", err);
    });
};

function loadPosts(post) {
  const postContainer = document.querySelector("#all-post");
  postContainer.classList.add("control-div");
  postContainer.innerHTML = "";
  posts = post.reverse();
  posts.forEach(x => {
    let e = creatpost(x);
    postContainer.appendChild(e);
  });
}

function fetchAllPosts() {
  fetch("https://instasam-one.herokuapp.com/api/insta_posts")
    .then(res => res.json())
    .then(post => {
      loadPosts(post);
    })
    .catch(err => {
      console.log(err);
    });
}

document.querySelector("#new-post").addEventListener("submit", event => {
  event.preventDefault();
  createNewPost(
    document.querySelector("#name").value,
    document.querySelector("#comment").value,
    document.querySelector("#imgURL").value
  );
}),
  fetchAllPosts();

document.querySelector(".show").addEventListener("click", e => {
  e.preventDefault();
  let x = document.querySelector(".Inputform");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});
