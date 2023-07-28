const handleChangeCurrency = (data) => {
    // console.log("Currency Change", data);
    return {
        type: 'CURRENCY',
        payload: data
    }
}
export default handleChangeCurrency;