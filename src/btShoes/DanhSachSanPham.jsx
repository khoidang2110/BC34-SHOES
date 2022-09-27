import React, { Component } from 'react'

export default class DanhSachSanPham extends Component {
  render() {
    let {dataShoesProps, hanldeChiTiet,themGioHang} = this.props;
    return (
      <div className='row'>
         {dataShoesProps.map((shoes, index) => {
          return (
            <div key={index} className="col-3 border border-dark rounded m-1">
              <img
                className="img-fluid"
                style={{ height: "200px" }}
                src={shoes.image} onClick={()=> hanldeChiTiet(shoes)} data-toggle="modal" data-target="#exampleModal"
              />
              <h5> {shoes.name}</h5>
              <p> {shoes.price} $</p>
           
           <button className='btn btn-secondary ml-2' onClick={()=>themGioHang(shoes)}>Thêm giỏ hàng</button>
            </div>
          );
        })}
      </div>
    )
  }
}
