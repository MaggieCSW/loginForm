const User =(props)=> {

    return (
        <div className="col-md-3">
            <div className="user-div">
                <h3 className="text-capitalize">{props.lastName}, {props.firstName}</h3>
                <p className="user-text">{props.username}</p>
                <p className="user-email">{props.email}</p>
                <p className="user-date-created">Member Since: {props.dateCeated}</p>
            </div>
        </div>

    )
}

export default User