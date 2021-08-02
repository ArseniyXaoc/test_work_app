import "./rewiev.scss";
import { v4 as uuidv4 } from "uuid";

interface IRewievDetails {
  value: string;
  name: string;
  label: string;
}

function RewievDetails({
  datails,
}: {
  datails: IRewievDetails[];
}) {
  console.log(datails);
  if (datails) {
    return (
      <div>
        <div>
          {datails.map((data) => {
            return (
              <div key={uuidv4()}>
                {data.label}: {data.value}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div></div>
  }
}

export default RewievDetails;
