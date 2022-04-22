const openRedaction = document.getElementById("openRedaction")
const redactionHTML = document.getElementById("redaction")
const main__obert = document.querySelector(".main__obert")
const surnameJS = document.querySelector(".surnameJS")
const surnameHTML = document.querySelector("#surname")
const nameHTML = document.querySelector("#name")
const nameJS = document.querySelector("nameJS")
const descriptionJS = document.querySelector('.descriptionJS')
const discriptionSpan = document.getElementById("discriptionSpan")
const errorHTML = document.querySelectorAll(".error")
const birthdayJS = document.querySelector(".birthdayJS")
const birthday__date = document.querySelector(".birthday__date")
const familyJS = document.querySelector("familyJS")
const family__text = document.querySelector(".family__text")
const obertJS =document.querySelector(".obertJS")

//замена main
redactionHTML.addEventListener("click", ()=>{
    main__obert.innerHTML = `<div class="obertJS">
    <div class="showRedact">
        <a href="./user.html" id="closeRedaction">X</a>
    <p id="openRedaction">V</p>
    </div>
    <div class="photoJS">
        <div class="imgJS">
            <img src="../img/avatar.png">
        </div>
    </div>
    <div class="informationJS">
        <p>фамилия</p>
        <input type="text" class="surnameJS" maxlength="20">
        <span class="error"></span>
        <p>Имя</p>
        <input type="text" class="nameJS" maxlength="15">
        <span class="error"></span>
        <p>мини описание</p>
        <input type="text" class="descriptionJS" maxlength="60">
        <span class="error"></span>
        <p>день рождение</p>
        <input type="date" class="birthdayJS" maxlength="8">
        <span class="error"></span>
        <p>семейное положние</p>
        <select name="" class="familyJS">
            <option value=""не выбрано>Выбрать</option>
            <option value="не женат">не женат</option>
            <option value="есть подруга">есть подруга</option>
            <option value="влюблен">влюблен</option>
            <option value="в браке"> в браке</option>
            <option value="в активном поиске">в активном поиске</option>
        </select>
        <span class="error"></span>
    </div>
</div>`
})



function checkSurname() {
    console.log(check(surnameJS, 20));
    if (surnameJS.value != "") {
        surnameHTML.innerHTML = surnameJS.value 
        return true
    } else{
        errorHTML[0].innerHTML = 'количество символов должно быть минимум 1'
        return false
    }
}

function chekName() {
    if (nameJS.value != "") {
        nameHTML.innerHTML = nameJS.value
        return true
    } else{
        errorHTML[1].innerHTML = 'это поле не заполненно'
        return false
    }
}
function checkDiscription() {
    if (descriptionJS.value != "") {
        discriptionSpan.innerHTML = descriptionJS.value
        return true
    } else{
        errorHTML[2].innerHTML = 'это поле не заполненно'
        return false
    }
}
function checkBirthday() {
    if (birthdayJS.value != "") {
        birthday__date.innerHTML = birthdayJS.value
        return true
    } else {
        errorHTML[2].innerHTML = 'это поле не заполненно'
        return false
    }
}
function checkFamily() {
    if (familyJS.value != "") {
        family__text.innerHTML = familyJS.value
        return true
    }
}

// openRedaction.addEventListener("click", ()=>{
//     if ( checkSurname()== true && chekName()==true && checkDiscription()==true && checkBirthday()==true &&  checkFamily()==true) {
//         obertJS.innerHTML = `<div class="main__obert">
//         <div class="photo">
//             <div class="img__obert">
//                 <img src="../img/avatar.png">
//             </div>
//             <a href="#" id="redaction">редактировать</a>
//         </div>
//         <div class="information">
//             <div class="main__information">
//                     <p> <span id="surname">фамилия</span> <span id="name">Имя</span></p>
//                     <p class="discription">мини описание: <span id="discriptionSpan"></span></p>
//                     <p id="online">online</p>
//             </div>
//             <div class="information__name">
//                 <div class="birthday">
//                     <p>день рождение:</p>
//                     <p class="birthday__date">00.00.00</p>
//                 </div>
//                 <div class="family">
//                     <p>семейное положние:</p>
//                     <p class="family__text">не указано</p>
//                 </div>
//                 <div class="school">
//                     <p>образование:</p>
//                     <p class="school__text">не указано</p>
//                 </div>
//             </div>
//         </div>
//     </div>`
//     } else{
//         checkSurname()
//         chekName()
//         checkDiscription()
//         checkBirthday()
//     }
// })

    console.log(openRedaction); 
openRedaction.addEventListener("click", ()=>{
    console.log(1);
})
