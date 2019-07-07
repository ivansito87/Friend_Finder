
##### Looking for a date? You are in the right place, you have come to right app, if you are looking to find that special someone or just a friend near you. All you have to do is fill out a quick survey, and my friend-matching algorithm will pair you with an date in a matter of seconds.

## Live Link
 #### You can find the deployed app in this [here](https://ivan-hookapp.herokuapp.com/ "HookApp by Ivan Rendon")
    
## Usage

To use this application service, simply go to the homepage and take the survey please take this seriously since all of our members information is real. Immediately after submitting the survey, your matched date will show up. I have also created an API you can access to the network's users and their personalized information. For research purposes.
by clicking the link provided in the survey page

## Requirements
- Modularity in the form of separate files for server logic, storing of friends, views, and routing
- 10-question survey to assess uniqueness of users
- Use `express`, `body-parser`, and `path` npm packages in the `server.js` file
- Separate JavaScript files for routing (`htmlRoutes.js` and `apiRoutes.js`)
- Used `serve-favicon` to keep the styling and additional details of the page 
- Appropriate GET and POST routes for serving HTML pages and API `https://ivan-hookapp.herokuapp.com/api/friends`
- Separate file for storing friends (`friends.js`)
- Calculate best match for user once survey is completed and return that match to the user based on a written algorithm in `JavaScript`


## ScreenShot
![Screenshot of game](./app/images/paulina.gif)

## Technologies Used

- JavaScript
- jQuery
- node.js
- Express.js
- HTML
- Bootstrap
- CSS

## Code Explanation
- The `server.js` file sets up the Express server, specifying our port number, the npm packages that need to be loaded, and also the routes, which we have externalized
- There are 2 separate HTML files (`home.html` and `survey.html`) that serve as the front-end portion of our code; they determine what the user sees (the homepage and the survey, which will also show the resulting best match)
- Our 2 routing files (`htmlRoutes.js` and `apiRoutes.js`) determine the back-end logic (based on the request being made, the response that gets sent to the browser); the HTML routes display the survey and the homepage based on the URL that is accessed, and the API routes send back existing content in our server-side data or add new friends
- Best match is calculated by finding the friend with the minimal difference in scores and then sending that friend to the browser as a JSON object
- A modal is then toggled, displaying the the best match to the person who just took the survey
- In essense, this will also be a form of notes that you may later reference weeks later
- Friends are stored as such:

```js
    {
        name: "Maggie",
        about: "Funny, kind, grateful, humble… okay maybe not that last one. These are just a few of the words that represent who I strive to be.",
        photo: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
        scores: [3, 1, 3, 5, 2, 3, 2, 2, 5, 5]
    }
    {
        name: "Diane",
        about: "From a young age, I’ve had a big heart. In my role as a nurse, I have employed that big heart and created a world of love and compassion around me.",
        photo: "https://images.unsplash.com/photo-1467632499275-7a693a761056?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
        scores: [1, 1, 5, 3, 3, 5, 1, 2, 3, 4]
    }
```

## Live Link
 #### You can find the deployed app in this [here](https://ivan-hookapp.herokuapp.com/ "HookApp by Ivan Rendon")
    