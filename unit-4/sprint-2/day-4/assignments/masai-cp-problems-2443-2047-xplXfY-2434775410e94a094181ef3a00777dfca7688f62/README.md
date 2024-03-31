# Masai job Portal 📈 (JS-fetch-sort-filter-Pagination)
### JS-VITE-WITH-MOCK-SERVER

Please do NOT use VSCode live-server. It will not work. Use the npm commands suggested to you here.

## Installation
```
npm install --engine-strict
```
## Start only the Backend server
```
npm run server
```
## Start only Frontend server
```
npm run start
```
## Start both BE & FE in a single command
```
npm run watch
```
# Important files
```
├── index.html
├── scripts
│   └── index.js
└── styles
    └── style.css
```
## Maximum Marks - 12

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- The Submission should not contain spaces; for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

## Rubrics
```
✅ able to submit the app - 1 mark ( minimum score )

### fetching the initial data
---------------------------------------
✅ Shows the correct initial data - 3 marks 

### Sorting and filtering
----------------------------
✅ Low-to-high Sorts as expected - 1 mark
✅ high-to-low Sorts as expected - 1 mark
✅ Filters as expected - 1 mark

### pagination functionality
------------------------------
✅ Low-to-high Sorts as expected with pagination - 1 mark
✅ high-to-low Sorts as expected with pagination - 1 mark
✅ Filters as expected with pagination - 1 mark
✅ Check for pagination functionality - 2 mark

```
### You haven't been taught Cypress to run the test cases locally; you can see the passed/ failed test cases and test errors on CP itself.

## Some Rules to follow:-

- Before writing a single line of code, please read the problem statement very carefully.
- <span style=" color: red">Don't change the already given IDs or classes.</span>
- If you don't follow these rules, you might not get any marks even if you do everything correctly.

## Problem statements

- Use `fetch` for API requests 
- irrespective of `sorting`, and `filtering` for every fetch request limit your data to 5 per page <span style=" color: red">**(Hint: _page=`<pagenumber>`&_limit=5)**</span>

### <h1 style="color:#215dc8">index page</h1>

Your task is to build ***`Masai job Portal`*** app where different jobs are available, and you have to implement fetch, sort, and filter functionality. Navbar has already been created no need to build it again.

<h4 style="color:#215dc8">
Problem 1. List of jobs on page load [3]
</h4>

On page `load`, a list of all `jobs` should be shown in the  `div#data-list-wrapper`. 

Expected markup (Jobs card list):
<!-- ![landingpage markup]() -->
<figure>
<img src="https://i.imgur.com/svo0QEs.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>landingpage markup</b></figcaption>
</figure>

- The `div.card` is a card appended to the div with `div.card-list`.
- In the above markup you can see only 5 cards are present on the first page and each page limit is 5.
- irrespective of `sorting`, and `filtering` for every fetch request limit your data to 5 per page <span style=" color: red">**(Hint: _page=`<pagenumber>`&_limit=5)**</span>

Expected markup (example, single card div inside card-list div): 
<!-- ![jobMarkUp]() -->

<figure>
<img src="https://i.imgur.com/agDpOlM.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Single jobs card Markup</b></figcaption>
</figure>

- **Markup - elements, classes & IDs should be identical to the above screenshot.**

- The **card** with `div.card` having two child div 
  1. The `div.card-img` in this image of the jobs is present.
  2. The `div.card-body` in this 
    -  h5 tag with `h5.card-role` **with role of job**.
    - p tag with `p.card-companyName` with the *companyName* of the job
    - p tag with `p.card-experienceRequired` with the *experienceRequired* of the job
    - p tag with `p.card-employmentType` with the *employmentType* of a jobs
    - p tag with `p.card-packageCTC` with the *packageCTC* of the job
    - p tag with `p.card-keySkills` with the *keySkills* of a jobs

| Sr. | tag    | class                                                      | text/src                      |
| --- | ------ | ---------------------------------------------------------- | ----------------------------- |
| 1.  | div    | <span style="color:#215dc8">card-img</span>                | add `img` tag inside this div |
| 1.  | img    | -                                                          | image of the job              |
| 2.  | h5     | <span style="color:#215dc8">card-role</span>               | the `role` of the job         |
| 3.  | p      | <span style="color:#215dc8">card-companyName</span>        | `companyName` of job          |
| 4.  | p      | <span style="color:#215dc8">card-experienceRequired</span> | `experienceRequired` of job   |
| 5.  | p      | <span style="color:#215dc8">card-employmentType</span>     | `employmentType` of job       |
| 6.  | p      | <span style="color:#215dc8">card-packageCTC</span>         | `packageCTC` of job           |
| 7.  | p      | <span style="color:#215dc8">card-keySkills</span>          | `keySkills` of job            |


