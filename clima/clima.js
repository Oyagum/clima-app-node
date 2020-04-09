const axios = require('axios');
const apiKey = '0b245b89247c4cd0a790dc90d8c5ac3b';

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}