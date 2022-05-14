import addNotification from 'react-push-notification';
 
const Page = () => {
 

  const date = new Date();
  const showTime = date.getHours() 
      + ':' + date.getMinutes() 
      + ":" + date.getSeconds();


    const buttonClick = () => {
        addNotification({
            title: 'Morning Medicine Time',
            subtitle: 'Morning Medicine Time',
            message: "It's time to take Peracetamol",
            theme: 'darkblue',
            duration: 10000,
            soundName: 'default',
            native: true // when using native, your OS will handle theming.
        });
    };
 
    return (
      <div className="page">
        <h1 align="center">Current Time</h1>
            <h2 align="center"> {showTime}</h2>
            {showTime === "16:27:00"}
          <button onClick={buttonClick} className="button">
           Hello world.
          </button>
      </div>
    );
  }

 
export default Page;