let Header = (x) => {
    
  return (
    <>
      <pre>{JSON.stringify(x)}</pre>
      <h1>Order Id :{x.four.orderId}</h1>
      <h2>Order Value:{x.four.order_Value}</h2>
    </>
  );
};
export default Header;
