# Create the HomePageController

While the REST controllers that we've already built function like processors, the `HomePageController` serves as more of a navigator—essentially, it is the entry and exit point for users. This controller is composed of `@GetMapping` annotation endpoints that help direct the flow of the API.

With that in mind, you can get started! Inside the `Controller` package, create a new class named `HomePageController`. Once you've created your new class, the code generated should resemble the following example:

```java
package com.technews.controller;

public class HomePageController {

}
```

First we need to add a class-level `@Controller` annotation to the `HomePageController` class, indicating that these controllers will control flow for the front-end user experience. We'll add the `@Controller` annotation above the class definition, so that it resembles the following example:

```java
package com.technews.controller;

import org.springframework.stereotype.Controller;

@Controller
public class HomePageController {

}
```

Next you'll add code to the class body—starting with `@Autowired`, to set up the relationships for the repositories. Remember, `@Autowired` informs Spring to scan for objects that need to be instantiated for a class or method to run. Copy and paste the following code into your `HomePageController` class body:

```java
@Autowired
UserRepository userRepository;

@Autowired
PostRepository postRepository;

@Autowired
VoteRepository voteRepository;

@Autowired
CommentRepository commentRepository;
```

Now we've included the repositories we created earlier and mapped them to objects that will be instantiated in this class when necessary. In doing so, we've laid the foundation for writing the methods that will control the front-end flow of the application!

## Create the Login and Logout Endpoints

Let's add the first method into the file. Just beneath the `CommentRepository commentRepository` line, paste the following code:

```java
@GetMapping("/login")
public String login(Model model, HttpServletRequest request) {

  if (request.getSession(false) != null) {
    return "redirect:/";
  }

  model.addAttribute("user", new User());
  return "login";
}
```

You've just added the `login` endpoint, which will allow users to log in by calling the `login.html` template when the `/login` route is hit.

There are a few things happening here. `Model model`, the first argument passed into the `login()` method, is inherited functionality from Spring—we've remapped `Model` to the `model` variable. Next, the `addAttribute()` method, built into the `Model` object, sends information to the Thymeleaf templates. In this case, `model.addAttribute()` will send a newly created user to the template as the string `user`, so that it can be displayed within the template. Once logged in, the user will be redirected to the `/` route, bringing us to the homepage.

Let's add the `logout` route now, as follows:

```java
@GetMapping("/users/logout")
public String logout(HttpServletRequest request) {
  if (request.getSession(false) != null) {
    request.getSession().invalidate();
  }
  return "redirect:/login";
}
```

When the `logout` route is hit, we check whether the session exists. If it does, we'll invalidate the session, subsequently logging out the user. We then redirect the user back to the `login` route.

## Create the Homepage Endpoint

Now that we've created `login` and `logout`, we'll create the `homepage` endpoint. Let's paste the following code under the `logout` endpoint:

```java
@GetMapping("/")
  public String homepageSetup(Model model, HttpServletRequest request) {
    User sessionUser = new User();

    if (request.getSession(false) != null) {
      sessionUser = (User) request.getSession().getAttribute("SESSION_USER");
      model.addAttribute("loggedIn", sessionUser.isLoggedIn());
    } else {
      model.addAttribute("loggedIn", false);
    }


    List<Post> postList = postRepository.findAll();
    for (Post p : postList) {
      p.setVoteCount(voteRepository.countVotesByPostId(p.getId()));
      User user = userRepository.getById(p.getUserId());
      p.setUserName(user.getUsername());
    }

    model.addAttribute("postList", postList);
    model.addAttribute("loggedIn", sessionUser.isLoggedIn());

    // "point" and "points" attributes refer to upvotes.
    model.addAttribute("point", "point");
    model.addAttribute("points", "points");

    return "homepage";
  }
  ```

This endpoint will show users the homepage, which will require it to retrieve all of the `Post` data. So inside the `if` conditional, we check that the user is logged in. Once that's confirmed, we create a variable called `postList` with a type `List<Post>`. Then we use a `for` loop to get all of the posts and populate them into the postList variable. We use `model.addAttributes()` to add these details to the User model. As a result, this route will populate and display the `homepage.html` template.

## Create the Dashboard, Single Post, and Edit Post Endpoints

Finally, let's add the rest of the `HomePageController` code. Under the `homepage` route, paste the following code for the `dashboard` route:

