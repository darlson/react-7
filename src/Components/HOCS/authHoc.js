import React, {useState, useEffect} from 'react'

const authHoc = WrappedComponent => {
    return props => {
        const [isAdmin, setIsAdmin] = useState(false)
        
        useEffect(() => {
            if(props.isAdmin){
                setIsAdmin(true)
            } else {
                setIsAdmin(false)
            }
        }, [props.isAdmin])
    
        return isAdmin ? <WrappedComponent {...props}/> : <div>Log in plz</div>
    }
}

export default authHoc