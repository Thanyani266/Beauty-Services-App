    const btnQ = document.querySelector(".btn-ques");
    const btnQ1 = document.querySelector(".btn-ques1");
    const btnQ2 = document.querySelector(".btn-ques2");
    const textAns = document.querySelector(".txt-ans");
    const textAns1 = document.querySelector(".txt-ans1");
    const textAns2 = document.querySelector(".txt-ans2");

    const hideShowAnswer = (el, txt) => {
      el.addEventListener("click", () => {
        if(txt.style.display === "none"){
          txt.style.display = "block";
        }else{
          txt.style.display = "none";
        }
      })
    }

    hideShowAnswer(btnQ, textAns);
    hideShowAnswer(btnQ1, textAns1);
    hideShowAnswer(btnQ2, textAns2);

