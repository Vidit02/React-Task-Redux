export const addToCart = (data) => {
    console.log("action" , data)
    return {
        type : "ADD_DATA",
        data : data
    }
}