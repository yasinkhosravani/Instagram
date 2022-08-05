const btn = document.getElementById("btn")
const tit = document.getElementById("title")
const aut = document.getElementById("author")
const com = document.getElementById("comment")
const div = document.getElementById("item");
const image_input = document.getElementById("image-input");
let reader_data = null


const saveComment = localStorage.getItem("list")
const parseComment = JSON.parse(saveComment) || []
let save = [...parseComment]
console.log(save);


image_input.addEventListener("change", function() {
    let file = image_input.files[0];

    let reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = function() {
        reader_data = reader.result
        
    };            
});


function weblogCreate(event) {
    event.preventDefault()
   
    let id ='id'+ parseInt(Math.random()*1000000);

    let comment = {
        id : id,
        title : tit.value,
        author : aut.value,
        comment : com.value,
        uploud : reader_data
    }


    save.push(comment);
    localStorage.setItem("list",JSON.stringify(save))
    location.reload();

  };
btn.addEventListener("click" , weblogCreate) 



save.forEach((list) =>{

    const d1Item = document.createElement("div")
    const d2Item = document.createElement("div")
    const d3Item = document.createElement("div")
    const dItem = document.createElement("div")
    const i1Item = document.createElement("i")
    const i2Item = document.createElement("i")
    const p1Item = document.createElement("p")
        p1Item.innerHTML =list.author
        
        
    const img2Item = document.createElement("img")
    img2Item.setAttribute("style","width: 300px; height :200px;background-position: center;background-size: cover;border: 2px black double ;border-radius: 5px; ")
        img2Item.src = list.uploud;
    const h5Item = document.createElement("h5")
        h5Item.innerHTML = list.title
    const p2Item = document.createElement("p")
        p2Item.innerHTML =list.comment
    const btnItem = document.createElement("button")
    

    // //appendChild Item


    d1Item.appendChild(i1Item);d1Item.appendChild(p1Item)
    h5Item.appendChild(btnItem);btnItem.appendChild(i2Item)
    d2Item.appendChild(h5Item);d2Item.appendChild(p2Item);
    d3Item.appendChild(img2Item)
    dItem.appendChild(d1Item);dItem.appendChild(d3Item);dItem.appendChild(d2Item);//div.appendChild(img2Item)
    div.appendChild(dItem)

    // create new comment

        // spItem.setAttribute("class","action"+i);
        // bt1Item.setAttribute("class","action"+i);
        // spItem.setAttribute("id","div"+i);
        //img2Item.setAttribute("id","display-image");



        //d3Item.setAttribute("id","uploud")
        // bt3Item.setAttribute("class","action"+i);
        // divItem.appendChild(d1Item).setAttribute("class","action"+i);
        // divItem.appendChild(d1Item).setAttribute("id",i);
        // console.log(divItem)
        

    
    

    // // classlist
        d1Item.classList.add("card-body","d-flex","ms-5")
        d2Item.classList.add("card-body","ms-5")
        i1Item.classList.add("bi","bi-person-circle","h1")
        i2Item.classList.add("bi","bi-heart")
        p1Item.classList.add("h3","ms-3","my-auto")
        d3Item.classList.add("mx-auto","text-center")   
        h5Item.classList.add("card-title")
        p2Item.classList.add("card-text")
        btnItem.classList.add("border-0","bg-white")
        dItem.classList.add("bg-white","m-2")


    // div += div
    
});
