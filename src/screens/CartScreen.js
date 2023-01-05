import React, { useContext, useEffect, useReducer, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default function CartScreen() {
  const navigate = useNavigate();
  const [bookDetail, setBookDetail] = useState({})
  const [result, setResult] = useState("")
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: 'post',
        url: 'http://localhost:8000/api/stocks/reviews',
        data: {
          ...bookDetail
        }
      });
    setResult(data.data)
    } catch (err) {
    }
  }
  const handleOk = async (e) => {
    // console.log(e)
  }
  const handleInputChange = (key, text) =>{
    setBookDetail({...bookDetail, [key]: text.target.value})
  }
  return (
    <div>
      <Helmet>
        <title>Review</title>
      </Helmet>
      <Form onSubmit={submitHandler}>
        <Form.Group as={Col}  controlId="stockSymbol">
          <Form.Label>stockSymbol</Form.Label>
          <Form.Control
            value={bookDetail?.stockSymbol}
            onChange={(value)=>handleInputChange("stockSymbol", value)}
            required
          />
        </Form.Group>
        <Form.Group as={Col}  controlId="netProfit">
          <Form.Label>netProfit</Form.Label>
          <Form.Control
            value={bookDetail?.netProfit}
            onChange={(value)=>handleInputChange("netProfit", value)}
            required
            type='number'
          />
        </Form.Group>
        <Form.Group as={Col}  controlId="totalAssets">
          <Form.Label>totalAssets</Form.Label>
          <Form.Control
            value={bookDetail?.totalAssets}
            onChange={(value)=>handleInputChange("totalAssets", value)}
            required
            type='number'
          />
        </Form.Group>
        <Form.Group as={Col}  controlId="revenue">
          <Form.Label>revenue</Form.Label>
          <Form.Control
            value={bookDetail?.revenue}
            onChange={(value)=>handleInputChange("revenue", value)}
            required
            type='number'
          />
        </Form.Group>
        <Form.Group as={Col}  controlId="currentAssets">
          <Form.Label>currentAssets</Form.Label>
          <Form.Control
            value={bookDetail?.currentAssets}
            onChange={(value)=>handleInputChange("currentAssets", value)}
            required
            type='number'
          />
        </Form.Group>
        <Form.Group as={Col}  controlId="currentDebt">
          <Form.Label>currentDebt</Form.Label>
          <Form.Control
            value={bookDetail?.currentDebt}
            onChange={(value)=>handleInputChange("currentDebt", value)}
            required
            type='number'
          />
        </Form.Group>
        <Form.Group as={Col}  controlId="totalLiabilities">
          <Form.Label>totalLiabilities</Form.Label>
          <Form.Control
            value={bookDetail?.totalLiabilities}
            onChange={(value)=>handleInputChange("totalLiabilities", value)}
            required
            type='number'
          />
        </Form.Group>
        <Form.Group as={Col}  controlId="stockPrice">
          <Form.Label>stockPrice</Form.Label>
          <Form.Control
            value={bookDetail?.stockPrice}
            onChange={(value)=>handleInputChange("stockPrice", value)}
            required
            type='number'
          />
        </Form.Group>
        <Form.Group as={Col}  controlId="eps">
          <Form.Label>eps</Form.Label>
          <Form.Control
            value={bookDetail?.eps}
            onChange={(value)=>handleInputChange("eps", value)}
            required
            type='number'
          />
        </Form.Group>
        <Row>
            <Col>
              <Button width="55px" type='submit' onClick={(e)=>handleOk(e)}>Cập nhật</Button>
            </Col> 
            <Col>
              <h3 style={{color: result == "ATTRACTIVE" ? "green" : "red"}}>KQ: {result}</h3>
            </Col> 
        </Row>        
      </Form>

    </div>
  );
}
