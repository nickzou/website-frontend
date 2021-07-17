interface props {
    condition: any,
    wrapper: any,
    children: React.ReactNode
}

const ConditionalWrapper = (props:props) => props.condition ? props.wrapper(props.children) : props.children;

export default ConditionalWrapper