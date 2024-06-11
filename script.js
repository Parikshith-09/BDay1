function sendMail(message) {
  let params = {
    message: message,
  };
  emailjs.send("service_lwuef0a", "template_sh006we", params).then(
    function (response) {
      console.log("Email sent successfully:", response);
      alert("Alright, I got it!!");
    },
    function (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again later.");
    }
  );
}