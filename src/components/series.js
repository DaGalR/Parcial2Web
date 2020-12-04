import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
function Series(props) {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("series") === null) {
        console.log("No hay conexión");
      } else {
        setSeries(JSON.parse(localStorage.getItem("series")));
      }
    } else {
      fetch(props.data)
        .then((res) => res.json())
        .then((res) => {
          setSeries(res);
          const results = JSON.stringify(res);
          //setDet(res[0]);
          localStorage.setItem("series", results);
        })
        .catch((err) => console.log(err));
    }
  }, []);
  function CuerpoTabla(props) {
    return (
      <tr key={props.data.id}>
        <th scope="row">{props.data.id}</th>
        <td>{props.data.name}</td>
        <td>{props.data.channel}</td>
        <td>{props.data.description}</td>
      </tr>
    );
  }
  let cuerpoTabla = () => {
    return series.map((item, i) => <CuerpoTabla key={i} data={item} />);
  };
  return (
    <div className="cnontainer-fluid">
      <div className="row">
        <div className="col-12">
          <h1>Series</h1>
        </div>
        <div className="col-12">
          <table className="table table-striped">
            <thead className="table-head">
              <tr>
                <th scope="col">#</th>
                <th scope="col">
                  <FormattedMessage id="Name" />
                </th>
                <th scope="col">
                  <FormattedMessage id="Channel" />
                </th>
                <th scope="col">
                  <FormattedMessage id="Descripion" />
                </th>
              </tr>
            </thead>
            <tbody>{cuerpoTabla()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Series;
