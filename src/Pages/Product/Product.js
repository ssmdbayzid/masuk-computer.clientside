import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/product/footerbg.jpg'
import './Product.css'
const Product = () => {
    return (
        <div>
            <table id="products">
                <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Images</th>
                    <th>Short Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Supplier Name</th>
                    <th>Update</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>
                    <img style={{width: '75px'}} src={img} alt="" />
                    </td>
                    <td>Germany</td>
                    <td>$100</td>
                    <td>10</td>
                    <td>City Complex</td>
                    <td>
                    <Link to={'/home'} style={{backgroundColor: 'gold', padding: '2px 10px', borderRadius: '10px'}} >Update</Link>
                    </td>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>
                    <img style={{width: '75px'}} src={img} alt="" />
                    </td>
                    <td>Germany</td>
                    <td>$100</td>
                    <td>10</td>
                    <td>City Complex</td>
                    <td>
                    <Link to={'/home'} style={{backgroundColor: 'gold', padding: '2px 10px', borderRadius: '10px'}} >Update</Link>
                    </td>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>
                    <img style={{width: '75px'}} src={img} alt="" />
                    </td>
                    <td>Germany</td>
                    <td>$100</td>
                    <td>10</td>
                    <td>City Complex</td>
                    <td>
                    <Link to={'/home'} style={{backgroundColor: 'gold', padding: '2px 10px', borderRadius: '10px'}} >Update</Link>
                    </td>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>
                    <img style={{width: '75px'}} src={img} alt="" />
                    </td>
                    <td>Germany</td>
                    <td>$100</td>
                    <td>10</td>
                    <td>City Complex</td>
                    <td>
                    <Link to={'/home'} style={{backgroundColor: 'gold', padding: '2px 10px', borderRadius: '10px'}} >Update</Link>
                    </td>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>
                    <img style={{width: '75px'}} src={img} alt="" />
                    </td>
                    <td>Germany</td>
                    <td>$100</td>
                    <td>10</td>
                    <td>City Complex</td>
                    <td>
                    <Link to={'/home'} style={{backgroundColor: 'gold', padding: '2px 10px', borderRadius: '10px'}} >Update</Link>
                    </td>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>
                    <img style={{width: '75px'}} src={img} alt="" />
                    </td>
                    <td>Germany</td>
                    <td>$100</td>
                    <td>10</td>
                    <td>City Complex</td>
                    <td>
                    <Link to={'/home'} style={{backgroundColor: 'gold', padding: '2px 10px', borderRadius: '10px'}} >Update</Link>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Product;