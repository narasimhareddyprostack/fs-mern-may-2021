import Footer from "./Footer";
function Header() {
  let emp_Name = "Kavitha";
  let emp_No = 101;
  let emp_Loc = ["Bangalore", "Chennai", "Noida"];
  let emp = { fullName: "Kavitha Rai", sal: 5000 };
  return (
    <>
      <h1> Header Component - Data :{emp_Name} </h1>
      <hr />
      <Footer
        user_Name={emp_Name}
        user_Code={emp_No}
        user_Loc={emp_Loc}
        user={emp}
      />
    </>
  );
}

export default Header;
