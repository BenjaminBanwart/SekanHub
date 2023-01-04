import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

export default function Background() {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
            <Card style={{ width: "100%", minHeight: "428px", marginBottom: "50px", backgroundColor: "#DEEED6", marginLeft: "35%", marginTop: "20%" }} className="text-black">
                    <div style={{ top: "auto", width: "578px", marginLeft: "100px", marginBottom: "50px", marginTop: "75px"}}>
                        <Card.Text style={{ fontSize: "2.5em", fontWeight: "bold" }}>
                            Welcome to Sekan's application hub!
                    </Card.Text>
                        <Card.Text style={{ fontSize: "1em" }}>
                            A centralized hub for all of your custom software.
                    </Card.Text>
                    </div>
                </Card>
            </div>
        </div>
    )
}