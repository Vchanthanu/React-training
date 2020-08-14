const Addfirstname = function (firstname) {
    // console.log(firstname)
    return (
        {
            type: "ADD_FIRST",
            payload: firstname
        }
    )
}

export default Addfirstname;