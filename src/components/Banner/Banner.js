import './Banner.css'
const Banner = (props) => {
    return <div className={`default-text banner ${props.type}-banner mb-2`}>
        <div className="banner-text">{props.text}</div>
        <div className="cross" onClick={props.closeBanner}></div>
    </div>

}

export default Banner;