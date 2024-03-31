# ArtVista🖌️(JS-fetch-sort-filter-Pagination-LS)
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
├── cart.html
├── scripts
│   ├── index.js
│   └── cart.js
└── styles
    └── style.css
```
## Maximum Marks - 22

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
✅ Filters as expected with pagination - 1 mark
✅ Check for pagination functionality - 2 marks

### add to cart 
✅ check add to cart functionality - 2 marks
✅ check to add to cart not able to add duplicate art in cart functionality - 2 marks
✅ should increase cart no. after adding an art to the cart - 1 mark
✅ check the localStorage after adding to cart functionality - 2 marks

### cart page 

✅ Ensure that the cart page displays the necessary details - 2 marks
✅ Verify that the total bill amount is correctly calculated and displayed - 1 mark
✅ Check if the code appropriately updates the localStorage after removing an art item from the cart - 2 marks

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

Your task is to build ***`ArtVista`*** app where different jobs are available, and you have to implement fetch, sort, and filter functionality. Navbar has already been created no need to build it again. 

- Ensure that the `<h1>` tag with the id "cart" accurately reflects the count of items in the cart by updating it dynamically when items are added to or removed from the cart. The initial template includes the structure `<h1 id="cart">Cart : 0</h1>`, and your task is to modify it based on cart interactions.

- use localStorage for implementing cart functionality for more details refer to `Problem 5`

- To access the cart page, an anchor tag has been incorporated with the text "Checkout cart" and an associated href set to "cart.html"

<figure>
<img src="https://i.imgur.com/tP7vH5A.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Navbar</b></figcaption>
</figure>

<h4 style="color:#215dc8">
Problem 1. List of arts on page load [3]
</h4>

On page `load`, a list of all `arts` should be shown in the  `div#data-list-wrapper`. 

- Upon page load, the div with the class `div.card-list` should be augmented with a list containing all the `arts card` Subsequently, this `div.card-list` should be appended to the `div#data-list-wrapper`. Please refer to the provided markup for a clearer understanding.

Expected markup (Arts card list):
<!-- ![landingpage markup]() -->
<figure>
<img src="https://i.imgur.com/JA5OUuS.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>landingpage markup</b></figcaption>
</figure>

- The `div.card` is a card appended to the div with `div.card-list`.
- In the above markup you can see only 5 cards are present on the first page and each page limit is 5.
- irrespective of `sorting`, and `filtering` for every fetch request limit your data to 5 per page <span style=" color: red">**(Hint: _page=`<pagenumber>`&_limit=5)**</span>

Expected markup (example, single card div inside card-list div): 
<!-- ![artMarkUp]() -->

<figure>
<img src="https://i.imgur.com/Bud3YCk.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Single arts card Markup</b></figcaption>
</figure>

- **Markup - elements, classes & IDs should be identical to the above screenshot.**

- The **card** with `div.card` and `data-id={id of div}` having child div as 
  1. The `div.card-img` in this image of the arts is present.
  2. The `div.card-body` in this 
      -  h5 tag with `h5.card-title` **with title of art**.
      - p tag with `p.card-artist` with the *artist* of the art
      - p tag with `p.card-year` with the *year* of the art
      - p tag with `p.card-paintbrushes` with the *paintbrushes* of a arts
      - p tag with `p.card-price` with the *price* of the art
      - p tag with `p.card-medium` with the *medium* of a arts
    - button with `button.card-button` with *`Add to cart`* text 
        -  class= card-button
        -  data-id= id of the arts     


- **Hint 1** :  *Show the art `title` preceded by any additional text. For example, "Art Title: `title`."*

- **Hint 2** :  *Display the `price` of the art without adding any preceding or following text, as any additional text will cause the test cases to fail.* Please refer to the provided Single card markup for a clearer understanding.

| Sr. | tag    | class                                                      | text/src                      |
| --- | ------ | ---------------------------------------------------------- | ----------------------------- |
| 1.  | div    | <span style="color:#215dc8">card-img</span>                | add `img` tag inside this div |
| 1.  | img    | -                                                          | image of the art              |
| 2.  | h5     | <span style="color:#215dc8">card-title</span>               | the `title` of the art         |
| 3.  | p      | <span style="color:#215dc8">card-artist</span>        | `artist` of art          |
| 4.  | p      | <span style="color:#215dc8">card-year</span> | `year` of art   |
| 5.  | p      | <span style="color:#215dc8">card-paintbrushes</span>     | `paintbrushes` of art       |
| 6.  | p      | <span style="color:#215dc8">card-price</span>         | `price` of art           |
| 7.  | p      | <span style="color:#215dc8">card-medium</span>          | `medium` of art            |
| 8.  | button | <span style="color:#215dc8">card-button</span>             | `Add to cart` text                 |
|     |        | data-id= id of the art                                     |                               |


- Here, *`data-id`* is used to catch the `id` of the arts. You can use a dataset.id refer to [working with dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset).

Expected UI (example card):
<!-- ![artUI]() -->
<figure>
<img src="https://i.imgur.com/agHmhRz.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Single arts card UI</b></figcaption>
</figure>

Data mapping:
<!-- ![dataMarkUp]() -->
<figure>
<img src="https://i.imgur.com/aZxijGr.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>dataMarkUp
</b></figcaption>
</figure>

- The data should be fetched from `${baseServerURL}/arts`
- The arts should be shown on page `load`

