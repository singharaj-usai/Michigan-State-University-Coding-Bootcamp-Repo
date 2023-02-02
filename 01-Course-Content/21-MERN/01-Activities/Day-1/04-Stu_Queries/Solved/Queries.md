The following query returns all schools, classes, and professors:

```graphql
query schools {
  schools {
    name
    location
    studentCount
    classes {
      name
      professor {
        name
      }
    }
  }
}
```

The following query returns all classes and professors:

```graphql
query classes {
  classes {
    name
    creditHours
    building
    professor {
      name
      studentScore
    }
  }
}
```

The following query returns all professors:

```graphql
query professors {
  professors {
    _id
    name
    studentScore
    officeHours
    officeLocation
  }
}
```
