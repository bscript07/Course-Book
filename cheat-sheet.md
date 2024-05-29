# Express App Cheat Sheet

1. Initialize project
2. Nodemon
       * Install nodemon
       * Add start script
3. Express
       * Install express
       * Start initial express server
       * Add static middleware
       * Add resources to public folder - CSS and Img
       * Add body parser
       * Add routes module
4. Handlebars
       * Install express-handlebars
       * Config handlebars with express
       * Add views folder with resources
       * Add home view
       * Add home controller
       * Add home controller to routes
       * Add main layout
       * Add partial dir
5. Database
       * Install mongoose
       * Setup db connection
       * Add user model
6. Register
       * Fix navigation links
       * Add register page (view, controller, route)
       * Fix register form
       * Add post register action
       * Add auth service
       * Install bcrypt
       * Hash password
       * Check confirm password
       * Check if user already exists
7. Login 
       * Install jsonwebtoken
       * Install cookie parser
       * Add cookie-parser middleware
       * Add login page
       * Fix login form
       * Add login post action
       * Add authService login method
             * validate user
             * validate password
             * generate token
       * Return cookie
       * Modify register for auto login
8. Logout
9. Authentication && Authorization
       * Add auth middleware
       * Check if token is guest
       * Verify token
       * Attach user to request object and res.locals
       * Use middleware in express
       * Add isAuth route guard
10. Error handling
       * Add notifications
       * Add getErrorMessage util functionality
       * Add register error handling
       * Add login error handling
11. Last fixes
       * Dynamic navigation

       

             