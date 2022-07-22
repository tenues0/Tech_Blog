
  
# Tech Blog
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of contents
* [usage](#Usage)
* [contribution](#Contributing)
* [install](#Install)
* [tests](#Tests)
* [username](#Username)
* [email](#Email)
* [license](#License)

## Usage

This app is an example of a MVC, which stands for Model-View-Controller. It is a tech blog that allows users to signup, post blogs, and commment on each other's blogs.
This app is can be deployed locally, but it is also deployed live via Heroku.

https://sample-tech-blog.herokuapp.com/

## Contributing

The user can fork the repo for further development.

## Install and Run
```
npm i express mysql2 dotenv seqelize
```

Configure the username, password, and datebase name.
```
DB_USER=''
DB_PW=''
DB_NAME='techblog_db'
```

Run the seed file
```
npm run seed
```

Start the server
```
nodemon server.js
```

## Username

tenues0

## Email

theodore.ayoub@gmail.com

## License

Information about the MIT can be found at: https://opensource.org/licenses/MIT
You are licensing this product in the year 2022.


Copyright 2022 Theodore Ayoub
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:
      
The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.
      
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
