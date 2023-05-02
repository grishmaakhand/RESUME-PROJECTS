import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class NewsItem extends Component {
  render() {
    let { title, description, imgurl, singleNewUrl, dateTime, authorName } =
      this.props;
    return (
      <Card>
        <Card.Img
          variant="top"
          src={
            imgurl
              ? imgurl
              : "https://i.guim.co.uk/img/media/71fe0c9a737085588709382696378f2b2d2a2881/0_240_6000_3600/master/6000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=8d2d37f0817b4f8df54a19eac3713035"
          }
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description ? description : "Default Description"}
          </Card.Text>
          <Card.Text className="text-mute">
            {authorName ? authorName : "Unknow"} on{" "}
            {new Date(dateTime).toGMTString()}
          </Card.Text>
          <Button href={singleNewUrl} target="_blank" variant="dark">
            Read More
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
export default NewsItem;
