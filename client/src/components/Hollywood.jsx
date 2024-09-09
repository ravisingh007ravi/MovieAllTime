import React, { useState } from 'react';

function Hollywood() {

  const [number, setNumber] = useState('');
  const [isPrime, setIsPrime] = useState(null);

  const checkPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPrime(checkPrime(number));
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h1 className="text-2xl font-bold mb-4 text-center">Prime Number Checker</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter a number"
            className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Check Prime
          </button>
        </form>
        {isPrime !== null && (
          <p className="mt-4 text-center text-xl font-semibold">
            {isPrime ? `${number} is a prime number` : `${number} is not a prime number`}
          </p>
        )}
      </div>
    </div>
    </div>
  )
}

export default Hollywood
