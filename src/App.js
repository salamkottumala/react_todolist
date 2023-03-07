import React, { useState } from 'react';
import './App.css';

function App() {
  const [md,setMd]=useState({})
  const [mds,setMds]=useState([])//for todo
  const [mdd,setMdd]=useState([])//for done
  const [mdr,setMdr]=useState([])//for recycle

  const date = new Date();




        function HHead()
        {
          return <h1>To_☕_ List</h1> 
        }


        function Add_mds(props)
        {
          return <div>
            { props.md.text===''?null: <div  className="todo">
              <div className="left">
                <input onChange={
                  (e)=>{
                    
                    
                     
                            if(mds.filter((md)=>md.id===props.md.id).length!==0)
                            {mds.map(md2=>{
                              if(md2.id===props.md.id)md2.cch=e.target.checked
                              
                              
                                
                                  setMdd([...mdd,
                                  ...mds.filter((md)=>md.id===props.md.id)]
                                  )
                                
                                  setMds(
                                    mds.filter((md)=>md.id!==props.md.id)
                                  )
                                
                                
                              })
                                
                            }else if(mdr.filter((md)=>md.id===props.md.id).length!==0)
                            {mdr.map(md2=>{
              
                                  if(!e.target.checked)
                                  setMdd([...mdd,
                                  ...mdr.filter((md)=>md.id===props.md.id)]
                                  )
                                  else setMds([...mds,
                                    ...mdr.filter((md)=>md.id===props.md.id)]
                                    )


                                  setMdr(
                                    mdr.filter((md)=>md.id!==props.md.id)
                                  )
                                  
                                
                                
                              })
                                
                            }
                            else if(mdd.filter((md)=>md.id===props.md.id).length!==0)mdd.map(md2=>{
                                if(md2.id===props.md.id)md2.cch=e.target.checked
                                
                                
                                  setMds([...mds,
                                  ...mdd.filter((md)=>md.id===props.md.id)]
                                  )
                                
                                  setMdd(
                                    mdd.filter((md)=>md.id!==props.md.id)
                                  )
                              
                                
                                return md2
                                
                              }

                              
                        
                            
                            
                            
                            
                            
                            
                            )

                            
                            }} 
    
                type="checkbox" checked={props.md.cch} name="" id="" />
  
                
                <p>{props.md.text}</p>
                
              </div>
              <div className="right">
                <i onClick={
                  
                 
                
                  ()=>{
                    
                    if(mds.filter((md)=>md.id===props.md.id).length!==0)
                    {
                          setMdr([...mdr,
                          ...mds.filter((md)=>md.id===props.md.id)]
                          )
                        
                          setMds(
                            mds.filter((md)=>md.id!==props.md.id)
                          )

                    }
                    else if(mdd.filter((md)=>md.id===props.md.id).length!==0)
                    {
                          setMdr([...mdr,
                          ...mdd.filter((md)=>md.id===props.md.id)]
                          )
                        
                          setMdd(
                            mdd.filter((md)=>md.id!==props.md.id)
                          )

                    }else if(mdr.filter((md)=>md.id===props.md.id).length!==0)
                    {
                      setMdr(
                        mdr.filter((md)=>md.id!==props.md.id)
                      )
                    }

                  
                  }

                  
                

                } className="fas fa-times"></i>
              </div>
              
              </div>
              
          
            } 
            
            </div>
        }

    

  return (

    <div className="app">
      <div className="mainHeading">
        <HHead />
      </div>
      <hr/>
      <br/>
      <br/>

      <div className='mainList'>
      {/* part1 */}
    
      <div className='p1List'>
      <div className="subHeading">
        <br />
        <h2 > ☕ To Do ☕ </h2>
      </div>
      
      
      <div className="input">
        <input onChange={(e)=>setMd({text : e.target.value})} type="text" placeholder="🖊️ Add item..." value={md.text} />
        <i onClick={(e)=>
        {
        if(md.text!=="")setMds([...mds,{ id:date.getTime(),text : md.text, cch:false }])
        setMd({text:""})

        }         
        }
        className="fas fa-plus"></i>
      </div>

      <div className="todos">
      {
            mds.map((md)=>{
              
              
              return Add_mds({md}) 
                        
            })

          
        
           
        }
         {/* <div>        
                <div><h1>{JSON.stringify(mds)}</h1></div>
         </div> */}
      </div>
      </div>

{/* part2 */}
{

<div className='p2List' >
<div className="subHeading">
  <br />
  <h2 > ☕ Done ! ☕ </h2>
</div>

<div className="todos">
{
      mdd.map((md)=>{
        
        return Add_mds({md}) //Add_list({n,index})
                  
      })

    
  
     
  }
   
</div>
</div>
}
{/* part3 */}


<div className='p3List'>
<div className="subHeading">
  <br />
  <h2 > ☕ Recycle bin ☕ </h2>
</div>




<div className="todos">
{
      mdr.map((md)=>{
        
        return Add_mds({md}) //Add_list({n,index})
                  
      })

    
  
     
  }
   
</div>


   </div>
      </div>

    </div>
  );

      }


export default App;