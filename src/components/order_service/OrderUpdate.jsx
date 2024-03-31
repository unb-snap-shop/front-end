import React, { useEffect, useState } from 'react';

const OrderUpdate = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:5001/cart_updated')

    eventSource.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, newMessage.message])
      console.log("New message:", newMessage)
      // trigger a popup or update the state of application
    };

    eventSource.onerror = (error) => {
      console.error("EventSource failed:", error)
      eventSource.close()
    };

    return () => {
      eventSource.close()
    };
  }, []); // Empty dependency array, effect runs once on mount, make sure this is okay

  return (
    <div>
      {messages.length > 0 ? (
        <ul>
          {messages.map((message, index) => (
           
            <React.Fragment key={index}>
              {/* <li>{message}</li> Access the 'message' property of the object */}
  
              <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
                <p className="font-bold">Cart Update</p>
                <p className="text-sm">{message}</p>
              </div>
            </React.Fragment>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
  
}

export default OrderUpdate;
