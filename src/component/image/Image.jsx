const Image = ({src, alt, className}) => {
    return (
        <img className={className && className} src={src && src} alt={alt && alt} />
    )
}

export default Image;