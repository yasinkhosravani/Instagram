const titleValue = document.getElementById("title");
const authorValue =  document.getElementById("author");
const descriptionValue =  document.getElementById("comment");
const uploudValue = document.getElementById("exampleFormControlFile1");
const submitValue = document.getElementById("btn");
const div =document.getElementById("item");


///////


 function weblogCreate(event) {
    event.preventDefault()

    // if
    // if(!( )){
    //   return  alt(  );
    // }else if ( ){
    //   return  alt(' );
    // }else if ( ){
    //   return  alt(' ');
    // }

    const nowComment = {

        title :  titleValue.value,
        
        author : authorValue.value,

        comment : descriptionValue.value,

        uploud : uploudValue.value,

    }
    //Now Weblog Design
    
    const d1Item = document.createElement("div")
    const d2Item = document.createElement("div")
    const img1Item = document.createElement("img")
    const p1Item = document.createElement("p")
        p1Item.innerHTML = nowComment.author
    const img2Item = document.createElement("img")
    const h5Item = document.createElement("h5")
        h5Item.innerHTML = nowComment.title
    const p2Item = document.createElement("p")
        p2Item.innerHTML = nowComment.comment
    const btnItem = document.createElement("button")
    

    //appendChild Item


    d1Item.appendChild(img1Item);d1Item.appendChild(p1Item)
    d2Item.appendChild(h5Item);d2Item.appendChild(p2Item);d2Item.appendChild(btnItem)
    div.appendChild(d1Item);div.appendChild(d2Item);div.appendChild(img2Item)
    

    // create new comment

        // spItem.setAttribute("class","action"+i);
        // bt1Item.setAttribute("class","action"+i);
        // spItem.setAttribute("id","div"+i);




        // bt3Item.setAttribute("class","action"+i);
        // divItem.appendChild(d1Item).setAttribute("class","action"+i);
        // divItem.appendChild(d1Item).setAttribute("id",i);
        // console.log(divItem)
        

    
    

    // classlist
    d1Item.classList.add("card"," mx-auto")
    d2Item.classList.add("card-body")
    img2Item.classList.add("card-img-top")
    h5Item.classList.add("card-title")
    p2Item.classList.add("card-text")
    btnItem.classList.add("btn btn-primary")


   
    ///////////////////////////////////////
    // componnent
    ///////////////////////////////////////

    
   


    div.innerHTML += div

} 







submitValue.addEventListener('click' , weblogCreate) 