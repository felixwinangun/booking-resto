const getTime = () => {
    let today = new Date()
    return today.toLocaleDateString("en-US")
}
module.exports = getTime