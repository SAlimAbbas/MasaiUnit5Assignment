import axios from 'axios'
import React, { useState,useEffect } from 'react'

function Input() {
    const [obj,setobj]=useState({})
    const [maindata,setmaindata]=useState<laptop[]>([])


  type laptop={
    id:number;
    model:string;
    year:string;
    os:string;
    height:string;
    width:string;
    price:string;
  }


    const fetchdata=()=>{
      var d=axios.get("http://localhost:3001/products")
     d.then((res)=>{
       setmaindata(res.data)
       
     })
    }

    useEffect(()=>{
      fetchdata()
      // settodo([...e.data]))
  },[])

    
    const handleSort=(e:any)=>{
     axios.get("http://localhost:3001/products").then((res)=>{setmaindata(res.data)})
      maindata.sort(function(a:any,b:any){return a.price -b.price});
      console.log(maindata);
    }
   
    const settempdata=(e:any)=>{
      setobj({
        ...obj,
        [e.target.name]:e.target.value
      })
    }

   
    const senddata=()=>{
       axios.post("http://localhost:3001/products",obj)
      
        fetchdata()
      // axios.get("http://localhost:3001/products").then((data)=>console.log(data))
    }

  return (
    <>
        <form action="" onSubmit={()=>senddata()}>
            <label htmlFor="">Id</label> <br />
            <input type="text" name='id' onChange={(e)=>settempdata(e)} /> <br />
            <label htmlFor="">Model</label> <br />
            <input type="text" name='model' onChange={(e)=>settempdata(e)} /> <br />
            <label htmlFor="">Make year</label> <br />
            <input type="text"  name='year' onChange={(e)=>settempdata(e)}/> <br />
            <label htmlFor="" >Operating System</label> <br />
            <input type="text" name='os' onChange={(e)=>settempdata(e)} /> <br />
            <label htmlFor="">Screen Height</label> <br />
            <input type="text" name='height' onChange={(e)=>settempdata(e)}/> <br />
            <label htmlFor="">Screen Width</label> <br />
            <input type="text"  name='width' onChange={(e)=>settempdata(e)}/> <br />
            <label htmlFor="">Price</label> <br />
            <input type="text"  name='price' onChange={(e)=>settempdata(e)}/> <br />
            <input type="submit"  value={"Submit"}/>
        </form>
        <button onClick={handleSort} style={{marginTop:"20px"}}>Sort</button>
           <table style={{border:"1px solid black",margin:"auto",marginTop:"20px"}}>
             <tr style={{border:"1px solid black"}}>
               <th>Id</th>
               <th>Model</th>
                <th>Manufacturing Year</th>
                <th>Operating System</th>
                <th>Height</th>
                <th>Width</th>
                <th>Price</th>
             </tr>
           
             {maindata.map(elem=>{
              return <tbody style={{}}>
                <tr key={elem.id} style={{border:"1px solid black"}}>
                <td>{elem.id}</td>
                <td>{elem.model}</td>
                <td>{elem.year}</td>
                <td>{elem.os}</td>
                <td>{elem.height}</td>
                <td>{elem.width}</td>
                <td>{elem.price}</td>
              </tr>
              </tbody>
            })}
           </table>

           
    </>
  )
}

export default Input