export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/technicien-qualite.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                 
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
