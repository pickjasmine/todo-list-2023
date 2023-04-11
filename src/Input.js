const Input = (props) => {
    const {name, ...rest} = props;
    // you won't see name attached to the rendered input
    // because we are pulling it out from props before spreading them down below
    return (
        <input
            {...rest}
        />
    )
}

export default Input