# Login Authentication and User Registration page using JavaScript:
Authenticating login credentials of any page is the very basic step, there are several methods we can achieve that such as using simple JS , using different API'S , using JWT tokens etc., but here i am doing this by using simple javascript.

First I created an user registration html page in which three input fields are there (Name, Email , Password) and after filling all the mentioned details user must click on sign-up button which will trigger the onclick function and js code will be executed,
And it will get stored in the local storage of the web browser as an array object havig key value pairs, and if anyone is entering the duplicate values, a message will be displayed saying 'user already exist'.[checks and matches the email field].

In login page there are two input fields userid and password and a sign-in button . after entering the mentioned fields and clicking on sign-in button onclick validate function is triggered which will authenticate the credentials by getting the values from local storage array object and matching the required fields and if the values get matched a message wil be displayed saying 'logged in successfully'. else it will display 'login failed'.

The above program is based on the below technologies: 
 1) HTML - describes the basic structure of the page.
 2) CSS - to style the web page using different properties and values.
 3) JavaScript - to add functionalities to the various buttons included in the page.
