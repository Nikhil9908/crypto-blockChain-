const coinModel = require('../coinModel/coinModel')
const axios = require('axios')
const { findOneAndUpdate } = require('../coinModel/coinModel')

const coinData = async function(req, res){
    try {
        let options = {
            method : 'get',
            url : 'https://api.coincap.io/v2/assets',
        }
        let result = await axios(options)
        console.log(result);
        let saveData = result.data
        let data = saveData.data
        let sortedData = data.sort((a,b)=>{b.changePercent24Hr - a.changePercent24Hr})
           await coinModel.deleteMany()
           let finalData = await coinModel.create(sortedData)
      return res.status(200).send({status: true , msg: finalData})
    } catch (error) {
        console.log(error);
        res.status(500).send({message: error.message})
    }
}

module.exports = {coinData}