
type ButtonPropsType = {
    name: string,
    callBack: ()=> void
}

export const Button = (props: ButtonPropsType) => {
    const onCLickHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onCLickHandler}>{props.name}</button>
    )

}