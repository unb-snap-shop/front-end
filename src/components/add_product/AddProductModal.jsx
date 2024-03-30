import React, { useState } from 'react'
import axios from "axios"

const AddProductModal = ({ onClose }) => {
  const [selectedType, setSelectedType] = useState('');
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    price: '',
  });

  const handleTypeChange = (e) => {
    const type = e.target.value;
    setSelectedType(type);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleClick = async () => {
    try {
      let specifications = {};
  
      if (selectedType === 'CPU') {
        specifications = {
          cores: formData.cores,
          threads: formData.threads,
          baseClock: formData.baseClock,
          boostClock: formData.boostClock,
          tdp: formData.tdp,
        };
      } else if (selectedType === 'GPU') {
        specifications = {
          memory: formData.memory,
          boostClock: formData.boostClock,
          tdp: formData.tdp,
        };
      } else if (selectedType === 'Motherboard') {
        specifications = {
          chipset: formData.chipset,
          memory: formData.memory,
          formFactor: formData.formFactor,
        };
      } else if (selectedType === 'RAM') {
        specifications = {
          memoryType: formData.memoryType,
          speed: formData.speed,
          modules: formData.modules,
          latency: formData.latency,
        };
      } else if (selectedType === 'Storage') {
        specifications = {
          storageType: formData.storageType,
          formFactor: formData.formFactor,
          interface: formData.interface,
          rpm: formData.rpm,
          cache: formData.cache,
        };
      }
  
      const response = await axios.post("http://localhost:5000/create_component", {
        type: selectedType,
        brand: formData.brand,
        model: formData.model,
        specifications: specifications,
        price: formData.price,
      });
      console.log(selectedType)
      console.log("Create component response:", response.data);
    } catch (error) {
      console.log(selectedType)
      console.error("Error creating component:", error);
    }
  };
  
  

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await handleClick();
    //resetform
    setFormData({
      brand: '',
      model: '',
      price: '',
    });
    
    onClose();
  };

  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" id="backdrop" onClick={onClose}>
      <div className="flex justify-center items-center h-full" onClick={handleModalContentClick}>
        <div className="relative bg-white rounded-lg shadow p-6 mx-auto my-8" style={{ width: '32rem' }}>
          <div className="flex justify-between items-start p-2 rounded-t border-b">
            <h3 className="text-xl font-semibold">Create New Product</h3>
            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5" onClick={onClose}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-6">
            <div className="mb-4">
              <label htmlFor="type" className="block mb-2 text-sm font-medium">Type</label>
              <select id="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={selectedType} onChange={handleTypeChange}>
                <option value="">Select Type</option>
                <option value="CPU">CPU</option>
                <option value="GPU">GPU</option>
                <option value="Motherboard">Motherboard</option>
                <option value="RAM">RAM</option>
                <option value="Storage">Storage</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="brand" className="block mb-2 text-sm font-medium">Brand</label>
              <input type="text" id="brand" name="brand" value={formData.brand} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            </div>
            <div className="mb-4">
              <label htmlFor="model" className="block mb-2 text-sm font-medium">Model</label>
              <input type="text" id="model" name="model" value={formData.model} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block mb-2 text-sm font-medium">Price</label>
              <input type="number" id="price" name="price" value={formData.price} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            </div>
            {selectedType === 'CPU' && (
              <>
                <div className="mb-4">
                  <label htmlFor="cores" className="block mb-2 text-sm font-medium">Cores</label>
                  <input type="number" id="cores" name="cores" value={formData.cores} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>
                <div className="mb-4">
                  <label htmlFor="threads" className="block mb-2 text-sm font-medium">Threads</label>
                  <input type="number" id="threads" name="threads" value={formData.threads} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>
                <div className="mb-4">
                  <label htmlFor="baseClock" className="block mb-2 text-sm font-medium">Base Clock</label>
                  <input type="number" id="baseClock" name="baseClock" value={formData.baseClock} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>
                <div className="mb-4">
                  <label htmlFor="boostClock" className="block mb-2 text-sm font-medium">Boost Clock</label>
                  <input type="number" id="boostClock" name="boostClock" value={formData.boostClock} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>
                <div className="mb-4">
                  <label htmlFor="tdp" className="block mb-2 text-sm font-medium">TDP</label>
                  <input type="number" id="tdp" name="tdp" value={formData.tdp} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>
              </>
            )}
            {selectedType === 'GPU' && (
              <>
                <div className="mb-4">
                  <label htmlFor="memory" className="block mb-2 text-sm font-medium">Memory</label>
                  <input type="text" id="memory" name="memory" value={formData.memory} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>
                <div className="mb-4">
                  <label htmlFor="boostClock" className="block mb-2 text-sm font-medium">Boost Clock</label>
                  <input type="text" id="boostClock" name="boostClock" value={formData.boostClock} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>
                <div className="mb-4">
                  <label htmlFor="tdp" className="block mb-2 text-sm font-medium">TDP</label>
                  <input type="text" id="tdp" name="tdp" value={formData.tdp} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>
              </>
            )}


            {selectedType === 'Motherboard' && (
              <>
                <div className="mb-4">
                  <label htmlFor="chipset" className="block mb-2 text-sm font-medium">Chipset</label>
                  <input type="text" id="chipset" name="chipset" value={formData.chipset} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>
                <div className="mb-4">
                  <label htmlFor="memory" className="block mb-2 text-sm font-medium">Memory</label>
                  <input type="text" id="memory" name="memory" value={formData.memory} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>
                <div className="mb-4">
                  <label htmlFor="formFactor" className="block mb-2 text-sm font-medium">Form Factor</label>
                  <input type="text" id="formFactor" name="formFactor" value={formData.formFactor} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>
              </>
            )}
            {selectedType === 'RAM' && (
              <>
                <div className="mb-4">
                  <label htmlFor="memoryType" className="block mb-2 text-sm font-medium">Memory Type</label>
                  <input type="text" id="memoryType" name="memoryType" value={formData.memoryType} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>
                <div className="mb-4">
                  <label htmlFor="speed" className="block mb-2 text-sm font-medium">Speed</label>
                  <input type="text" id="speed" name="speed" value={formData.speed} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>
                <div className="mb-4">
                  <label htmlFor="modules" className="block mb-2 text-sm font-medium">Modules</label>
                  <input type="text" id="modules" name="modules" value={formData.modules} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>
                <div className="mb-4">
                  <label htmlFor="latency" className="block mb-2 text-sm font-medium">Latency</label>
                  <input type="text" id="latency" name="latency" value={formData.latency} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>
              </>
            )}
            {selectedType === 'Storage' && (
              <>
                <div className="mb-4">
                  <label htmlFor="storageType" className="block mb-2 text-sm font-medium">Storage Type</label>
                  <input type="text" id="storageType" name="storageType" value={formData.storageType} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>
                <div className="mb-4">
                  <label htmlFor="formFactor" className="block mb-2 text-sm font-medium">Form Factor</label>
                  <input type="text" id="formFactor" name="formFactor" value={formData.formFactor} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>
                <div className="mb-4">
                  <label htmlFor="interface" className="block mb-2 text-sm font-medium">Interface</label>
                  <input type="text" id="interface" name="interface" value={formData.interface} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>
                <div className="mb-4">
                  <label htmlFor="rpm" className="block mb-2 text-sm font-medium">RPM</label>
                  <input type="text" id="rpm" name="rpm" value={formData.rpm} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>
                <div className="mb-4">
                  <label htmlFor="cache" className="block mb-2 text-sm font-medium">Cache</label>
                  <input type="text" id="cache" name="cache" value={formData.cache} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>
              </>
            )}
            <div className="flex justify-end mt-6">
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
