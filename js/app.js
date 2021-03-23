
//create constructor function for product
function Product(name)
{
  this.name = name;
  this.url = '';
  this.timesShown = 0;
  this.timesClicked = 0;
}

//randomly generate three unique product images from images directory

//for each image, increment times shown by one

//once one picture is clicked, increment its 'times clicked' and show three new pictures

//those new pictures are now shown and their 'times shown' is incremented

//keep track of number of voting rounds
//number should only go up to 25
let times_voted = 0;