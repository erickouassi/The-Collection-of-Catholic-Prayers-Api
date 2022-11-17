
//const data = require("./data");
const dataPrayers = require("./prayers");
const dataStations = require("./stations_of_cross");
const dataSaints = require("./saints_feasts");
const dataSaintsFr = require("./saints_french");

class Controller {
    // getting all dataPrayers
    async getAllData() {
      // return all dataPrayers
      return new Promise((resolve, _) => resolve(dataPrayers));
    }
    // getting Stations of the cross
  async getStationData() {
    // return all dataPrayers
    return new Promise((resolve, _) => resolve( dataStations));
  }
 // getting Stations of the cross
 async getSaintsData() {
    // return all dataPrayers
    return new Promise((resolve, _) => resolve( dataSaints));
  }
// getting Stations of the cross
async getSaintsFrData() {
    // return all dataPrayers
    return new Promise((resolve, _) => resolve( dataSaintsFr));
  }
// add below

  }
  module.exports = Controller;