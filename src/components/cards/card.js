

function Cards(props) {
  return(
    <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
      <div className="card my-5 ml-2 mr-2 text-center bg-dark text-light w-100" >
        <img src={props.post.url} className="card-img-top" alt="..." style={{ height: "200px" }}  />
        <h2 className="card-title mt-5">{props.post.id}. {props.post.name}</h2>
        <div className="card-body">
          <p className="card-text"></p>
        </div>
      </div>
    </div>
  )
}

export default Cards