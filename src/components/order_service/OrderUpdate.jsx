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
      <h2>Cart Updates</h2>
      {messages.length > 0 ? (
        <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li> // Access the 'message' property of the object
        ))}
        </ul>
      ) : (
        <p>No new updates</p>
      )}
    </div>
  )
}

export default OrderUpdate;
