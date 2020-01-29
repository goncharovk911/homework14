function massa (linkFetch) {
    


function table(jsonProperty, jsonValue) {
   
    let fer = ''
    
    
    if(typeof jsonValue != "string"){
        newTable.push('<tr style ="display: block-inline"; width: 100px;><td style =" border: 1px solid black; padding: 10px 30px; margin:20px 20px; width: 100px; ">'
    + jsonProperty +
    '</td><td style =" border: 1px solid black; padding: 10px 30px; margin:20px 20px; width: 100px; ">'
    +  ArrLink() +
    '</td></tr></div>')
}else {
        if (jsonValue.startsWith( "https") ){
            
            newTable.push('<tr style ="display: block-inline"; width: 100px;><td style =" border: 1px solid black; padding: 10px 30px; margin:20px 20px; width: 100px; ">'
            + jsonProperty +
            '</td><td style =" border: 1px solid black; padding: 10px 30px; margin:20px 20px; width: 100px; "><button id="a" onclick  = massa(\''+jsonValue' +'/');>'
            + jsonValue  +
            '</td></tr></div>')
           console.log(jsonValue);
           
            
    
            

        }
            else{
                newTable.push('<tr style ="display: block-inline"; width: 100px;><td style =" border: 1px solid black; padding: 10px 30px; margin:20px 20px; width: 100px; ">'
                + jsonProperty +
                '</td><td style =" border: 1px solid black; padding: 10px 30px; margin:20px 20px; width: 100px; ">'
                + jsonValue +
                '</td></tr></div>')
            }
    }
    function ArrLink(){
        
        for(let der in jsonValue){
          fer += '<button onclick  = massa(jsonValue[der])>' +jsonValue[der] +'<br>'
          console.log(typeof jsonValue[der]);
          
        }
        return fer
    }
    
     
}

let newTable = ['<table>']
let person = fetch(linkFetch)
let user = person.then(res => res.json())
            user.then(luke => {
                
                for(let elem in luke){
                    table(elem, luke[elem])
                    
                }
                newTable.push('</table>')
                document.getElementById('star').innerHTML = newTable.join('\n')
                }
            )
}

  

massa('https://swapi.co/api/people/1/')
