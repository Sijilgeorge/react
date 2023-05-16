import React, { useState } from 'react'

const UserGreeting = () => {
    var[islogined,setislogined]=useState(true)
    if(islogined){
       return( <div>
            welcome sijil
        </div>
       )
    }
    else{
        return(
            <div>
                welcome guest
            </div>
        )

    }
// //   return (
// //   <div>
// //     <div> welcome sijil </div>
// //     <div>welcome guest</div>
// //     </div>
// //   )
 }

export default UserGreeting