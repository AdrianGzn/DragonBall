function Point(props) {
    const style = {
        borderRadius: '8px',
        marginBottom: '10px',
        color: props.color
    };

    return <span style={style}>·</span>
}

export default Point