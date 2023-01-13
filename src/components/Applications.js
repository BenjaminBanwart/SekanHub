import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import Cookies from 'universal-cookie'
import React from 'react'
import { useEffect } from 'react'


const cookies = new Cookies();

const handleButtonClick = () => {
    axios.post('http://localhost:4000/orderhive_get_products', {
        access_key_id: cookies.get('access_key_id_cookie').access_key_id,
        secret_key: cookies.get('secret_key_cookie').secret_key,
        session_token: cookies.get('session_token_cookie').session_token
    })
    .then((response) => {
        console.log(response)
    })
}

export default function Applications() {

    useEffect(() => {
            axios.get('http://localhost:4000/orderhive_refresh')
            .then((res)=> {
                if(res.data === false){
                    console.log(cookies.get('access_key_id_cookie'))
                    console.log(cookies.get('secret_key_cookie'))
                    console.log(cookies.get('session_token_cookie'))
                    console.log(res.data);
                } else {
                    var now = new Date();
                    var time = now.getTime();
                    time += 3600 * 1000;
                    now.setTime(time);
                    console.log(res.data);
                    cookies.set('access_key_id_cookie', { access_key_id: res.data.access_key_id }, { path: '/', maxAge: 1800 })
                    console.log(cookies.get('access_key_id_cookie'))
                    cookies.set('secret_key_cookie', { secret_key: res.data.secret_key }, { path: '/', maxAge: 1800 })
                    console.log(cookies.get('secret_key_cookie'))
                    cookies.set('session_token_cookie', { session_token: res.data.session_token }, { path: '/', maxAge: 1800 })
                    console.log(cookies.get('session_token_cookie'))
                }
            })
    }, [])

    return (
        <Container style={{ border: "1px black solid", marginTop: "13%" }}>
            <Row style={{ border: "1px black solid" }}>
                <Col style={{ border: "1px black solid" }}>
                    <p style={{ marginLeft: "5em", marginTop: "1.5em" }} >
                        Create Product Listings From Orderhive Listing
                    </p>
                </Col>
                <Col style={{ border: "1px black solid" }}>
                    <Button style={{ width: "8em", margin: "1em", marginLeft: "15em" }} 
                    onClick={handleButtonClick}
                    >Run</Button>
                </Col>
            </Row>
        </Container>
    )
}