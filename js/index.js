/*
<br>
<nav class="level is-hidden is-fixed">
  <p class="level-item has-text-centered">
    <a class="link is-info">Home</a>
  </p>
  <p class="level-item has-text-centered">
    <a class="link is-info">Menu</a>
  </p>
  <p class="level-item has-text-centered">
    <span class="applecrazy">AppleCrazy</span>
  </p>
  <p class="level-item has-text-centered">
    <a class="link is-info">Reservations</a>
  </p>
  <p class="level-item has-text-centered">
    <a class="link is-info">Contact</a>
  </p>
</nav>
hello
*/
var typed = new Typed("#hello", {
  strings: [
    "^1000 Hello. ^500 I'm AppleCrazy. ^1500 <br> I make interesting things."
  ],
  showCursor: false,
  typeSpeed: 30,
  onComplete: function() {
    var typed2 = new Typed('#invite', {
      strings: [
    "^2000 Check out my projects below."
  ],
  showCursor: false,
  typeSpeed: 20,
    })
  }
});