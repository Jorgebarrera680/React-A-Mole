import { useEffect } from "react"
import MoleHill from './img/molegill.png'

const EmptySlot = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '35vw'}} src={MoleHill} />
        </div>
    )
}

export default EmptySlot