let UserDetails = localStorage.getItem("UserDetails")
  ? JSON.parse(localStorage.getItem("UserDetails"))
  : [];

let USER_GENDER;

const userName = document.querySelector(".contact-wrapper-name");
const userSurname = document.querySelector(".contact-wrapper-surname");
const userVector = document.querySelector(".contact-wrapper-item-image");
const userMesage = document.querySelector(".contact-wrapper-message");
const userAge = document.querySelector(".contact-wrapper-details-age");
const userGender = document.querySelector(".contact-wrapper-details-gender");
const userMail = document.querySelector(".contact-wrapper-details-mail");
console.log(userVector);

userName.innerHTML = `
 ${UserDetails[0].UserName.toUpperCase()}
`;

userSurname.innerHTML = `
 ${UserDetails[0].UserSurname.toUpperCase()}
`;

userMesage.innerHTML = `
 ${UserDetails[0].UserMesage}
`;

userAge.innerHTML = `
 ${UserDetails[0].UserAge}
`;

if (UserDetails[0].UserGender) {
  USER_GENDER = "Erkek";

  userVector.innerHTML = `
              <img
              src="img/male.png"
              />
              `;
} else {
  USER_GENDER = "Kadın";

  userVector.innerHTML = `
    <img
    src="img/female.png"
    />
    `;
}
userGender.innerHTML = `
 ${USER_GENDER}
`;

userMail.innerHTML = `
 ${UserDetails[0].UserMail}
`;
