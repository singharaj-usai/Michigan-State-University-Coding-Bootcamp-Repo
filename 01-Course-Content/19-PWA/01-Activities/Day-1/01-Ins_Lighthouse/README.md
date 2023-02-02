# Instructor Demo: Lighthouse

* In order to demonstrate the functionality of Lighthouse, you will use the `10-Stu_Webpack-Plugin` activity.

* Navigate to `10-Stu_Webpack-Plugin/Solved` in your terminal and run `npm install` and `npm run build` to create a `dist` folder.

* Open the `10-Stu_Webpack-Plugin/Solved/dist/index.html` in your browser using Live Server to demonstrate the following:

  * Today we will be working on this Webpack Color Changer app in all of our student class activities. To demonstrate how webpack will improve our app's speed and performance, let's take a look at how well our final student activity `10-Stu_Webpack-Plugin` will perform when we're done with it.

  * We can audit an app's performance using a tool called Lighthouse using either Chrome DevTools or the Chrome extension.

  * To use Chrome DevTools to inspect our app, we can open DevTools and click on the double arrows `>>` and select `Lighthouse`.

  * Lighthouse allows us to perform a number of audits aimed at providing metrics to help improve both overall performance and accessibility. For now, we will select `Performance` and run a test on the `Desktop` version.

  * We click `Generate Report` to start the audit. We'll need to wait a few minutes for Lighthouse to warm up and generate the report.

  * The report contains metrics that show how fast the page loads and users can interact with the app. It looks like our optimized app is performing well!

  * We can toggle the expanded view to see details and information about each metric as well as insights on how to improve the score. To get more information, we can follow the links.

  * When we scroll down the page to the `Passed Audits` section, we can also see that the improvements we will make during today's class will pay off. All audits are passing and bundling our files has reduced our payload and increased our app's speed.

  * DevTools is just one way of using Lighthouse. Lighthouse is also available as a Chrome extension and as a node module for use during development. During the first student activity, we will use the Lighthouse Chrome extension to explore metrics.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we use Lighthouse to audit our app's performance?

  * 🙋 We use Lighthouse to generate an audit report that provides key metrics about how fast our page loads and how quickly it is interactive to the user. The audit report also provides an explanation of each metric as well as insights to help see where our app is performing well and where we may need to make improvements.
