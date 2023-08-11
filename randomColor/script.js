const hexChar = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

getChar = (i)=>{
    return hexChar[i];
}

getRandomColor = (color) => {
    let hexColor = "#";

    for(let i = 0; i < 6; i++)
    {
        const random = Math.floor(Math.random()*hexChar.length);
        hexColor += getChar(random);
    }

    return hexColor;
}

changeBackgroundColor = (colorchange) =>{
    let newcol = getRandomColor();
    document.body.style.background = newcol;
}