```java
@GetMapping("/dashboard")
  public String dashboardPageSetup(Model model, HttpServletRequest request) throws Exception {

    if (request.getSession(false) != null) {
      setupDashboardPage(model, request);
      return "dashboard";
    } else {
      model.addAttribute("user", new User());
      return "login";
    }
  }

  @GetMapping("/dashboardEmptyTitleAndLink")
  public String dashboardEmptyTitleAndLinkHandler(Model model, HttpServletRequest request) throws Exception {
    setupDashboardPage(model, request);
    model.addAttribute("notice", "To create a post the Title and Link must be populated!");
    return "dashboard";
  }


  @GetMapping("/singlePostEmptyComment/{id}")
  public String singlePostEmptyCommentHandler(@PathVariable int id, Model model, HttpServletRequest request) {
    setupSinglePostPage(id, model, request);
    model.addAttribute("notice", "To add a comment you must enter the comment in the comment text area!");
    return "single-post";
  }


  @GetMapping("/post/{id}")
  public String singlePostPageSetup(@PathVariable int id, Model model, HttpServletRequest request) {
    setupSinglePostPage(id, model, request);
    return "single-post";
  }


  @GetMapping("/editPostEmptyComment/{id}")
  public String editPostEmptyCommentHandler(@PathVariable int id, Model model, HttpServletRequest request) {
    if (request.getSession(false) != null) {
      setupEditPostPage(id, model, request);
      model.addAttribute("notice", "To add a comment you must enter the comment in the comment text area!");
      return "edit-post";
    } else {
      model.addAttribute("user", new User());
      return "login";
    }
  }


  @GetMapping("/dashboard/edit/{id}")
  public String editPostPageSetup(@PathVariable int id, Model model, HttpServletRequest request) {
    if (request.getSession(false) != null) {
      setupEditPostPage(id, model, request);
      return "edit-post";
    } else {
      model.addAttribute("user", new User());
      return "login";
    }
  }



  public Model setupDashboardPage(Model model, HttpServletRequest request) throws Exception {
    User sessionUser = (User) request.getSession().getAttribute("SESSION_USER");

    Integer userId = sessionUser.getId();

    List<Post> postList = postRepository.findAllPostsByUserId(userId);
    for (Post p : postList) {
      p.setVoteCount(voteRepository.countVotesByPostId(p.getId()));
      User user = userRepository.getById(p.getUserId());
      p.setUserName(user.getUsername());
    }

    model.addAttribute("user", sessionUser);
    model.addAttribute("postList", postList);
    model.addAttribute("loggedIn", sessionUser.isLoggedIn());
    model.addAttribute("post", new Post());

    return model;
  }


  public Model setupSinglePostPage(int id, Model model, HttpServletRequest request) {
    if (request.getSession(false) != null) {
      User sessionUser = (User) request.getSession().getAttribute("SESSION_USER");
      model.addAttribute("sessionUser", sessionUser);
      model.addAttribute("loggedIn", sessionUser.isLoggedIn());
    }

    Post post = postRepository.getById(id);
    post.setVoteCount(voteRepository.countVotesByPostId(post.getId()));

    User postUser = userRepository.getById(post.getUserId());
    post.setUserName(postUser.getUsername());

    List<Comment> commentList = commentRepository.findAllCommentsByPostId(post.getId());

    model.addAttribute("post", post);

    model.addAttribute("commentList", commentList);
    model.addAttribute("comment", new Comment());

    return model;
  }


  public Model setupEditPostPage(int id, Model model, HttpServletRequest request) {
  if (request.getSession(false) != null) {
    User sessionUser = (User) request.getSession().getAttribute("SESSION_USER");

    Post returnPost = postRepository.getById(id);
    User tempUser = userRepository.getById(returnPost.getUserId());
    returnPost.setUserName(tempUser.getUsername());
    returnPost.setVoteCount(voteRepository.countVotesByPostId(returnPost.getId()));

    List<Comment> commentList = commentRepository.findAllCommentsByPostId(returnPost.getId());

    model.addAttribute("post", returnPost);
    model.addAttribute("loggedIn", sessionUser.isLoggedIn());
    model.addAttribute("commentList", commentList);
    model.addAttribute("comment", new Comment());
    }

    return model;
  }
  ```

Don't panic at the sight of all that code! If you examine it closely, you'll find that much of it is familiar from your experience up to this point.

Let's break it down. All of the methods associated with the `dashboard` page will be called by the `setupDashboardPage()` method within this route. As the name suggests, this method helps set up the user dashboard. We first assign the value of the current user, via `SESSION_USER`, to a variable called `sessionUser`. Next we get the user's id and store that in `userId`. That comes in handy in `postRepository.findAllPostsByUserId(userId);`, when we use a `for` loop to gather all posts that have been made by the specific `userId`.

Furthermore, the `model.addAttribute()` method allows us to pass information into the Thymeleaf pages when that template is called. So in `model.addAttribute("user", sessionUser);`, we're sending the current user (`sessionUser`) to the Thymeleaf dashboard template as a variable called `user`. The same thought process applies to the rest of the three `addAttribute()` calls on Spring's `model` object.

So once we know that the user is logged in, we pass the model with all the attributes we added, along with the request data of that user, and redirect the user to their specific dashboard.

The code for `setupSinglePostPage()` and `setupEditPostPage()` closely resembles the code for setting up the dashboard page—you can review it on your own to deepen your understanding.

## Create Endpoints for Missing Information

Now what happens if the user tries to make a post but forgets to include a post title or link? We'll hit the `/dashboardEmptyTitleAndLink` endpoint, which will throw the error message "To create a post the Title and Link must be populated!"

The rest of the endpoints involving `model.addAttribute("notice", "message")` are error-handling routes. You should be able to read through them to ascertain what they do and how they help us validate information.

## Test the HomePageController Code

To check that all this code is working, navigate to IntelliJ and run your server. Once the server is running, open your browser. Navigate to `localhost:8082`, and you should be greeted with a page that resembles the following image:

![](../Images/100-homepage.png)

`The Just Tech News homepage displays the text "Thanks for visiting!" in the center, with a "login" button in the top right.`

Awesome! You can navigate to `localhost:8082/dashboard` to see the dashboard screen or `/login` to see the login screen!

Only one more controller remains for us to create before we finish this project. Let's do it!

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.