## API Documentation

animeExplorer website is for exploring all the details about your favorite anime tv shows!

## Tech Stack behind the scenes
•	For Backend: Next.js framework with Node which utilizes a GraphQL API https://anilist.gitbook.io/anilist-apiv2-docs/  
•	For Frontend: Next.js feature of File-based Routing has been utilized with React. It uses Server-side-rendering (SSR) mechanism of Next.js.
•	The Frontend utilizes the Anilist GraphQL API provided by the backend to produce pages (Page API) and images (Media API).
•	Dynamically Generated pagination: The number of Pages and the number of images to be displayed on each page, can be dynamically configured by using the application variables file (/lib/properties/app-variables.js).
•	This website also offers a standalone REST API (‘/api/rest-api’) with GET method and the response generates page details and images details.


##	Running the application locally:
o	Pre-requisites: Need to have Node.js installed globally on the computer.
o	Download the code base from GitHub.
o	In the project folder, run ‘npm run dev’ command using CLI/Terminal.
o	The Next.js server will start up and the application will be available at ‘http://localhost:3000’.
o	Browse through the website, navigate to different pages for different anime tv shows and details.
o	Also, a REST API is available to explore in the navigation bar.
o	For production build: run ‘npm run build’ in the project folder.
o	

##	Future Enhancements:
o	Application with Complete test-cases
o	Enhanced caching techniques, which will improve the Server-side-rendering SSR.

##	Coding techniques:
o	This application offers overall abstraction for fetching data from External GraphQL API and the internal REST API.
o	It also is dynamically responsive for project based requirements, i.e., to display number of pages on the application and the number of images to be displayed per page. 
o	It also has project structure organized for an enterprise level project.
o	The internal REST API is environment ready, to be changes from localhost to dev environment to a prod environment.


## Post-script:
o	Thanks for this assignment, I got to learn about Next.js.
o	It took a little more than 4 hours to reach to this point of the application because of my unfamiliarity with Next.js.
o	I was able make myself familiarize with File-base-routing, API Routes and different rendering techniques offered by Next.js for Search Engine Optimization (SEO)- SSR & SSG.
o	If time permitted, I would have learnt about testing the application in Next.js, different caching techniques like react-component-caching. I would have provided better API Documentation and better user-experience with the application.

