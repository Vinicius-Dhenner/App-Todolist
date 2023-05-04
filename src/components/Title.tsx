import './style.css'

type titleProps = {
    text : String
}

export function Title (props : titleProps) {
    return (
        <>
            <h1>{props.text}</h1>
        </>
    )
}