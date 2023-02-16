const BUTTON_TYPE_CLASSES = {
    nav: 'px-8 py-2 text-2xl font-semibold tracking-wide text-white bg-orange-400 rounded-full active:bg-orange-500',
    addToCart : 'px-8 py-2 text-xl font-semibold tracking-wide text-white bg-orange-400 rounded-md active:bg-orange-500 mt-2'
}

const Button = ({children, buttonType, ...otherProps}) => {
    return (
        <button
        className={`${BUTTON_TYPE_CLASSES[buttonType]}`}
        {...otherProps}
        >
            {children}
        </button>
    )
}

export default Button;