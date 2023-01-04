import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import Cookies from 'universal-cookie'
import React from 'react'
import { useEffect } from 'react'


// const cookies = new Cookies();

// const handleButtonClick = () => {
//     axios.get('http://localhost:3080/orderhive_refresh')
//     .then((res)=> {
//         console.log(res.data);
//         cookies.set('access_key_id', res.data.access_key_id, { path: '/', expires: new Date(Date.now()+86400) })
//         console.log(cookies.get('access_key_id'))
//     });
// }


export default function Applications() {

    useEffect(() => {
        const cookies = new Cookies();
            axios.get('http://localhost:3080/orderhive_refresh')
            .then((res)=> {
                if(res.data !== 429){
                    console.log(res.data);
                    cookies.set('access_key_id_cookie', { access_key_id: res.data.access_key_id }, { path: '/', expires: new Date(Date.now()+86400) })
                    console.log(cookies.get('access_key_id_cookie'))
                } else {
                    console.log(cookies.get('access_key_id_cookie'))
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
                    //onClick={handleButtonClick}
                    >Run</Button>
                </Col>
            </Row>
        </Container>
    )
}