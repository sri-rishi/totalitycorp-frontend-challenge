const findItemInArray = (array, id) => {
    if (array.length === 0) return false;
    return array.find(item => item.id === id);
}

const totalPrice = (array) => {
    return array.reduce((total, { price, quantity }) => (total = total + price * quantity), 0).toFixed(2)
}

export { findItemInArray, totalPrice };