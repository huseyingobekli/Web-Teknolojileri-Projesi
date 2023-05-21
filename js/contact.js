const switchButton = document.querySelector("#on-off");
const formWrapper = document.querySelector(".formmain");

switchButton.addEventListener("click", () => {
  formWrapper.classList.toggle("active");
});

function formControl() {
  const formName = document.querySelector("#isim");
  const formNameWrapper = document.querySelector(".form-name");
  const formSurName = document.querySelector("#soyisim");
  const formSurameWrapper = document.querySelector(".form-surname");
  const formMail = document.querySelector("#mail");
  const formMailWrapper = document.querySelector(".form-mail");
  const formAge = document.querySelector("#yas");
  const formAgeWrapper = document.querySelector(".form-age");
  const formGenderMale = document.querySelector("#erkek");
  const formGenderFemale = document.querySelector("#kadın");
  const formGenderwrapper = document.querySelector(".form-gender");
  const formMesage = document.querySelector("#mesage");
  const formMesagewrapper = document.querySelector(".form-mesage");
  const formButton = document.querySelector("#contact-form-submit-button");
  const formButtons = document.querySelector(".form-buttons");

  formButtons.addEventListener("mousemove", (e) => {
    if (formName.value === "") {
      formNameWrapper.classList.add("active");
    } else {
      formNameWrapper.classList.remove("active");
    }
    if (formSurName.value === "") {
      formSurameWrapper.classList.add("active");
    } else {
      formSurameWrapper.classList.remove("active");
    }
    if (formMail.value === "") {
      formMailWrapper.classList.add("active");
    } else {
      formMailWrapper.classList.remove("active");
    }
    if (formAge.options[formAge.selectedIndex].text === "Seçiniz") {
      formAgeWrapper.classList.add("active");
    } else {
      formAgeWrapper.classList.remove("active");
    }
    if (formGenderMale.checked || formGenderFemale.checked) {
      formGenderwrapper.classList.remove("active");
    } else {
      formGenderwrapper.classList.add("active");
    }
    if (formMesage.value === "") {
      formMesagewrapper.classList.add("active");
    } else {
      formMesagewrapper.classList.remove("active");
    }
  });

  formName.addEventListener("input", (e) => {
    if (e.target.value === "") {
      formNameWrapper.classList.add("active");
    } else {
      formNameWrapper.classList.remove("active");
    }
  });

  formSurName.addEventListener("input", (e) => {
    if (e.target.value === "") {
      formSurameWrapper.classList.add("active");
    } else {
      formSurameWrapper.classList.remove("active");
    }
  });

  formMail.addEventListener("input", (e) => {
    if (e.target.value === "") {
      formMailWrapper.classList.add("active");
    } else {
      formMailWrapper.classList.remove("active");
    }
    if (e.target.value.search("@") === -1) {
      console.log("icermiyor");
      formMailWrapper.classList.add("active2");
    } else {
      console.log("iceriyor");
      formMailWrapper.classList.remove("active2");
    }
  });

  formAge.addEventListener("click", (e) => {
    if (formAge.options[formAge.selectedIndex].text === "Seçiniz") {
      formAgeWrapper.classList.add("active");
    } else {
      formAgeWrapper.classList.remove("active");
    }
  });

  formGenderMale.addEventListener("click", (e) => {
    if (formGenderMale.checked) {
      formGenderwrapper.classList.remove("active");
    } else {
      formGenderwrapper.classList.add("active");
    }
  });
  formGenderFemale.addEventListener("click", (e) => {
    if (formGenderFemale.checked) {
      formGenderwrapper.classList.remove("active");
    } else {
      formGenderwrapper.classList.add("active");
    }
  });

  formMesage.addEventListener("input", (e) => {
    if (e.target.value === "") {
      formMesagewrapper.classList.add("active");
    } else {
      formMesagewrapper.classList.remove("active");
    }
  });

  let allInvalids = document
    .getElementById("contact-form")
    .querySelectorAll(":invalid");

  console.log(allInvalids);

  if (allInvalids.length === 0) {
    formButton.removeAttribute("disabled");
    formButton.style.cursor = "pointer";
  } else {
    formButton.setAttribute("disabled", "disabled");
    formButton.style.cursor = "no-drop";
  }

  formButton.addEventListener("click", (e) => {
    e.preventDefault();
    let UserName;
    let UserSurname;
    let UserMail;
    let UserAge;
    let UserGender;
    let UserMesage;

    let UserDetails = [];

    UserDetails.push({
      UserName: formName.value,
      UserSurname: formSurName.value,
      UserMail: formMail.value,
      UserGender: formGenderMale.checked,
      UserAge: formAge.options[formAge.selectedIndex].text,
      UserMesage: formMesage.value,
    });
    localStorage.setItem("UserDetails", JSON.stringify(UserDetails));
    window.location.href = "contactdetails.html";
  });
}
formControl();
