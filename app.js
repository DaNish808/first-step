// You can deactivate any of the lines below
// just put the cursor over it and hit 'ctrl' + '/'
// hitting those keys again will reactivate it

alert('hi! I\'m a javascript alert, and i live in the app.js file')
console.log('hi! I\'m a console.log.')

const ImAVariable = 'Jeff';

console.log(
  'I can output simple words and phrases (in quotes), or variables like',
  ImAVariable,
  'with no problem.'
)
console.log('if you\'re curious about what a variable is holding at a certain time, use me there!')





const $clickableItems = $('.clickable');
const $listsSection = $('#lists')

let clickCounter = 0;
console.log('like this!   (ﾉ^_^)ﾉ  clickCounter =', clickCounter, ' ヽ(^。^)ノ');


$clickableItems.on('click', ({ target }) => {

  if(clickCounter < 3) {
    const $clickedItem = target;
    console.log('you clicked', $clickedItem);
  
    $($clickedItem).hide().fadeIn();
  
    clickCounter = clickCounter + 1;
    console.log('clickCounter:', clickCounter);
  }
  else if(clickCounter < 5) {
    $listsSection.fadeOut();

    clickCounter = clickCounter + 1;
    console.log('clickCounter:', clickCounter);
  }
  else {
    $clickableItems.hide();
  }

});