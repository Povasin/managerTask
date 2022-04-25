
const redactionHTML = document.getElementById("redaction")
const main__obert = document.querySelector(".main__obert")
let surnameJS = null
const surnameHTML = document.querySelector("#surname")
const nameHTML = document.querySelector("#name")
let nameJS = null
let descriptionJS = null
const discriptionSpan = document.getElementById("discriptionSpan")
let errorHTML = null
let birthdayJS = null
const birthday__date = document.querySelector(".birthday__date")
let familyJS = null
const family__text = document.querySelector(".family__text")
let obertJS = null
let openRedaction = null



//замена main
redactionHTML.addEventListener("click", () => {
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
    openRedaction = document.getElementById("openRedaction")
    surnameJS = document.querySelector(".surnameJS")
    nameJS = document.querySelector(".nameJS")
    descriptionJS = document.querySelector('.descriptionJS')
    birthdayJS = document.querySelector(".birthdayJS")
    errorHTML = document.querySelectorAll(".error")
    familyJS = document.querySelector("familyJS")
    obertJS = document.querySelector(".obertJS")
    openRedaction.addEventListener("click", () => {
        if (checkCount(surnameJS, surnameHTML, 0) == true && checkCount(nameJS, nameHTML, 1) == true && checkCount(descriptionJS, discriptionSpan, 2) == true && checkCount(birthdayJS, birthday__date, 3) == true && checkCount(familyJS, family__text, 4) == true) {
            obertJS.innerHTML = `<div class="main__obert">
            <div class="photo">
                <div class="img__obert">
                    <img src="../img/avatar.png">
                </div>
                <a href="#" id="redaction">редактировать</a>
            </div>
            <div class="information">
                <div class="main__information">
                        <p> <span id="surname">фамилия</span> <span id="name">Имя</span></p>
                        <p class="discription">мини описание: <span id="discriptionSpan"></span></p>
                        <p id="online">online</p>
                </div>
                <div class="information__name">
                    <div class="birthday">
                        <p>день рождение:</p>
                        <p class="birthday__date">00.00.00</p>
                    </div>
                    <div class="family">
                        <p>семейное положние:</p>
                        <p class="family__text">не указано</p>
                    </div>
                    <div class="school">
                        <p>образование:</p>
                        <p class="school__text">не указано</p>
                    </div>
                </div>
            </div>
        </div>`
        } else {
            checkCount(surnameJS, surnameHTML, 0)
            checkCount(nameJS, nameHTML, 1)
            checkCount(descriptionJS, discriptionSpan, 2)
            checkCount(birthdayJS, birthday__date, 3)
            checkCount(familyJS, family__text, 4)
        }
    })
})

//проверка полей
function checkCount(inputJS, inputHTML, index) {
    //не может прочитать value
    if (inputJS.value != "") {
        inputHTML.innerHTML = inputJS.value
        errorHTML[index].innerHTML = ''
        return true
    } else {
        errorHTML[index].innerHTML = 'это поле не заполнено'
        return false
    }
}






