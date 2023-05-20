import React, { useState } from "react";

import Check from '@mui/icons-material/Check';
import Close from '@mui/icons-material/Close';

//constants
import passwordValidation from '../constant'

const PasswordComponent = () => {

    const [password, setPassword] = useState('')
    const [passwordValidationChecks, setpasswordValidationChecks] = useState(passwordValidation)
    const [textRemaining, setTextRemaining] = useState(6)
    
    const passwordValidations = (inputValue) => {
        const {value} = inputValue.target;
        value.length >= 6 && value.length <= 20 ? passwordValidationChecks[0].status = true : passwordValidationChecks[0].status = false
        passwordValidationChecks[1].status = /[a-z]/.test(value)
        passwordValidationChecks[2].status = /[A-Z]/.test(value)
        passwordValidationChecks[3].status = !(/(.)\1\1/.test(value) || value.length === 0) 
        setpasswordValidationChecks([...passwordValidationChecks])
        setTextRemaining(value.length <= 6 ? 6-value.length : 0 )
        setPassword(value)
    }
 
    return (
        <>
            <span>
            <input className="textbox" type="text" onChange={e => passwordValidations(e)} data-testId="password" />
            <button onClick={() => localStorage.setItem('password', password)}>Submit</button>
            </span>
            <h5>Minimum characters remaining: {textRemaining}</h5>
            <>
                {passwordValidationChecks.map(item => {
                    return(
                        <div className="indicator">
                            {item.status ? <Check /> : <Close />}
                            <div> {item.textMsg}</div>
                        </div>
                    )
                })}
            </>
        </>
    )
}

export default PasswordComponent;