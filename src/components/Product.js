import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';

import './css/Product.css';
import CartBtn from './CartBtn';

export default function(props) {
  const { item, type } = props;
  const toSlug = (str) => {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();     
 
    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
 
    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');
 
    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');
 
    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');
 
    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');
 
    // return
    return str;
  }
  return(
    <Col xl="3" lg="4" md="6" sm="6" className="p-0 mb-5">
      <Link to={{
        pathname:'/product/' + toSlug(item.title),
        state: {
          id: item._id
        }
      }} 
      className={type === 'related' ? 'product fade-in w-custom' : 'product fade-in'}
    >
        <img src={item.image} alt="" />
        <div className={type === 'related' ? "info text-left" : "info"}>
          <h3 className="title">{item.title}</h3>
          <p className="author">By {item.author}</p>
        </div>
        { 
          type === 'related' && 
          <div className="cart">
            <div className="price">${item.price}</div>
            <CartBtn type={type} product={item} />
          </div>
        }
      </Link> 
    </Col>
  );
}