import Card from "./Card";
import "../../styles/card.css";
import withData from "../../utils/withData";

const CardContainer = ({ data }) => {
  return (
    <div className="card-container">
      {data &&
        data.map((record) => {
          return <Card key={record.id} record={record} />;
        })}
    </div>
  );
};

export default withData(CardContainer);
