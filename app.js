const customers = [
{
    id:1,
    name:"ماشینی کف ساده",
    img:"/assets/رنگ 4.4.jpg",
    review:"لچک ترنح کف ساده, 1200 شانه, طرح و رنگ و نقطه کامپیوتری"
   
},
{
    id:2,
    name:"پیچک",
    img:"/assets/پیچک کامل.jpg",
    review:"لچک ترنج, 50رج, طرح و رنک ونقطه کامپیوتری"  ,
},
{
    id:3,
    name:"مدرن",
    img:"/assets//مدرن نهایی.jpg",
    review: "مدرن , 50رج, طرح کاغذی ,رنگ و نقطه کامپیوتری",
},
{
    id:4,
    name:"واگیره",
    img:"/assets//واگیره سرمه ای copy.jpg",
    review:"واگیره ای, 50رج, طرح کاغذی ,رنگ و نقطه کامپیوتری"  ,
},

];

let customerPic = document.getElementById("img-1");
let customerNeam = document.getElementById("name-1");
let customerReview = document.getElementById("text-1");
let currentCustomer = 0 
const customerCunts = customers.length

function setCurrentCustomer(customer){
    customerPic.src = customer.img;
    customerNeam.innerText = customer.name;
    customerReview.innerText = customer.review;
}
document.addEventListener("DOMContentLoaded", function() {
    const firsCustomer = customers[currentCustomer ]
    setCurrentCustomer(firsCustomer)

});

const nextButton = document.getElementById("next-btn")
const backButton = document.getElementById("back-btn")


nextButton.addEventListener("click", function () {
    if(currentCustomer < customerCunts - 1){
        currentCustomer++;
        setCurrentCustomer(customers[currentCustomer]);
    }

});

backButton.addEventListener("click", function () {
    if(currentCustomer > 0 ){
        currentCustomer--;
        setCurrentCustomer(customers[currentCustomer]);
        return
    }

});
