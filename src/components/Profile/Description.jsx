export const Description = ({items:{username, tag, location, avatar}})=>{
    return (
        <div >
    <img
      src={avatar}
      alt="User avatar"
      
    />
    <p className="name">{username}</p>
    <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </div>
    )
    
}