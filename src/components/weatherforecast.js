import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Col } from "reactstrap";
var moment = require("moment");

class Weatherforecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            list:[],
            cnt:null
          }; 
    }
    componentDidMount() {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=Bangalore,IN&appid=1acaf47074832e8b9ab62e6450776b56")
            .then(res => res.json())
            .then(data => this.setState({data:data.list,cnt:data.cnt,isLoaded:true}))
            .catch(error => this.setState({error,isLoaded:true})) 
    }
    getWeatherDay(d) {
        
        return moment(d).format("LLLL");   
    }

    getWeatherImg(i) {
        let im = "https://openweathermap.org/img/w/"+i+".png";
        // return <img src={im} />;
        return im;
    }
    render() {
        const {data,isLoaded} = this.state;
        return (
            <div className="container bs-docs-container">
                <Row> 
                    <Col sm="12">                          
                        <Row> 
                            {this.state && this.state.data && 
                            this.state.data.map(record =>  
                                <Col sm="3" className="list">
                                        <Card body>
                                            <CardTitle>{this.getWeatherDay.call(this,record.dt_txt)}</CardTitle>
                                            <CardImg top  src={this.getWeatherImg.call(this,record.weather[0].icon)} />
                                            <CardBody> 
                                                <CardSubtitle>
                                                    <span className="min">Min : {record.main.temp_min}</span>
                                                    <span className="max">Max : {record.main.temp_max}</span>
                                                </CardSubtitle>                                                 
                                            </CardBody>
                                        </Card>
                                 </Col>
                            )}   
                            
                        </Row>                   
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Weatherforecast;