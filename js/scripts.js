// UI Logic

$(document).ready(function() {
  $("#deck").submit(function(event) {

    event.preventDefault();
    const suits = [' hearts', ' diamonds', ' spades', ' clubs'];
    const cards = ["jack", "queen", "king", "ace", 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const deck = [];

    suits.forEach(function(suit) {
      cards.forEach(function(card) {
        deck.push("<li>" + card + ' of ' + suit + "</li>");
        
  });
});

// Business Logic
  //$("#result").show();
   
  //$('#result').toggle(deck);
  $('#result').toggle().html(deck);
  // .toggle is an animation essentially so putting deck into the toggle 
  //method makes it come in smoothly but omitting it from toggle and putting 
  //it only in html toggles all of the results and shows the contents of the deck immediately and not
  //all smooooooth like toggle does.
  });
});