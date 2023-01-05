import React, { useContext, useEffect, useReducer, useState, useRef } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function HomeScreen() {
  const navigate = useNavigate();
  
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8000/api/stocks`);
        setProducts(data.data);
        console.log(data)
      } catch (err) {
        // toast.error(getError(err));
      }
    };
    fetchData();
  }, []);
  return (
    <div>
          <div>
            <Button type="button" onClick={() => navigate(`/reviews`, {state: { isRegist: true}})}>
              Bạn muốn đánh giá cổ phần ?
            </Button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>STT</th>
                <th>stockSymbol</th>
                <th>netProfit</th>
                <th>totalAssets</th>
                <th>revenue</th>
                <th>currentAssets</th>
                <th>currentDebt</th>
                <th>totalLiabilities</th>
                <th>stockPrice</th>
                <th>eps</th>
                <th>label</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.stockSymbol}</td>
                  <td>{product.netProfit}</td>
                  <td>{product.totalAssets}</td>
                  <td>{product.revenue}</td>
                  <td>{product.currentAssets}</td>
                  <td>{product.currentDebt}</td>
                  <td>{product.totalLiabilities}</td>
                  <td>{product.stockPrice}</td>
                  <td>{product.eps}</td>
                  <td style={{color: product.label == "ATTRACTIVE" ? "green" : "red"}} >{product.label}</td>
                </tr>
              ))}
            </tbody>
          </table>
    </div>
  );
}
export default HomeScreen;
