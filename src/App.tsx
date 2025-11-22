import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Country = {
  cca3: string;
  name: { common: string };
  capital?: string[];
  region: string;
  flags: { png: string };
};

const App: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
   axios.get<Country[]>('https://restcountries.com/v3.1/all?fields=name,capital,region,flags,cca3')
  .then(res => setCountries(res.data))
  .catch(err => console.error('Error fetching countries:', err));

  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen  p-4 sm:p-6">
      <h1 className="text-3xl font-bold text-center mb-4">🌍 Countries</h1>

  
      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Search country..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

    
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {filteredCountries.map((country) => (
    <div
      key={country.cca3}
      className="bg-white rounded-lg shadow p-4 hover:scale-105 transition-transform"
    >
      <img
        src={country.flags.png}
        alt={`${country.name.common} flag`}
      className="w-full h-28 sm:h-40 object-cover rounded"
      />
      <h2 className="text-xl font-semibold mt-2">{country.name.common}</h2>
      <p className="text-sm text-gray-600">Capital: {country.capital?.[0] || 'N/A'}</p>
      <p className="text-sm text-gray-600">Region: {country.region}</p>
    </div>
  ))}
</div>


      {filteredCountries.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No countries match your search.</p>
      )}
    </div>
  );
};

export default App;
