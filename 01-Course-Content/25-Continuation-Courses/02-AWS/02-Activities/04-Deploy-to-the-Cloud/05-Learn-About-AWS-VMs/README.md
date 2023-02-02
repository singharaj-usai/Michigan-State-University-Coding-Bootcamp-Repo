# Learn About AWS VMs

In the previous step, we modified the UI components to render the images. In this step, we'll learn about AWS VMs.

In this final part of the module, we'll deploy our application to a VM in the cloud. This means that we'll provision a server in AWS to host the website on a public URL. Before we proceed, let's learn a bit about the VM that we'll use to host the website.

We'll use an EC2 instance to host the application. Amazon **EC2**, or **Elastic Cloud Compute**, is a cornerstone of AWS's IaaS model. An EC2 instance provides powerful computing services that can be located in any region around the globe. An EC2 is a great example of leveraging AWS's cloud infrastructure. As the need for capacity changes with the demands of a website, EC2 instances can be quickly added or dropped depending on the need.

With AWS's free tier, we can use a free EC2 instance for up to 750 hours per month—running the EC2 instance roughly 24/7 for the entire month. With the EC2 instance available on the free tier, the website can handle approximately 45 concurrent users. If we reach this capacity, we can easily add another EC2 instance—however, we'll exceed the free tier because this will add about 744 hours of computing time each month. Because EC2 costs about five cents per hour, this will equate to an additional $37 per month, or $444 per year.

This cost analysis shows that an EC2 instance is much more expensive compared to a Heroku deployment as a comparison. Normally an EC2 instance is used by a company that needs to handle a steady amount of requests or concurrent users. EC2 instances are also great for supporting roles as an emergency backup system in case the main servers go down.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.