function showAnswer(e){
    
    let allQ = document.getElementsByClassName("question-group");

    for(let i = 0;i < 5; i++){

        if(allQ[i] != e){
            
            allQ[i].children[1].classList.add("none");
            allQ[i].children[0].children[0].classList.remove("p-question-2");
            allQ[i].children[0].children[1].classList.remove("arrow-rot");
        }
    }

    e.children[1].classList.toggle("none");
    e.children[0].children[0].classList.toggle("p-question-2");
    e.children[0].children[1].classList.toggle("arrow-rot");
}