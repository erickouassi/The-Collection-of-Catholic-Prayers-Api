//const data = require("./data");
const dataPrayers = require("./prayers");
const dataStations = require("./stations_of_cross");
const dataSaints = require("./saints_en");
const dataSaintsFr = require("./saints_fr");
//
// Logic behind the functionalities
var serverTime = "America/New_York"; // America/New_York /

// current datetime string inAmerica/New_York timezone
let local_datetime_str = new Date().toLocaleString("en-US", {
	timeZone: serverTime
});

// create new Date object
//let date_local = new Date(local_datetime_str);
let d = new Date(local_datetime_str);

// Months
let allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthTxt = allMonths[d.getMonth()]; // May

// year as (YYYY) format
let year = d.getFullYear();

// month as (MM) format
//let month = ("0" + (d.getMonth() + 1)).slice(-2);
let month = d.getMonth() + 1;

// date as (DD) format
//let date = ("0" + d.getDate()).slice(-2);
let date = d.getDate();

// date as (D) format
//let d_dd = d.getDate();

// date time in YYYY-MM-DD format
let today = month + "/" + date;
// "03/22"
console.log(today);

//
//let todayfull =  monthTxt +' '+ d_dd +', '+ year;   //  -> May 18, 2022
//console.log(todayfull);
//
class Controller {
	// getting all dataPrayers
	async getAllData() {
		// return all dataPrayers
		return new Promise((resolve, _) => resolve(dataPrayers));
	}
	// getting Stations of the cross
	async getStationData() {
		// return all dataPrayers
		return new Promise((resolve, _) => resolve(dataStations));
	}
	// getting Stations of the cross
	async getSaintsData() {
		// return all dataPrayers
		return new Promise((resolve, _) => resolve(dataSaints));
	}
	// getting Stations of the cross
	async getSaintsFrData() {
		// return all dataPrayers
		return new Promise((resolve, _) => resolve(dataSaintsFr));
	}

	// getting today data
	async getTodaySaintData() {
		return new Promise((resolve, reject) => {
			// get the data
			let todayData = dataSaints.filter(function(todayIn) {
				return todayIn.num_date == today;
			});
			// console.log(todayData);
			if (todayData) {
				// return the data
				resolve(todayData);
			} else {
				// return an error
				reject(`Today object not found `);
			}
		});
	}
	//
	// getting today data French
	async getTodaySaintDataFr() {
		return new Promise((resolve, reject) => {
			// get the data
			let todayData = dataSaintsFr.filter(function(todayIn) {
				return todayIn.saint_date == today;
			});
			// console.log(todayData);
			if (todayData) {
				// return the data
				resolve(todayData);
			} else {
				// return an error
				reject(`Today object not found `);
			}
		});
	}
	//
	// add below

}
module.exports = Controller;