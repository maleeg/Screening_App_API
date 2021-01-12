class Guest {
  constructor(
    GuestID,
    Firstname,
    Lastname,
    IdNumber,
    Age,
    Gender,
    NameOfCompany,
    CompanyID,
    JobCategory,
    Province,
    District,
    Telephone
  ) {
    this.GuestID = GuestID;
    this.Firstname = Firstname;
    this.Lastname = Lastname;
    this.IdNumber = IdNumber;
    this.Age = Age;
    this.Gender = Gender;
    this.NameOfCompany = NameOfCompany;
    this.CompanyID = CompanyID;
    this.JobCategory = JobCategory;
    this.Province = Province;
    this.District = District;
    this.Telephone = Telephone;
  }
}

module.exports = Guest;
