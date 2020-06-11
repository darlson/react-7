import React, {useState} from 'react'
import styleHoc from '../HOCS/styleHoc'

const ToggleRenderProps = props => {
    const [isOpen, setIsOpen] = useState(false)

    return <div style={props.style}>
        {props.render({isOpen, setIsOpen})}
    </div>
}

export default styleHoc(ToggleRenderProps)