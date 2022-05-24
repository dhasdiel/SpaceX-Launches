import React from "react";
import classNames from "classnames";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const LaunchItem = (props) => {
  return (
    <div className="card card-body mb-3 rounded">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Mission:{" "}
            <span
              className={classNames({
                "text-success": props.launch.launch_success,
                "text-danger": !props.launch.launch_success,
              })}
            >
              {props.launch.mission_name}
            </span>
          </h4>
          <p>
            Date:{" "}
            <Moment format="DD-MM-YYYY HH:mm">
              {props.launch.launch_date_local}
            </Moment>
          </p>
        </div>
        <div className="col-md-3">
          <Link
            to={`/launch/${props.launch.flight_number}`}
            className="btn btn-secondary"
          >
            Launche Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;
