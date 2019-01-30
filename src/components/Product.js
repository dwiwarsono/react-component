import React from 'react'

class Product extends React.Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="thumbnail">
          <img alt="iphone 6" src="https://cf5.s3.souqcdn.com/item/2016/04/11/10/54/53/74/item_XL_10545374_13745720.jpg"/>
          <div className="caption">
            <h3>Iphone 6 Plus</h3>
            <p>Rp. 16.000.000</p>
          </div>
          <button type="button" className="btn btn-success">Tambah Keranjang</button>
        </div>
      </div>
    )
  }
}

export default Product;