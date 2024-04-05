function alertFeedback() {
  //console.log("alert called");
  if (generateRandomNumber() == 2) {
    alert(
      "Hëlleft luxformel.info ze Verbesseren an dems der eng E-mail schéckt mat ärem Feedback op feedback@luxformel.info. \n Merci am Viraus."
    );
  }
}
function generateRandomNumber() {
  return Math.floor(Math.random() * 50);
}
alertFeedback();
