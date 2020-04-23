import React from 'react';
import Flight from '../../../images/flight.jpg'
import Home from '../../../images/home.jpg'
import Personal from '../../../images/personal.jpg'
import './styles.css'
import Button from '../Tools/Button'


const PostsData = [
    {
      "category": "WorldCare Essential",
      "text": "Designed to cover the high costs associated with large medical events. A lowest-priced plan for people who want to be sure they can access in-patient and day-patient healthcare only when they really need it.",
      "image": Home,
      "brochurelink" : "https://drive.google.com/file/d/1v_qS9JnBzjXmxeaG_npPTgRUWQOLVzAg/view?usp=sharing"

    },
    {
      "category": "WorldCare Advance",
      "text": "Covers in-patient, day-patient and out-patient treatment including GP and specialist appointments, physiotherapy and alternative therapies.",
      "image": Flight,
      "brochurelink" : "https://drive.google.com/file/d/1v_qS9JnBzjXmxeaG_npPTgRUWQOLVzAg/view?usp=sharing"
    },
    {
      "category": "WorldCare Excel",
      "text": "Covers in-patient, out-patient and day-patient treatment at higher benefit levels than WorldCare Advance. Includes routine and complex dental care after a nine-month wait period.",
      "image": Personal,
      "brochurelink" : "https://drive.google.com/file/d/1v_qS9JnBzjXmxeaG_npPTgRUWQOLVzAg/view?usp=sharing"
    },
    {
      "category": "WorldCare Apex",
      "text": "Most comprehensive plan with very high benefit limits. covers in-patient, day-patient and out-patient treatment, at higher levels than WorldCare Excel, routine maternity care after a 12-month waiting period.",
      "image": Flight,
      "brochurelink" : "https://drive.google.com/file/d/1v_qS9JnBzjXmxeaG_npPTgRUWQOLVzAg/view?usp=sharing"
    }
]

const indivdualBox = {
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
}

const imageBox = {
    margin: '0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px', 
    position: 'absolute',
    zIndex: '1',
}

class NowCard extends React.Component { 
    constructor() {
      super();
      
      this.state = {
        posts: {}
      }
    }
    componentWillMount() {
      this.setState({
        posts: PostsData
      });
    }
   
  
    render() {
      return <div>
        <header className="app-header"></header>
        <div className='cards'>
          {
            Object
            .keys(this.state.posts)
            .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
          }
      </div>
      </div>
    }
}

class CardHeader extends React.Component {
    render() {
        const { image, category } = this.props;
        return (
        <header style={{display:'flex', justifyContent:'center'}} className="card-header">
            <h1 style={imageBox} className="card-header--title">{category}</h1>
            <img style={{opacity: '0.7'}} src={image} alt={category} />
        </header>
        )
    }
}

class CardBody extends React.Component {
    render() {
        return (
        <div style={{padding:'1rem'}} className="card-body">
            <h2>{this.props.title}</h2>
            <a href={this.props.brochurelink}>Download Brochure</a>
            <p style={{padding: '20px'}} className="body-content">{this.props.text}</p>
            <Button
              color="primary"
              variant="contained"
              size="small"
              component="a"
              href='/enquiryform'>
              GET A QUOTE
            </Button>
        </div>
        )
    }
}


class Card extends React.Component {
    render() {
        return (
        <article className='card' style={indivdualBox} >
            <CardHeader category={this.props.details.category} image={this.props.details.image}/>
            <CardBody text={this.props.details.text} brochurelink={this.props.details.brochurelink}/>
        </article>
        )
    }
}
  
export default NowCard