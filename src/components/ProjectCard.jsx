import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  CardImg,
} from "reactstrap";


const ProjectCard = (props) => {

const {img_url, name, description, img_alt_text} = props
 return (<Card>
  <CardImg
    alt={img_alt_text}
    src={img_url}
    style={{width: '20%',
            height: '200px',}}
    width="100%"
  />
  <CardBody>
    <CardTitle tag="h5">
      {name}
    </CardTitle>
    <CardText>
      {description}
    </CardText>

  </CardBody>
</Card>
)
};

export default ProjectCard;