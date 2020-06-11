import React from 'react'
import styleHoc from './styleHoc'

const GoodButton = props => {
    return (
        <button {...props} >Good Button</button>
    )
}

export default styleHoc(GoodButton)