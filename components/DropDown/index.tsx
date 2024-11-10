// import React, { useState } from "react";

// const CustomDropdown = ({ value, onChange }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const options = [
//     "Select an option",
//     "Ready to Move",
//     "Near Delivery",
//     "Off Plan",
//   ];

//   const handleSelect = (option) => {
//     onChange(option);
//     setIsOpen(false);
//   };

//   return (
//     <div className="space-y-2 relative">
//       <label className="text-gray-700 font-medium">Delivery</label>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full p-3 border text-black border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-navy cursor-pointer"
//       >
//         {value || "Select an option"}
//       </button>
//       {isOpen && (
//         <div className="absolute mt-1 w-full border border-gray-300 bg-white shadow-lg rounded-md">
//           {options.map((option, index) => (
//             <div
//               key={index}
//               onClick={() => handleSelect(option)}
//               className="p-3 text-gray-700 cursor-pointer hover:bg-red-500 hover:text-white transition duration-300 ease-in-out"
//             >
//               {option}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomDropdown;
