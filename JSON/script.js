//JSON means Javascript Object Notation
//it is a light weight format that is understandable to object and machines
//it is language dependent, you can use it in python and other programming language

// {
//     name : "Lateefat Ajayi Olubisi Alake ";
//     age : 29;
//     hobbies : ["sleeping", "talking", "reading"];
//     address : {street: "joy street";
//                 no: "40";
//                 city : "Ogun state"
//     }
// }

fetch("./person.json").then((res) => res.json()).then((data ) => {
    console.log(data)
    let id = 1
   const addId = {id, ...data}
   console.log(addId)
   const address = addId.address
  
    const desAdd = [address.no, address.street, address.city]
//    console.log(desAdd)

const [one, two, three] = desAdd
console.log(`I live at house ${one}, ${two} , ${three}.`)
});
