import React from "react";
 
class Button extends React.Component{
  render() {
    return (
      <button
        class="h-10 px-6 font-semibold rounded-md bg-black text-white"
        type="submit"
      >
        Buy now
      </button>
    );
  }
}

function App() {
   return (
     <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      
      <Button></Button>
       <button
         class="h-10 px-6 font-semibold rounded-md bg-black text-white"
         type="submit"
       >
         Buy now
       </button>
       <button
         class="h-10 px-6 font-semibold rounded-md bg-black text-white"
         type="submit"
       >
         Buy now
       </button>
     </div>
   );
}

export default App;
