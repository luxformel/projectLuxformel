function alertFeedback() {
  //console.log("alert called");
  if (generateRandomNumber() == 2) {
    alert(
      "luxformel.info ass ee Projet an den éischte Schrett. Hëlleft et ze Verbesseren an dem's der eng E-mail schéckt mat ärem Feedback op feedback@luxformel.info. \n Merci am Viraus."
    );
  }
}
function generateRandomNumber() {
  return Math.floor(Math.random() * 5);
}
alertFeedback();
