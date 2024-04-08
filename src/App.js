import React, { useState, useMemo } from 'react';

function App() {
  const [number, setNumber] = useState(0);

  const handleChange = (event) => {
    const inputValue = parseInt(event.target.value);
    setNumber(inputValue);
  };

  const increaseNumber = () => {
    setNumber(number + 1);
  };

  const decreaseNumber = () => {
    setNumber(number - 1);
  };

  const squaredNumber = useMemo(() => {
    return number * number;
  }, [number]);

  //const squaredNumber = number * number;

  return (
    <div>
      <h1>Tăng/Giảm số nguyên và tính bình phương</h1>
      <p>Nhập số nguyên:</p>
      <input type="number" value={number} onChange={handleChange} />
      <p>Số nguyên: {number}</p>
      <p>Bình phương của số: {squaredNumber}</p>
      <button onClick={increaseNumber}>Tăng</button>
      <button onClick={decreaseNumber}>Giảm</button>
    </div>
  );
}

export default App;
