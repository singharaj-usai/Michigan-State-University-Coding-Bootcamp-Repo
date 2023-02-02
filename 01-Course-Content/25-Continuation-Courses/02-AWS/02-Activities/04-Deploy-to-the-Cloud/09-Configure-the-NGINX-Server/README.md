# Configure the NGINX Server

In the previous step, we installed the application environment dependencies on our instance. In this step, we'll configure the NGINX server.

The NGINX server is the application server that will handle the communication from the application's front and back ends. We'll use proxies to route the exposed route from `nginx` to the client and server. Then we'll modify the fetch calls in the UI components to connect to the API routes of the application's back end.

Run the following command to enter the text editor in the EC2 instance to allow code to be changed. We'll create a new configuration file so that the application can be exposed to port 80.

We opened access to HTTP requests on port 80 in the EC2 instance when we configured the security group. If the port is busy due to a process running on it, we can see what process is running with the following command:

```console
sudo lsof -i:80
```

This will provide a PID if a process is running, which we can terminate with the following command:

```console
sudo kill -9 <myPID#>
```

This will ensure that port 80 can listen to HTTP requests on the EC2 instance.

Next, we will find that the server configuration file is located at the root folder in the following path:

```console
nano /etc/nginx/sites-available/default
```

We'll replace the current configuration with the following JSON:

```json
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name _;

    location /{
            root /opt/aws-thought/client/build;
            index index.html;
            try_files $uri /index.html;
    }
    location /api/ {
            proxy_pass http://localhost:3001;
    }
}
```

To exit and save the configuration file, press Ctrl+X on Windows and Command+X on macOS. This will prompt to save. Press Y, then select Enter.

The preceding configuration file is known as a `.conf` file type. These are used to store configuration settings for operating systems and server processes. In the preceding `.conf`, the `nginx` server is listening on port 80 for an internet request. We then proxy the endpoints in the application at the `/` and `/api/` locations, for the front end and back end respectively.

Also notice that we're serving the production build of the application.

**Deep Dive**

For more information, refer to the [NGINX beginner's guide](http://nginx.org/en/docs/beginners_guide.html).

Next we need to restart the `nginx` server by running the following command in the Ubuntu CLI:

```console
systemctl restart nginx
```

The preceding command will restart the `nginx` server with the new configuration settings. Run the following command to configure the `nginx` server to automatically launch whenever the EC2 instance is started or booted:

```console
systemctl enable nginx
```

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.