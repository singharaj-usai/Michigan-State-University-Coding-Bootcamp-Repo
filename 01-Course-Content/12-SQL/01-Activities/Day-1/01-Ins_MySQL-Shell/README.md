#  Instructor Demo: MySQL Shell

MySQL Shell is an advanced client and code editor for MySQL located right in our terminal. Let's open the MySQL Shell. 

  * To start, we navigate to the root directory of our project and then type the following command into the terminal to confirm that the MySQL server is up and running. If successful, `mysql` and a version number will appear. 

    ```sh
    mysql --version
    ```

  * Next, we open the MySQL Shell that connects the terminal to the MySQL instance. In the terminal, at the root directory of the project, enter the following command:

    ```sh
    mysql -u root -p
    ```

  * This command tells the MySQL Shell that we want to log in with the root user (-u). The -p stands for "password.". Once we enter this command, we are prompted to enter the password we created when we installed `MySQL`.

  * We write our commands after the prompt. Don't forget, all commands must end with a semi-colon! 

    ```sh
    mysql> CREATE DATABASE demo_db;
    ```

  * We can also execute a file that contains a list of commands using `source`

    ```sh
    source schema.sql
    ```

  * To exit the Shell, we type `quit`.

    ```sh
    quit
    ```

* If the `mysql --version` command returned an error, refer to the  [MySQL Docs Installing MySQL Shell](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-install.html) for installing MySQL on your Mac, Windows on Linux machine.
