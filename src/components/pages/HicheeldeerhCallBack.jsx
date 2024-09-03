const Callback = () => {
  const orderPizza = (name, callback) => {
    console.log("zahialgiig huleen awlaa");
    let message = `Tanii ${name} pizza belen bolloo`;
    callback(message);
  };

  const printdDelivery = (message) => {
    console.log(message);
  };

  orderPizza("Mahand durlagsad", printdDelivery);

  return <div>Callback page</div>;
};

export default Callback;