<h4 style="color:#215dc8">
Problem 2. Pagination [2]
</h4>

- <span style=" color: green">The pagination buttons should dynamically update when applying sorting and filtering functionality.</span>

<figure>
<img src="https://i.imgur.com/6j7soZQ.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Pagination</b></figcaption>
</figure>

- The buttons for pagination should be appended inside the `div` with `id=pagination-wrapper"` which is already mentioned in the boilerplate
- add _limit = 5 i.e. on each page `5` arts should be there
- At the start, 4 buttons must be there (we have a total of 20 objects in the db.json file, and using limit=5 need to create 4 buttons)

- **Hint** : 
    1. `?_page={pagenumber}&_limit=5`
    2. use `res.headers.get("X-Total-Count")` for finding totalCount no of pages
- Note:- name the class names and data-testid as mentioned in the image provided above(markup)


<h4 style="color:#215dc8">
Problem 3. Sorting Arts Based on Price
</h4>

- Sorting for `Low to High` UI:
<!-- ![sort Low to high] -->
<figure>
<img src="https://i.imgur.com/xBDwHXS.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>sort Low to high</b></figcaption>
</figure>


With the click of the button `#sort-low-to-high`, the art list should be sorted in ascending order based on their *price*.

With the click of the button `#sort-high-to-low`, the art list should be sorted in descending order based on their *price*.

You may use any approach of your choice for sorting. You may sort the available data, or you may make a new fetch request to the server and update the list. In case you want to fetch data, please use the [JSON Server documentation](https://github.com/typicode/json-server).

- irrespective of `sorting`, and `filtering` for every fetch request limit your data to 5 per page <span style=" color: red">**(Hint: _page=`<pagenumber>`&_limit=5)**</span>

<h4 style="color:#215dc8">
Problem 4. Filtering Arts based on the artist [1]
</h4>
 You have to create two types of filters as

 1. ***Tempera on Canvas***
 2. ***Oil on Canvas***
- Filtering for `Tempera on Canvas` UI:
<!-- ![filter Tempera on Canvas] -->

<figure>
<img src="https://i.imgur.com/h7IOaX3.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Filter for medium "Tempera on Canvas"</b></figcaption>
</figure>

When the button `#filter-Tempera-on-Canvas` is clicked, the art list is expected to be filtered. It should only show the arts whose `medium` is ***`Tempera on Canvas`***.

When the button `#filter-Oil-on-Canvas` is clicked, the art list is expected to be filtered. It should only show the arts whose `medium` is ***`Oil on Canvas`***.

You may use any approach of your choice for filtering. You may filter the available data, or you may make a new fetch request to the server and update the list. In case you want to fetch data, please refer to the [JSON Server documentation](https://github.com/typicode/json-server).


- <span style=" color: green">No need to complete functionality for simultaneously working of filter and sorting operations</span>

- irrespective of `sorting`, and `filtering` for every fetch request limit your data to 5 per page <span style=" color: red">**(Hint: _page=`<pagenumber>`&_limit=5)**</span>


<h4 style="color:#215dc8">
Problem 5. add to cart functionality
</h4>

On each art card, include a button labeled `Add to cart` with the class `card-button` Clicking this button triggers an action as

  1. Update the cart count in the navbar within the h1 tag with the `id cart `when adding/removing items to the cart.
  2. Store the current item in the localStorage using the key `cartData`
    - `Hint`: `localStorage.setItem("cartData", JSON.stringify(updated cart data))`
  3. Each item in the cart must be distinct, and the addition of **duplicate items** is not permitted.
  4. If the item is unique, add it to the localStorage and display an alert with the message `added to cart`
  5. If the item is not unique, refrain from adding it to localStorage and display an alert with the message `Already in Cart`


<h4 style="color:#215dc8">
Problem 6. cart page (cart.html)
</h4>

- The cart page should contain all the items, that are added to the cart, which is obtained from the LocalStorage with the key `cartData`.

- The user should also be able to remove an item from the UI as well as from localStorage.

- All the items that have been added to the cart should be displayed in the form of a table with all required fields as columns.

-  a table with a table heading has already been added to the template 



1. image
2. title
3. artist
4. year
5. details of paintbrushes
6. price
7. medium
8. Remove `button with class = RemoveBtn`

- Append the data of purchased art and generate a tbody tag with the id `tbody`.
- There is a div with id=`bill` which should contain the text content as `Total bill amount : ${total_price}` . (It should get updated in real-time)


<figure>
  <img src="https://i.imgur.com/DDfmrN9.png" alt="Image Description" style="width: 100%; border: 1px solid #ccc;">
  <figcaption style="text-align: center; font-weight: bold;"> cart.html</figcaption>
</figure>

<h4 style="color:#397ce7">
remove</h4>

- add a button with text as `Remove` having id = `RemoveBtn` on clicking the user should able to remove data from the list in the UI as well as from localStorage. 

<figure>
<img src="https://i.imgur.com/JcrvQOY.png"  style=" border-radius: 5px;" width="60%"/>
<figcaption align = "center"><b>Problem is tetsed on CP</b></figcaption>
</figure>

### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes to respond,
- so we request you to read the problem carefully and debug it before itself
- We also request you not just submit it last minute
- Try to keep one submission at a time
- Use `${baseServerURL}/what-ever-route` for server url & not `localhost:9090/what-ever-route` in your solution. Failing to do so may cause all the tests to fail.
