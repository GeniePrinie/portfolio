export const ItemCard = (props) => {
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow bg-light border-primary border-2">
        <img
          className="card-img-top img-fluid"
          src={props.image}
          alt={props.title}
        />
        <div className="card-body">
          <h5 className="card-title text-center fs-4 text-primary">
            {props.title}
          </h5>
          <p className="card-text text-dark">{props.description}</p>
          <div>
            <a href={props.website}>{props.projectName}</a>
          </div>
          <div>
            <a href={props.repository}>GitHub Repository</a>
          </div>
        </div>
      </div>
    </div>
  );
};
