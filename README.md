# Halo jasa App

This is a backend of halo Jasa app, has endpoints login, register and profile/:id.

<br>
Using Javascript language

* **How to run** 

  `Properties`

  User that already registered can login by using email and password
  <br>
  <br>
  Email:
  - Email must be unique (put validation on models)
  <br>

  Phone Number:
  - Number written in string (to catch 0 in the front of phone number)
  <br>

  Password:
  - password is required
  - after user/customer 
  - every password written will encrypt and will be added hash into it, so none knows your password except you and God

  `FLOWS`

  after logged in, server only will give jwt token to client.
  <br>
  Token will be used to notice if user logged in or not
  <br> 
  
* **URL**

  <http://localhost:9001>
___
* **Models:**

  `User` have properties: 
  - username (string)
  - full_name (string)
  - email (string)
  - mobile_phone (string)
  - password (string)
  <br>
  <br>
  **below using default value:**
  - is_actived (boolean)
  - is_email_verified (boolean)
  - temp_pin_verify (string) : null
___
* **Method User:**

  `GET` /customer/profile/:id_profile
  
  Let user can get his only profile data
  <br>
  <br>
  ___
  
  `POST`/user/login
  
  Existing user can login or sign in to enter the site, after will have a biodata(properties) that already registered by user
  <br>
  <br>

  `POST`/user/register
  
  New user can sign up or do registration to do post an article or comment to another article
  <br>
  <br>
___

* **Method :**
  
  `server` side 
  
  using MVC method
  <br>
  have customer endpoint
  <br>
  <br>
  ___