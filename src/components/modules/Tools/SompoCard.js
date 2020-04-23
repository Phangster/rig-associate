import React from 'react';
import Flight from '../../../images/flight.jpg'
import Home from '../../../images/home.jpg'
import Personal from '../../../images/personal.jpg'
import './styles.css'
import Button from '../Tools/Button'


const PostsData = [
    {
      "category": "HomeBliss Insurance",
      "text": "You’ve worked hard to own your home, and it’s probably the most important investment of your life. So, protect it in the best possible way. Homebliss insurance will take care of your home, with coverage you can tailor.",
      "image": Home,
      "link" : "https://www.sompo.com.sg/co-brand/homebliss/quotation/GetQuote?q=FbuDGTXdvxL2GU9MteAMKg%3D%3D",
      "brochurelink" : "https://drive.google.com/file/d/1vOur7idvy52DfsSLBwYa_Qh0NHyxVx12/view?usp=sharing"

    },
    {
      "category": "Travel Insurance",
      "text": "You should never have to worry while you travel for a well deserved holiday. Protect yourself and your loved ones with TravelJoy. ",
      "image": Flight,
      "link" : "https://www.sompo.com.sg/co-brand/traveljoy/quotation/GetQuote?q=FbuDGTXdvxIyDK942g2ctQ%3D%3D",
      "brochurelink" : "https://drive.google.com/file/d/1eNHJqkYCMqsAOBI5Y4btRYB91t87guQ8/view?usp=sharing"
      
    },
    {
      "category": "Personal Accident Insurance",
      "text": "Your best protection against accidents is to be prepared. You can customise your own plan with flexible limits, affordable premiums and 24-hour worldwide protection. ",
      "image": Personal,
      "link" : "https://www.sompo.com.sg/co-brand/personal-accident/quotation/GetQuote?q=FbuDGTXdvxJCmGgC4vsW0A%3D%3D",
      "brochurelink" : "https://drive.google.com/file/d/1durgfiUcl_ZEtryyN-Hq_FirAHmadEff/view?usp=sharing"
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

class SompoCard extends React.Component { 
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
          <a href={this.props.brochurelink} >Download Brochure</a>
          <h2>{this.props.title}</h2>
          <p style={{padding: '20px', height: '100px'}} className="body-content">{this.props.text}</p>   
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
            <CardBody text={this.props.details.text} link={this.props.details.link} brochurelink={this.props.details.brochurelink}/>
        </article>
        )
    }
}
  
export default SompoCard