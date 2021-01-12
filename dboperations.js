var config = require("./dbconfig");
const sql = require("mssql");
const moment = require("moment");

async function getGuests() {
  try {
    let pool = await sql.connect(config);
    let guests = await pool
      .request()
      .query("SELECT * FROM [DFA_COVIDAppDB].[dbo].[ Guests]");
    return guests.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getGuest(guestId) {
  try {
    let pool = await sql.connect(config);
    let product = await pool
      .request()
      .input("input_parameter", sql.Int, guestId)
      .query(
        "SELECT * FROM [DFA_COVIDAppDB].[dbo].[ Guests] where GuestID = @input_parameter"
      );
    return product.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function addGuest(guest) {
  try {
    let pool = await sql.connect(config);
    let createdDate = moment()
      .utcOffset("+02:00")
      .format("MM DD YYYY, h:mm:ss");
    let ModifiedDate = moment()
      .utcOffset("+02:00")
      .format("MM DD YYYY, h:mm:ss");
    let insertGuest = await pool
      .request()
      .input("Firstname", sql.NVarChar, guest.Firstname)
      .input("Lastname", sql.NVarChar, guest.Lastname)
      .input("IdNumber", sql.Int, guest.IdNumber)
      .input("Age", sql.Int, guest.Age)
      .input("Gender", sql.NVarChar, guest.Gender)
      .input("NameOfCompany", sql.NVarChar, guest.NameOfCompany)
      .input("CompanyID", sql.NVarChar, guest.CompanyID)
      .input("JobCategory", sql.NVarChar, guest.JobCategory)
      .input("Province", sql.NVarChar, guest.Province)
      .input("District", sql.NVarChar, guest.District)
      .input("Telephone", sql.NVarChar, guest.Telephone)
      .query(
        `INSERT INTO [DFA_COVIDAppDB].[dbo].[ Guests] VALUES (@Firstname, @Lastname, @IdNumber, @Age, @Gender, @NameOfCompany, @CompanyID, @JobCategory, @Province, @District, @Telephone)`
      );
    return insertGuest.recordsets;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getGuests: getGuests,
  getGuest: getGuest,
  addGuest: addGuest,
};
