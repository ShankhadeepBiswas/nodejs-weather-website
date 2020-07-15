//const fetch = require('node-fetch');

const para1= document.querySelector('#one')
const para2= document.querySelector('#two')
const Form = document.querySelector('form');
const search =  document.querySelector('input');

Form.addEventListener('submit',(e)=>{
    e.preventDefault();
    para1.textContent='Loading...'
    para2.textContent=''
    fetch('http://localhost:4000/weather?address='+search.value).then((res)=>{
    //console.log(res);
   // console.log(res.json());
    res.json().then((data)=>{
    if(data.cod==="404"){
        para1.textContent="Unable to find location! Please try another Search";
    }else if(data.error){
        para1.textContent=data.error;
    }
    else{
        para1.textContent=search.value
        para2.textContent=data.forecast
    }
})
})
}
)