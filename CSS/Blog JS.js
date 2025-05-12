const introduction = document.querySelector("h2#introduce");

function helloVisitor() {
    var name = prompt("방문자의 이름을 입력해주세요");
    if (name !== null && name !== "") {    
        introduction.innerText = `${name}님! 저의 블로그에 와주셔서 감사합니다!`;
        introduction.style.color="blue";
    } else {
        alert("이름이 입력되지 않았습니다");
    }
}

introduction.addEventListener("click", helloVisitor);