function Footer(props) {
  return (
    <>
      <pre>{JSON.stringify(props)}</pre>
      <h1> Employee Name:{props.user_Name}</h1>
      <h2> Employee Number:{props.user_Code}</h2>
      <h3> Employee Loc:{props.user_Loc[2]}</h3>
      <h5> Employee FullName: {props.user.fullName}</h5>
    </>
  );
}
export default Footer;
