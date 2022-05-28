import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { useFetch } from './hooks/useFetch';
import { useDebouncedCallback } from '@react-hookz/web';

const URL ="https://api.github.com/search/users";

export type User={
  id:number;
  login:string;
  avatar_url:string;
}

function App() {
  

  const [text,setText] =useState("");
  const {data,error,loading} = useFetch(URL,{
    per_page:5,
    q:text||"Masai-codes",
  })

  const onChangeDebounce =useDebouncedCallback((e)=>setText(e.target.value),[],1000,0);
  
  return (
    <div className="App">
      <input type="text"
      // value={text}
      onChange={onChangeDebounce} />

      <button
      onClick={()=>{
        axios.get(URL,{
          params:{
            per_page:5,
            q:text
          }
        })
      }}
      >
        Search
      </button>
      
      {loading?(<div>Loading...</div>
      ):error?(<div>Somthing Went Wrong</div>
      ):(
      data.map((user)=>{
      return (
      <div key={user.id}>
        {user.login}
      <div>
        <img width={200} height={200} src={user.avatar_url} alt="" />
        </div>
      </div>
      );
      })
      )}
    </div>
    
  );
}

export default App;
