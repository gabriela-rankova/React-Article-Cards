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
      <div className="card-content">
        <h1 className="card-article-title">{record.title}</h1>
        <div className="card-article-content">{record.content}</div>
        <div className="card-article-category">{record.category}</div>
      </div>
    </div>
  );
};
export default Card;
