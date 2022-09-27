import React, { Component } from "react";
import DanhSachSanPham from "./DanhSachSanPham";
import dataShoes from "./dataShoes.json";
import SanPham from "./SanPham";
// import GioHang from "./GioHang";
export default class extends Component {
  state = {
    stateShoes: {

      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png"

    },
gioHang:[]
  }

  hanldeChiTiet = (shoes) => {
    this.setState({
      stateShoes: shoes,
    });
  };



  render() {
    let { stateShoes } = this.state;
    return (
      <div className="container ">
       <h1>Shoes Shop</h1>
        <DanhSachSanPham
          dataShoesProps={dataShoes}
          hanldeChiTiet={this.hanldeChiTiet} 
        />
        <SanPham stateShoes={stateShoes} />
      </div>
    );
  }
}
