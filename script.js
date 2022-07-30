const titleValue = document.getElementById("title");
const authorValue =  document.getElementById("author");
const descriptionValue =document.getElementById("comment");
const image_input = document.querySelector("#image-input");
const submitValue = document.getElementById("btn");
const div =document.getElementById("item");





 function weblogCreate(event) {
    event.preventDefault()

    
    
    // document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
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

        // uploud : image_input,

    }
    //Now Weblog Design
    
    const d1Item = document.createElement("div")
    const d2Item = document.createElement("div")
    const d3Item = document.createElement("div");
    const i1Item = document.createElement("i")
    const i2Item = document.createElement("i")
    const p1Item = document.createElement("p")
        p1Item.innerHTML = nowComment.author
        localStorage.setItem("lastname", nowComment.author);
        
    //const img2Item = document.createElement("div")
    const h5Item = document.createElement("h5")
        h5Item.innerHTML = nowComment.title
    const p2Item = document.createElement("p")
        p2Item.innerHTML = nowComment.comment
    const btnItem = document.createElement("button")
    

    //appendChild Item


    d1Item.appendChild(i1Item);d1Item.appendChild(p1Item)
    h5Item.appendChild(btnItem);btnItem.appendChild(i2Item)
    d2Item.appendChild(h5Item);d2Item.appendChild(p2Item);
    div.appendChild(d1Item);div.appendChild(d3Item);div.appendChild(d2Item);//div.appendChild(img2Item)
    

    // create new comment

        // spItem.setAttribute("class","action"+i);
        // bt1Item.setAttribute("class","action"+i);
        // spItem.setAttribute("id","div"+i);
         //img2Item.setAttribute("id","display-image");



         d3Item.setAttribute("id","uploud")
        // bt3Item.setAttribute("class","action"+i);
        // divItem.appendChild(d1Item).setAttribute("class","action"+i);
        // divItem.appendChild(d1Item).setAttribute("id",i);
        // console.log(divItem)
        

    
    

    // classlist
    d1Item.classList.add("card-body","d-flex","ms-5")
    d2Item.classList.add("card-body","ms-5")
    i1Item.classList.add("bi","bi-person-circle","h1")
    i2Item.classList.add("bi","bi-heart")
    p1Item.classList.add("h3","ms-3","my-auto")
    d3Item.classList.add("mx-auto")   
    h5Item.classList.add("card-title")
    p2Item.classList.add("card-text")
    btnItem.classList.add("border-0","bg-white")

    
   
    ///////////////////////////////////////
    // componnent
    ///////////////////////////////////////
    
    
    
   


    div += div

} 

submitValue.addEventListener('click' , weblogCreate) 


image_input.addEventListener("change", function() {
    const reader = new FileReader();
    //  console.log(reader);
    submitValue.addEventListener('click' , () => {
      const uploaded_image = reader.result;
        //   console.log(uploaded_image);
      
      const para = document.createElement("img");
      para.setAttribute("style","width: 300px; height :200px;background-position: center;background-size: cover;border: 2px black double ;border-radius: 5px; ")
      
      console.log(para);
      para.src = `${uploaded_image}`;
      document.getElementById("uploud").appendChild(para); 
    })
    reader.readAsDataURL(this.files[0]);
  })
