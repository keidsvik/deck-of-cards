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
  $("#output").append(deck);
   // $('#hide').click(function() {
    $('#output').toggle(); {
  }
  });
});