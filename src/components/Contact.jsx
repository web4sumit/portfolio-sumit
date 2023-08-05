import React, { useState } from 'react'
import vg from '../assets/vg.png'
import {toast} from 'react-hot-toast'
import {motion} from 'framer-motion'
import {addDoc,collection} from 'firebase/firestore'
import {db} from "../components/Firebase"

const  Contact = () => {
    const [ data,setData ] = useState({name:"",email:"",message:""});
    const [disableBtn,setDisableBtn] = useState(false);

    const changeHandler = (e) => {
        setData({...data, [e.target.name]:e.target.value});
    }

    const submitHandler = async(e) => {
       e.preventDefault();
       setDisableBtn(true);
       try {
        await addDoc(collection(db,"contacts"),
        data
        );
        setData({
            name:"",
            email:"",
            message:""
        });
        toast.success("Message Sent");
        setDisableBtn(false);
       } catch (error) {
        toast.error("Error");
        console.log(error);
        setDisableBtn(false);
       }
    }
    const animations = {
        form:{
            initial:{
                x:"-100%",
                opacity:0,
            },
            whileInView:{
                x:"0",
                opacity:1,
            },
        },
        button:{
            initial:{
                y:"-100%",
                opacity:0,
            },
            whileInView:{
                y:"0",
                opacity:1,
            },
            transition:{
                delay:0.5,
            }
        }
    }
  return (
    <div id='contact'>
        <section>
        <span className="borderLine"></span>
            <motion.form onSubmit={submitHandler} {...animations.form}>
               <h2>Contact Me</h2>
               <input type="text" name='name' value={data.name} onChange={changeHandler} placeholder='Your Name' required/>
               <input type="Email" name='email' value={data.email} onChange={changeHandler} placeholder='Your Email' required/>
               <input type="text" name='message' value={data.message} onChange={changeHandler} placeholder='Your message' required/>
               <motion.button className={disableBtn ? "disableBtn" : ""} disabled={disableBtn} {...animations.button} type='submit'>Send</motion.button>
            </motion.form>
        </section>
        <aside>
            <img src={vg} alt="Graphics" />
        </aside>
    </div>
  )
}

export default  Contact