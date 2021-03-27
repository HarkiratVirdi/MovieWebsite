const imagesForLogin = [
  "/images/banner/got8_edited.jpg",
  "/images/banner/queenGambit_edited.jpg",
  "/images/banner/wonderWoman_edited.jpg",
];


const sgMail = require("@sendgrid/mail");
const { validFileType } = require("./Validation");


module.exports.randomImage = () => {
  const imageNum = Math.floor(Math.random() * 3);
  return imagesForLogin[imageNum];
};

module.exports.sendMail = async(user) => {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
          to: user.email,
          from: "harkiratsinghvirdi3@gmail.com",
          subject: "Welcome To MFlix",
          text: "We hope You enjoy this app.",
          html: `<h3>Hi ${user.firstname}, ${user.lastname}</h3>
            <p>Thank You For Signing up.</p>
            <p>Once you are logged in you can now Buy and Rent Movies</p>.
            <br>
            <h3 style="#000">MFlix</h3>
      `,
        };

        
          const msgSend = await sgMail.send(msg);

          if (msgSend) {
            console.log("Email Sent");
              return true;
          
        } else{
          console.log("error sending mail", error);
          throw `Error Sending Mail ${error}`
        }
}


module.exports.uploadImages = async(image) => {
  console.log("image in upload image", image);
    if(validFileType(image))
    {
        const uploadedImage = await image.mv("public" + "/images/movies/" + image.name);

        if(uploadedImage)
        {
          console.log("uploaded image", uploadedImage);
        }
    }else{
      throw "Please insert only Images";
    }

      // return false;
}


