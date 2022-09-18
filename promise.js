const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async(emosi) => {
  let IXX = await promiseTheaterIXX();
  let VGC = await promiseTheaterVGC();

  const hitungemosi = 
    IXX.filter((emosiIXX) => emosiIXX.hasil === emosi).length + VGC.filter((emosiVGC) => emosiVGC.hasil === emosi).length;
    return hitungemosi; 
}

module.exports = {
  promiseOutput,
};

