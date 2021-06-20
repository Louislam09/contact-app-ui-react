const formatData = (data:any): any => {
    console.log(data)
    console.log(JSON.stringify(data))
    return JSON.parse(JSON.stringify(data))
}

export default formatData;