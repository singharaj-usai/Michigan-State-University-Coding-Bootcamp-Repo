# Create the Vote Entity Model

Select your `model` package, and create a class called `Vote`. Inside that class, add the following instance variables:

```java
private Integer id;
private Integer userId;
private Integer postId;
```

Okay, now we'll need the following class-level annotations and implementations:

```java
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "vote")
public class Vote implements Serializable {}
```

Like the `Comment` model, we only need annotations on the `id` instance variable, as follows:

```java
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private Integer id;
```

Now generate everything just like before, and your file should look like the following example when complete:

```java
package com.technews.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "vote")
public class Vote implements Serializable {

@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private Integer id;
private Integer userId;
private Integer postId;

public Vote() {
}

public Vote(Integer id, Integer userId, Integer postId) {
  this.id = id;
  this.userId = userId;
  this.postId = postId;
}

public Vote(Integer userId, Integer postId) {
  this.userId = userId;
  this.postId = postId;
}

public Integer getId() {
  return id;
}

public void setId(Integer id) {
  this.id = id;
}

public Integer getUserId() {
  return userId;
}

public void setUserId(Integer userId) {
  this.userId = userId;
}

public Integer getPostId() {
  return postId;
}

public void setPostId(Integer postId) {
  this.postId = postId;
}

@Override
public boolean equals(Object o) {
  if (this == o) return true;
  if (!(o instanceof Vote)) return false;
  Vote vote = (Vote) o;
  return Objects.equals(getId(), vote.getId()) &&
          Objects.equals(getUserId(), vote.getUserId()) &&
          Objects.equals(getPostId(), vote.getPostId());
}

@Override
public int hashCode() {
  return Objects.hash(getId(), getUserId(), getPostId());
}

@Override
public String toString() {
  return "Vote{" +
          "id=" + id +
          ", userId=" + userId +
          ", postId=" + postId +
          '}';
  }
}
```

Great job! You've built the entire structure of the database, which is a huge accomplishment and a key step toward creating your first Java API.

Push all of your work so far to GitHub, using the following Git workflow:

```console
git add .
git commit -m "message"
git push origin main
```

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.