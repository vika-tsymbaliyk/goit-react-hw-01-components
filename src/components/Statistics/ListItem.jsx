export const ListItem = ({ listItem : { label, percentage } } )=>{
    return (
        <div > 
       <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
        </div>
    )

}