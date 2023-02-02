# Generate Employee Data by Using an API

We couldn't convince any companies to hand over their employee data, so we’ll use the next best thing: the [Random User Generator API](https://randomuser.me/documentation). This is a great API for prototyping front-end and back-end features when we don’t yet have access to real users. The API provides many options, but we’re only concerned with one endpoint: [https://randomuser.me/api/?results=10&nat=us&inc=name,id,picture](https://randomuser.me/api/?results=10&nat=us&inc=name,id,picture).

This will give us 10 random US citizens along with their names, fake id numbers, and thumbnail photos in JSON format. Visit the URL in another tab and skim over the data to get familiar with how we'd parse it. Note the nested object structure, as follows:

```json
{
  "results": [
    {
      "name": {
        "title": "mr",
        "first": "nicholas",
        "last": "reid"
      },
      "id": {
        "name": "SSN",
        "value": "410-26-4992"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      }
    }
  ]
}
```

Dust off those JavaScript skills and think about how you'd grab the name, id, and picture from this data. With plain JavaScript, it would look something like the following example:

```javascript
// FirstName
results[0].name.first

// Id
results[0].id.value

// PhotoUrl
results[0].picture.large
```

Even though you can’t use JavaScript here and the syntax will be a little different, pocket that knowledge—it’ll help you later.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.