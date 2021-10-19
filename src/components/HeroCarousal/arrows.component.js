import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


export const NextArrow = (props) => {

    return(

        <>

        <div 
        
        className=""
        style =  { {...props.style ,  backgroundColor:"black", opacity:"0.4", width:"3.5rem" , height:"3rem",display:"flex",justifyContent:"center",alignItems:"center", borderRadius:"0.3rem 0 0 0.3rem ",position:"absolute",left:"96.333%",top:"41%",zIndex:"3" } }
        onClick = {props.onClick}
           >
        <span><IoIosArrowForward className="text-white text-3xl cursor-pointer opacity-100" /></span>
        
        </div>
        </>
    )

};


export const PrevArrow = (props) => {

    return(

        <>

        <div 
        
        className=""
        style =  { {...props.style ,  backgroundColor:"black", opacity:"0.4", width:"3.5rem" , height:"3rem",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"0 0.3rem 0.3rem 0 " ,position:"absolute",top:"45%",zIndex:"3"} }
        onClick = {props.onClick}
           >
        <span><IoIosArrowBack className="text-white text-3xl cursor-pointer opacity-100" /></span>
        
        </div>
        </>
    )

};

