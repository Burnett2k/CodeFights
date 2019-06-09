function addBorder(picture) {
    
    
    
    if (!picture || picture.length === 0) {
        return [];
    }
    //get length of first item
    let l = picture[0].length;
    //create a new array
    let result = [];
    
    //add row to top with l + 2 characters
    let horizontalBorder = "*".repeat(l + 2);
    result.push(horizontalBorder);
    
    //loop through each item, add * to beginning and end of string and then add to array
    for (let i = 0; i < picture.length; i++) {
        result.push(`*${picture[i]}*`);
    }
    
    //add row to bottom with l + 2 characters
    result.push(horizontalBorder);
    //return
    
    return result;
}
