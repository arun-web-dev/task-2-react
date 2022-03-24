import React, { useState, useEffect } from "react";

export const FunctionalComponent = () => {
  const [time, setTime] = useState(
    new Date().toString().split("GMT+0530 (India Standard Time)")
  );
  const showDate = () => {
    setTime(new Date().toString().split("GMT+0530 (India Standard Time)"));
  };

  useEffect(() => {
    const interval = setInterval(showDate, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <div class="functional-component-container">
      <h1>Functional Component</h1>
      <p>{time}</p>
      <h1>React.JS History</h1>
      <p>
        React, sometimes referred to as a frontend JavaScript framework, is a
        JavaScript library created by Facebook. React is a tool for building UI
        components.
      </p>
      <p> Current version of React.JS is V17.0.2 (August 2021).</p>
      <p>Initial Release to the Public (V0.3.0) was in July 2013. </p>
      <p>React.JS was first used in 2011 for Facebook's Newsfeed feature.</p>
      <p> Facebook Software Engineer, Jordan Walke, created it.</p>
      <p> Current version of create-react-app is v4.0.3 (August 2021).</p>
      <p>
        create-react-app includes built tools such as webpack, Babel, and
        ESLint.
      </p>
    </div>
  );
};
