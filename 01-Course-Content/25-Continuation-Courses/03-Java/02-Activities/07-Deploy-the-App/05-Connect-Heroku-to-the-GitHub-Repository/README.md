# Connect Heroku to the GitHub Repository

First, as always, push all of your latest work to GitHub, using the following Git workflow:

```console
git add .
git commit -m "message"
git push origin main
```

Open your command prompt and navigate to the root directory of your Java API folder. Once there, type the following command (where `[appName]` is the name of your project, without the `[]`):

```console
heroku git:remote -a [appName]
```

You're nearly done!

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.