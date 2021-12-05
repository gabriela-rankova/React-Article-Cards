import "../../styles/card.css";
const Card = ({ record }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div
          className="card-header-image"
          style={{ backgroundImage: `url(${record.image})` }}
        ></div>
      </div>
      <div>
        <h1>{record.title}</h1>
        {record.content}
      </div>
    </div>
  );
};
export default Card;
