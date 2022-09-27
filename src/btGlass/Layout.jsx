import React, { Component } from 'react'
import dataGlasses from './dataGlasses.json';
export default class layout extends Component {
  state = {
    glassesDetail:{
      id: 1,
        price: 30,
        name: "GUCCI G8850U",
        url: "./glassesImage/v1.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
  }
  render() {
    let{glassesDetail} = this.state;
    return (
      <div>
  <header className="py-3 bg-dark">
    <div className="container"><p className="m-0 text-center text-white">TRY GLASSES APP ONLINE</p></div>
  </header>
  <div className="row">
    <div className="col-6 mb-1">
      <div className="card bg-light border-0 h-70">
        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
          <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-collection" /></div>
          <div style={{ 
      backgroundImage: `url("./glassesImage/model.jpg")` ,height:"350px",backgroundSize:"cover",backgroundPosition:"center top"
    }}>
     
      <img src={glassesDetail.url} style={{width: "220px", }} className='mt-5  pt-5'/>
      
      <div>
  <br />
  <br />
  <br />
  <br />
</div>

          <h5>{glassesDetail.name}</h5>
<p>{glassesDetail.desc}</p>
      </div>
         
          
        </div>
      </div>
    </div>
    <div className="col-6  mb-1">
      <div className="card bg-light border-0 h-70">
        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
          <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-cloud-download" /></div>
          {
            dataGlasses.map((glassesDetail,index) =>{
                return         <div key={index} className="m-4 col-md-3 card" style={{ width: 400 }}>
                <img
                  className="card-img-top"
                  src={glassesDetail.url}
                  alt="Card image" onClick={() => {
                    this.setState({
                      glassesDetail
                    })
                  }}
                />
                
                
              </div>
            })
        }
        </div>
      </div>
    </div>
  </div>
 
</div>

    )
  }
}
