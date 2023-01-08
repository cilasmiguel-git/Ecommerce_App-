//For add item to car

export const addCart = (product) => {
    return  {
        type:"ADDITEM",
        payload:product
    }
}

//For item item from car

export const delCart = (product) => {
    return  {
        type:"DELITEM",
        payload:product
    }
}