let heroContainer=document.getElementById("heroContainer")

let anakin={
    name:"Anakin Skywalker",
    lightsaberSkill:50,
    img:"images/anakin.png",
    ability:function(){
        document.body.style.backgroundImage="url(images/anakinability.gif)"
    }
}


let dooku={
    name:"Count Dooku",
    lightsaberSkill:49,
    img:"images/dooku.png",
    ability: function(){
        document.body.style.backgroundImage="url(images/dookuability.gif)"
    }
}

let vader={
    name:"Darth Vader",
    lightsaberSkill:40,
    img:"images/vader.png",
    ability: function(){
        document.body.style.backgroundImage="url(images/vaderability.gif)"
    }
}

let luke={
    name:"Luke Skywalker",
    lightsaberSkill:35,
    img:"images/luke.png",
    ability: function(){
        document.body.style.backgroundImage="url(images/lukeability.gif)"
    }
}

let heroArr=[anakin,dooku,vader,luke]

for(let i=0;i<heroArr.length;i++){
    let newDiv=document.createElement("div")

    let newHeader=document.createElement("h1")
    newHeader.innerHTML=heroArr[i].name

    let newPic=document.createElement("img")
    newPic.src=heroArr[i].img

    let newP=document.createElement("P")
    newP.innerHTML="Combat Skill: "+heroArr[i].lightsaberSkill+" out of 50"

    let newButton=document.createElement("button")
    newButton.innerHTML="Ability"

    newButton.onclick=heroArr[i].ability

    newDiv.appendChild(newHeader)
    newDiv.appendChild(newPic)
    newDiv.appendChild(newP)
    newDiv.appendChild(newButton)




    heroContainer.appendChild(newDiv)
}