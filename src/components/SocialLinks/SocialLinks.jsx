const SocialLinks = (props) => {
    return (
        <div className="footer-col4-links">
            <a className="call-to-person" href={`tel:${props.phone}`}>
                Call
            </a>
        </div>
    );

}

export default SocialLinks;