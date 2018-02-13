1 Why and what you could test in your angular applications
2 Introduction to a simple demo Angular application to test
3 Angular testing tools
4 Writing your first unit tests
5 Mocking Angular dependencies
6 Configure an Angular TestBed
7 Async and FakeAsync Angular helpers
8 Writing e2e test
9 Summary


### 2 Introduction to a simple demo Angular application to test
- Intentionally simple app with son server a list of users and edit or add them
- Like this as it is template to service
- http, async dom events, faking and e2e
- With  container and presentational component set up


### 3 Angular testing tools
- Show files like karma and protractor 
- Show wallaby website
- Run command line version
- Run Wallaby version 

### 4 Writing your first unit tests
- Use app component and delete
- 1 + 1 one and discuss syntax and matchers
- New up component but this only the class it is a isolated test
- Check the title 
- Make a before each
- Show karma running in browser

### 5 Mocking Angular dependencies
- How to fake 
- Make mock with return null and http
- Swap for jasmine spy obj
- Show different spy methods
- Also pass in real spy and real service with no http
- NO access to html template so lets use the test bed

### 6 Configure an Angular TestBed
- Discuss issue on auto generating tests and value in having at least these?
- With a done call back as async

### 7 Async and FakeAsync Angular helpers
- Then fakeAsync and periodic timer 
- Then not shallow and show how it works
- Add other component and now integration test
- Show console log nothing
- Wrap in async and when stable and detect changes

### 8 Writing e2e test 
- Run and fail app e2e and talk through page objects 
- Change to look for right title but wrong nav
- Change to be new folder and users
- Add keys

### Extras
Jest branch
Http tests