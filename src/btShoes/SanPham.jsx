import React, { Component } from 'react'

export default class SanPham extends Component {
  render() {
    let{stateShoes} = this.props;
    return (
 
  
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Thông tin sản phẩm</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group">
            <img
                className="img-fluid"
                style={{ height: "200px" }}
                src={stateShoes.image}
              />
             
            </div>
            <div className="form-group">
            <h2>{stateShoes.name}</h2>
             
            </div>
            <div className="form-group">
              <label htmlFor="message-text" className="col-form-label">Giá tiền:</label>
             
    <p>{stateShoes.price}</p>
            </div>
            <div className="form-group">
              <label htmlFor="message-text" className="col-form-label">Mô tả:</label>
              
    <p>{stateShoes.description}</p>
            </div>
            <div className="form-group">
              <label htmlFor="message-text" className="col-form-label">Số lượng:</label>
             
    <p>{stateShoes.quantity}</p>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

    )
  }
}
