
import { useEffect, useState } from 'react'
import './App.css'



function App(){
  
  return(
   <div style={{display:"flex"}}>
    <Card>
      hi there
      </Card>
      <Card>
      hello my name is Priyansh Nandwana
      </Card>

   </div>
  )
}

function Card({children}){
  return(
    <div style={{display:"flex", alignItems:"center",borderRadius:"10px",justifyContent:"center",backgroundColor:"black",color:"white",}}>
      {children}
    </div>
  )
}


// function App(){
//   const [tab,setTab] = useState(1);
//   const [tabData,setTabData] = useState({})
//   const [loading,setLoading] = useState(true)

//   useEffect(()=>{
//     setLoading(true)
//     console.log("current tab is "+tab)
//     fetch('https://dummyjson.com/todos/'+tab).then(async res =>{
//       const json = await res.json();
//       setTabData(json)
//       setLoading(false)
//     })
//   },[tab])
  
//   return (
//     <div>
//       <button onClick={()=>setTab(1)} style={{color:tab==1?"red":"black"}}>todo1</button>
//       <button onClick={()=>setTab(2)} style={{color:tab==2?"red":"black"}}>todo2</button>
//       <button onClick={()=>setTab(3)} style={{color:tab==3?"red":"black"}}>todo3</button>
//       {loading==true?"Loading...":tabData.todo}
//     </div>
//   )
// }


// function App(){
//   const [count,setCount] = useState(0);

//   console.log("before incerement")

//   function increment(){
//     setCount(count+1);
//     console.log("inside incerement")
//   }
//   console.log("after incerement")
// setInterval(increment,1000)      // flashes aayenge kyunki haar ek second k baad clock  run hogi kyunki ye page rendr karega
//   return(
//     <div>
//       <button onClick={increment}>ADD</button>
//       <div>{count}</div>
//     </div>
//   )
// }


// function App(){
//   const [post,setPost] = useState([]);
//   const postComponent = post.map(post=><Post name={post.name} age={post.age} gender={post.gender}/>)

//   function addPost(){
//     setPost([...post,{
//       name:"prince",age:"18",gender:"male"
//     }])
//   }

//   return (
//     <>
//     <button onClick={addPost}>addPost</button>
//     <div>{postComponent}</div>
//     </>
//   )
// }

// function Post({name,age,gender}){
//   return (
//     <>
//     {name}
//     <br/>
//     {age}
//     <br/>
//     {gender}
//     </>
//   )
// }

// function App() {
 

//   // return (
//   //   <div>
//   //     <Greeting name="priyansh" age="18"/>
//   //     <Greeting name="priyansh"/>
//   //     <ToggleMessage/>
//   //   </div>
    
//   // )
// }

// const ToggleMessage = () => {
//   const [visible,setVisible] =  useState(true);
//   console.log("rerender outside")

//   return (
//     <>
//     <div>
//       <button onClick={()=>setVisible(!visible)}>Toggle Bulb</button>
      
//       {/* {visible ? <p>Bulb ON</p>:<p>Bulb OFF</p>} */}
      
//       {visible && <p>Bulb is on</p>}

//     </div>
//     </>
//   )
// }
// function Greeting({name,age}){
//  return (
//   <>
//   <div>Hello {name}</div>
//   {age && <div>Your age is {age}</div>}
//   </>
  
//  )
// }

export default App