Expected UI (example card):
<!-- ![jobUI]() -->
<figure>
<img src="https://i.imgur.com/Hf503ra.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Single jobs card UI</b></figcaption>
</figure>

Data mapping:
<!-- ![dataMarkUp]() -->
<figure>
<img src="https://i.imgur.com/0K6Fhio.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>dataMarkUp
</b></figcaption>
</figure>

- The data should be fetched from `${baseServerURL}/jobs`
- The jobs should be shown on page `load`

<h4 style="color:#215dc8">
Problem 2. Pagination [2]
</h4>

<figure>
<img src="https://i.imgur.com/0k9cci4.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Pagination</b></figcaption>
</figure>

- The buttons for pagination should be appended inside the `div` with `id=pagination-wrapper"` which is already mentioned in the boilerplate
- add _limit = 5 i.e. on each page `5` jobs should be there
- 10 buttons stating should be there (we have a total of 50 objects in the db.json file and using limit=5 need to create 10 buttons)
- **Hint** : - `?_page={pagenumber}&_limit=5`
- Note:- name the class names and data-testid as mentioned in the image provided above(markup)

<h4 style="color:#215dc8">
Problem 3. Sorting Jobs Based on 
</h4>

- Sorting for `Low to High` UI:
<!-- ![sort Low to high] -->
<figure>
<img src="https://i.imgur.com/HT8Loby.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>sort Low to high</b></figcaption>
</figure>


With the click of the button `#sort-low-to-high`, the jobs list should be sorted in ascending order based on their *package*.

With the click of the button `#sort-high-to-low`, the jobs list should be sorted in descending order based on their *package*.

You may use any approach of your choice for sorting. You may sort the available data, or you may make a new fetch request to the server and update the list. In case you want to fetch data, please use the [JSON Server documentation](https://github.com/typicode/json-server).

- irrespective of `sorting`, and `filtering` for every fetch request limit your data to 5 per page <span style=" color: red">**(Hint: _page=`<pagenumber>`&_limit=5)**</span>

<h4 style="color:#215dc8">
Problem 4. Filtering Jobs based on the companyName [1]
</h4>
 You have to create three types of filters as

 1. ***Google***
 2. ***Microsoft***
 3. ***capgemini***
- Filtering for `Google` UI:
<!-- ![filter Google] -->

<figure>
<img src="https://i.imgur.com/lXECfaN.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>filter based on companyName - Google</b></figcaption>
</figure>

When the button `#filter-Google` is clicked, the jobs list is expected to be filtered. It should only show the jobs whose `companyName` is ***`Google`***.

When the button `#filter-Microsoft` is clicked, the jobs list is expected to be filtered. It should only show the jobs whose `companyName` is ***`Microsoft`***.

When the button `#filter-capgemini` is clicked, the jobs list is expected to be filtered. It should only show the jobs whose `companyName` is ***`capgemini`***.

You may use any approach of your choice for filtering. You may filter the available data, or you may make a new fetch request to the server and update the list. In case you want to fetch data, please refer to the [JSON Server documentation](https://github.com/typicode/json-server).


- <span style=" color: green">No need to complete functionality for simultaneously working of filter and sorting operations</span>

- irrespective of `sorting`, and `filtering` for every fetch request limit your data to 5 per page <span style=" color: red">**(Hint: _page=`<pagenumber>`&_limit=5)**</span>

<figure>
<img src="https://i.imgur.com/WGhlfG7.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Problem is tetsed on CP</b></figcaption>
</figure>

- irrespective of `sorting`, and `filtering` for every fetch request limit your data to 5 per page <span style=" color: red">**(Hint: _page=`<pagenumber>`&_limit=5)**</span>

### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes to respond,
- so we request you to read the problem carefully and debug it before itself
- We also request you not just submit it last minute
- Try to keep one submission at a time
- Use `${baseServerURL}/what-ever-route` for server url & not `localhost:9090/what-ever-route` in your solution. Failing to do so may cause all the tests to fail.
