## Create the Post Entity Model

You're now fully equipped to create entity models on your own. You just need the proper class-level annotations as well as the instance variables and their associated annotations. Time to use these new skills, starting with the `Post` model.

Click your `model` package, and create a class called `Post`. Like `User`, this will implement the `Serializable` interface as well. Inside that class, add the following instance variables:

```java
private Integer id;
private String title;
private String postUrl;
private String userName;
private int voteCount;
private Integer userId;
private Date postedAt = new Date();
private Date updatedAt = new Date();
private List<Comment> comments;
```

Then we'll need the following code for the class-level annotations:

```java
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "post")
public class Post implements Serializable {

}
```

Now for the instance-level variables. We can start by adding `@Id` and `@GeneratedValue(strategy = GenerationType.AUTO)` to the `id` variable, as follows:

```java
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private Integer id;
```

Then we'll add the `@Transient` annotation to both the `userName` and `voteCount` variables, as follows:

```java
@Transient
private String userName;
@Transient
private int voteCount;
```

All right, now you'll tackle a data type that you haven't used before. The variables `postedAt` and `updatedAt` are both of type `Date`, which allows for a bit of extra functionality. You might recognize the value of these variables as how you invoke the `Date()` method.

To these two `Date` typed variables, we need to add three annotations—`@NotNull`, `@Temporal(TemporalType.DATE)`, and `@Column(name = "posted_at")`. The instance variables should resemble the following code:

```java
@NotNull
@Temporal(TemporalType.DATE)
@Column(name = "posted_at")
private Date postedAt = new Date();

@NotNull
@Temporal(TemporalType.DATE)
@Column(name = "updated_at")
private Date updatedAt = new Date();
```
Let's review these new annotations:

* `@NotNull` signals to the Spring Data JPA that this variable is not to be allowed to be null in the database.

* `@Temporal` allows us to use the type `Date` in the database and signals to the JPA that these fields will house data of that type.

* `@Column(name = "name_here")` designates the name of the column for the database.

Create the constructor, getters and setters, and the `equals()`, `hashCodes()`, and `toString()` methods, and your file should resemble the following example:

```java
package com.technews.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.sun.istack.NotNull;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "post")
public class Post implements Serializable {

@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private Integer id;
private String title;
private String postUrl;
@Transient
private String userName;
@Transient
private int voteCount;
private Integer userId;

@NotNull
@Temporal(TemporalType.DATE)
@Column(name = "posted_at")
private Date postedAt = new Date();

@NotNull
@Temporal(TemporalType.DATE)
@Column(name = "updated_at")
private Date updatedAt = new Date();

// Need to use FetchType.LAZY to resolve multiple bags exception
@OneToMany(mappedBy = "postId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
private List<Comment> comments;


public Post() {
}

public Post(Integer id, String title, String postUrl, int voteCount, Integer userId) {
  this.id = id;
  this.title = title;
  this.postUrl = postUrl;
  this.voteCount = voteCount;
  this.userId = userId;
}

public Integer getId() {
  return id;
}

public void setId(Integer id) {
  this.id = id;
}

public String getTitle() {
  return title;
}

public void setTitle(String title) {
  this.title = title;
}

public String getPostUrl() {
  return postUrl;
}

public void setPostUrl(String postUrl) {
  this.postUrl = postUrl;
}

public String getUserName() {
  return userName;
}

public void setUserName(String userName) {
  this.userName = userName;
}

public int getVoteCount() {
  return voteCount;
}

public void setVoteCount(int voteCount) {
  this.voteCount = voteCount;
}

public Integer getUserId() {
  return userId;
}

public void setUserId(Integer userId) {
  this.userId = userId;
}

public Date getPostedAt() {
  return postedAt;
}

public void setPostedAt(Date postedAt) {
  this.postedAt = postedAt;
}

public Date getUpdatedAt() {
  return updatedAt;
}

public void setUpdatedAt(Date updatedAt) {
  this.updatedAt = updatedAt;
}

public List<Comment> getComments() {
  return comments;
}

public void setComments(List<Comment> comments) {
  this.comments = comments;
}

@Override
public boolean equals(Object o) {
  if (this == o) return true;
  if (!(o instanceof Post)) return false;
  Post post = (Post) o;
  return getVoteCount() == post.getVoteCount() &&
          Objects.equals(getId(), post.getId()) &&
          Objects.equals(getTitle(), post.getTitle()) &&
          Objects.equals(getPostUrl(), post.getPostUrl()) &&
          Objects.equals(getUserName(), post.getUserName()) &&
          Objects.equals(getUserId(), post.getUserId()) &&
          Objects.equals(getPostedAt(), post.getPostedAt()) &&
          Objects.equals(getUpdatedAt(), post.getUpdatedAt()) &&
          Objects.equals(getComments(), post.getComments());
}

@Override
public int hashCode() {
  return Objects.hash(getId(), getTitle(), getPostUrl(), getUserName(), getVoteCount(), getUserId(), getPostedAt(), getUpdatedAt(), getComments());
}

@Override
public String toString() {
  return "Post{" +
          "id=" + id +
          ", title='" + title + '\'' +
          ", postUrl='" + postUrl + '\'' +
          ", userName='" + userName + '\'' +
          ", voteCount=" + voteCount +
          ", userId=" + userId +
          ", postedAt=" + postedAt +
          ", updatedAt=" + updatedAt +
          ", comments=" + comments +
          '}';
  }
}
```

Like before, don't forget to add the `@OneToMany` annotation above your `comments` list.

Nice work! You can move on to create the `Comment` entity model next.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.