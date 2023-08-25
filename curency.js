const populate = async (value, currency) => {
    let  mystr="";
   url ="https://api.currencyapi.com/v3/latest?apikey=cur_live_mLwW8YlQ0rLNPuzjGgR2nMT0w8aQX96zPc4ng7KX&base_currency="+ currency ;
  let response=await fetch(url);
  let rjson= await response.json();
//   console.log(rjson);
  document.querySelector(".maintable").style.display = "block";
  for( let key of Object.keys(rjson["data"])){
        // key,rjson["data"][key]["code"],rjson["data"][key]["value"]
        mystr+=`
                <tr>
                    <td>${key}</td>
                    <td>${rjson["data"][key]["code"]}</td>
                    <td>${Math.round(rjson["data"][key]["value"]* value)}</td>
                </tr>
        
        `
  }
  const table_body = document.querySelector("tbody");
  table_body.innerHTML = mystr;
};

const btn = document.querySelector(".btn");
btn.addEventListener('click', (e) => {
  e.preventDefault();
//   console.log("Btn is Clicked");
  const value = parseInt(document.querySelector("input[name='quantity']").value);
  const currency = document.querySelector("select[name='currency']").value;
  populate(value, currency);
});

