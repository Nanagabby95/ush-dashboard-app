const Greeter = () => {
  const currentHour = new Date().getHours();
  let greeting = '';

  if (currentHour >= 5 && currentHour < 12) {
    greeting = 'Good morning🤗';
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = 'Good afternoon😎';
  } else if (currentHour >= 18 && currentHour < 22) {
    greeting = 'Good evening😊';
  } else {
    greeting = 'Good night😴';
  }

  return (
    <div>
      <p className="text-white">{greeting}</p>
    </div>
  );
};

export default Greeter;
