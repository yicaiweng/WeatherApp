import React from 'react';

const Error = (props) => {
    console.log(props)
    return (
        <div className="sixteen wide column">
            <p className="errMessage">{props.errorMessage}</p>
        </div>
    )
}

Error.defaultProps = {
    errorMessage: 'Please Enter A Valid Zipcode'
}

export default Error;