let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #D7C0AE;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #967E76;">Scrum Master Forever</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
