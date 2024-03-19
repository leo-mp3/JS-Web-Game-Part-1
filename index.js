function newImage (url, left, bottom) {
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + `px`
    object.style.bottom = bottom + `px`
    document.body.append(object)
    return object
}
function newItem (url, left, bottom){
    let object = newImage(url,left,bottom)
    // object.src = url
    // object.style.position = 'fixed'
    // object.style.left = left + 'px'
    // object.style.bottom = bottom + 'px'
    // document.body.append(object)
    object.addEventListener('dblclick', () => {
        object.remove()
    });
    
}
function backGround(url, bottom) {
    for(let x = 0; x < 5; x++){

        for (let i = 0; i < 20; i++) {
            let backGroundLeft = i * 100;  
            let backGroundBottom = x * 100 + bottom;  
            
            newImage(url, backGroundLeft, backGroundBottom);  
        }
    }
}
backGround('assets/sky.png', 500)
backGround('assets/grass.png', 0)
newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)
newItem(`assets/sword.png`, 500, 405)
newItem(`assets/shield.png`, 165, 185)
newItem(`assets/staff.png`, 600, 100)