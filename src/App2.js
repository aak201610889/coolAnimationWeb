// import React, { useState } from "react";

// function App2() {
//   const allNotes = [
//     { name: "sa", details: "fff", color: "red" },
//     { name: "ww", details: "www", color: "blue" },
//     { name: "dd", details: "dddd", color: "green" },
//   ];
//   const [Notes, setNotes] = useState(allNotes);

// const changeColorHandler=(name,newcolor)=>{

//     console.log("newcolor",newcolor)
//     console.log("name",name)
//     setNotes(Notes.map(item=>{
//         return item.name==name?{...item,color:newcolor}:item
//     }))
// }



//   return (
//     <div className="flex gap-4 m-auto w-[50vw] mt-4">
//       {Notes.map((item) => (
//         <div
//         key={item.color}
//           style={{ backgroundColor: item.color }}
//           className={`   gap-4 mb-3    h-[250px] w-[200px]`}
//         >
//           <p className="ml-4  my-5">Name:{item.name}</p>
//           <p className="ml-4  my-5"> Details:{item.details}</p>

       

//           <select
//             name=""
//             id="input"
//             className="block border-2  border-blue-900 m-auto mt-4"
//             required="required"
//             onChange={ e=> changeColorHandler(item.name,e.target.value)}
//             value={item.color} 
          
//           >
//             <option value="">choose</option>
//             <option value="red">red</option>
//             <option value="blue">blue</option>
//             <option value="green">green</option>
//           </select>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App2;
