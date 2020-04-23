import React from 'react';
import Flight from '../../../images/flight.jpg'
import Home from '../../../images/home.jpg'
import Personal from '../../../images/personal.jpg'
import './styles.css'
import Button from '../Tools/Button'


const PostsData = [
    {
      "category": "SimpleCare",
      "text": "Affordable international health insurance for cost-conscious customers that don’t want to compromise on quality. designed to offer vital health protection and access to world-class medical facilities, and all with an affordable price tag.",
      "image": Personal,
      "brochurelink" : "https://drive.google.com/file/d/1dx1yt8dRMTyUafgrIL50Z0lwpBRt3Y0H/view?usp=sharing"
    },
    {
      "category": "SimpleCare CORE",
      "text": "For individuals that want access to high-quality private healthcare providers, but are on a tight budget. This plan offers coverage for all major in-patient treatment including hospitalization, surgery and cancer treatment, as well as medical evacuation and repatriation.",
      "image": Home,
      "brochurelink" : "https://drive.google.com/file/d/1dx1yt8dRMTyUafgrIL50Z0lwpBRt3Y0H/view?usp=sharing"
    },
    {
      "category": "SimpleCare 100",
      "text": "affordable health coverage for both in-patient and out-patient treatment. Includes cover for major health events such as hospitalization, surgery and cancer treatment. It also offers low levels of cover for out-patient treatment, including GP visits, drugs and dressings, and physiotherapy.",
      "image": Flight,
      "brochurelink" : "https://drive.google.com/file/d/1dx1yt8dRMTyUafgrIL50Z0lwpBRt3Y0H/view?usp=sharing"
    },
    {
      "category": "SimpleCare 250",
      "text": "comprehensive international health cover that won’t break the bank. Includes in-patient cover, including for hospitalization, surgery and cancer treatment, as well as medium levels of cover for out-patient treatment such as GP visits, drugs and dressings, and physiotherapy.",
      "image": Home,
      "brochurelink" : "https://drive.google.com/file/d/1dx1yt8dRMTyUafgrIL50Z0lwpBRt3Y0H/view?usp=sharing"
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

class NowCardTwo extends React.Component { 
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
        <div className='cards' style={{background: '#EAE7DC'}}>
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
  
export default NowCardTwo