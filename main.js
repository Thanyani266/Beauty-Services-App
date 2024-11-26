// Data containing faqs(questions & answers)
const data = [
  {
    id:1,
    question: "Do all Edzani memberships automatically renew?",
    answer: "Yes, all Edzani memberships automatically renew on a monthly basis after any prepaid time has ended. Prepaid time may include 1 month, 3 months, or yearly."
  },
  {
    id:2,
    question: "What is the Edzani membership?",
    answer: "The Edzani membership is the perfect way for you to get your favorite blowouts for less on a monthly basis. Plus, you can enjoy exclusive members-only perks such as a 10% discount on additional hair, nail and makeup services."
  },
  {
    id:3,
    question: "How do I purchase the Edzani membership?",
    answer: "Under the Services menu on Edzani.com or in the Edzani app, click Membership. Add the Membership option to your cart and check out to purchase."
  }
]

const faqs = document.querySelector('.faq');
let result = '';
data.forEach(question => {
result += `<div class="mb-5">
            <div class="faqs-container">
              <button type="button" class="collapsible">${question.question} <i class="fa-solid fa-plus float-end"></i></button>
              <div class="content">
                <p>${question.answer}</p>
              </div>
            </div>
          </div>`;
})
faqs.innerHTML = result;

// The function to toggle between hiding and showing the dropdown content 
const myFunction = () => {
  document.getElementById("myDropdown").classList.toggle("show");
}

function navbarToggleIcon() {
  let x = document.getElementsByClassName("mynavbar");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
  let icon=document.getElementsByClassName("fa-bars")[0];
  if(icon){
     icon.className = icon.className.replace("fa-bars", "fa-x");
  }
  else{
  icon=document.getElementsByClassName("fa-x")[0];
   icon.className = icon.className.replace("fa-x", "fa-bars");
  }
}

const collapsibleItem = document.querySelector('.collapsible');
const collapsibleItemBtn = document.querySelector('.collapsible i');

collapsibleItem.addEventListener('click', function() {
  collapsibleItemBtn.classList.toggle('fa-minus');
  collapsibleItemBtn.classList.toggle('fa-plus');
});

const coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
