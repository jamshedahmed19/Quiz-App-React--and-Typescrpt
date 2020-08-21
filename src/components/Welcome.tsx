import React,{useEffect,useState} from 'react'
import {categories,} from '../services/service'
const Welcome = () => {
   const [name, setName] = useState<string[]>()
    useEffect(() => {
        const data = async ()=>{
           const category = await categories()
           setName(category.map((e)=>e.name))
           
        }
        
            data()
        
    }, [])
    console.log(name)
    return (
        <div>
            <h1>Welcome to the Ultimate Quiz App</h1>
            <p>Select your ultimate quiz and test your knowledge </p>
            <div>
                <h1>Catagories</h1>
                <form>
                    <select name="category">
                        {name?.map((e)=>{
                            return(
                            <option value={e}>{e}</option>
                            )
                        })}
                        

                    </select>
                </form>
            </div>
        </div>
    )
}

export default Welcome