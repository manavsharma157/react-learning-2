import React from "react";

export default function Ticket() {
  let [ticket, setTicket] = React.useState([]);

  let generateTicket = () => {
    let newTicket = [];
    while (newTicket.length < 3) {
      let randNum = Math.floor(Math.random() * 10);
      newTicket.push(randNum);
    }
    console.log(newTicket);
    setTicket(newTicket); // replace with new array
  };

  // calculate sum of ticket
  let sum = ticket.reduce((acc, num) => acc + num, 0);

  return (
    <div>
      <h1>Lottery Generator</h1>
      <h3>Lottery Ticket = {ticket.length > 0 ? ticket : " ?"}</h3>

      {/* Show win message if sum is 15 */}
      {ticket.length > 0 && (
        <h4>{sum === 15 ? <h2>🎉 You Win!</h2> : "Try Again 😅"}</h4>
      )}


      <button onClick={generateTicket}>Generate Ticket</button>
    </div>
  );
}
