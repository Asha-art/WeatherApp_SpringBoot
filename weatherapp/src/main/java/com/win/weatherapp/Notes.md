# Weather API Project

## Homework

1. Modify the app so that it displays a list of the 10 most recent searches. Here is a summary of the changes you'll need to make:

   1. Add the necessary database settings to application.properties
   2. Create a model/entity to store zip codes in the database
   3. Create a zip code repository
   4. Inject the zip code repository into the weather service
   5. Any time the getForecast method is called in the weather service, add the zip code to the database
   6. Create a weather service method to get the (up to 10) most recent searches
   7. In both of the weather controller methods, call the new service method and add the the list of zip codes to the model
   8. In the html page, add code to display the recent searches in a table

2. Use the weather description in the API response to dynamically change the background on the page. You will have to get images from unsplash.com for each possible weather scenario.
