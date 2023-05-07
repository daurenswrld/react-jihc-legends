import SocialLinks from '../SocialLinks/SocialLinks'

const TeachersItem = (props) => {
    return (
        <div className="teachers__item">
            <div className="teachers-left">
                <img src={props.img} height="302px" alt="" />
                <h3>{props.name}</h3>
            </div>
            <div className="teachers-right">
                <h2>{props.position}</h2>
                <p>{props.information}</p>
                <SocialLinks phone={props.phone} />
            </div>
        </div>
    );
}

export default TeachersItem;