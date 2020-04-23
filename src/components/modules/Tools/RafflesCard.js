import React from 'react';
import Flight from '../../../images/flight.jpg'
import Home from '../../../images/home.jpg'
import Personal from '../../../images/personal.jpg'
import './styles.css'
import Button from '../Tools/Button'


const PostsData = [
    {
      "category": "Worldwide Health Options",
      "text": "Is a modular international health insurance plan for individuals and families. It allows you to customise your plan to suit your situation.",
      "image": Home,
      "brochurelink":"https://drive.google.com/file/d/1jQ_7g6F_d9Iq5ncBjdszn1EkGDu3Auo0/view?usp=sharing"
    },
    {
      "category": "Lifeline",
      "text": "Has three levels of cover - Essential, Classic and Gold - as well as options for extra international assistance and a choice of deductibles to help you to select the cover you need to match your budget ",
      "image": Flight,
      "brochurelink": "https://drive.google.com/file/d/1-FoaBb8mTqAfBqO3IuIrKn54qJijDgQL/view?usp=sharing"
    },
    {
      "category": "Company Plan",
      "text": "Reassurance for your employees and family.  With four levels of cover: Gold Superior, Gold, Classic and Essential. These options allow companies to select the plans most suitable for their business.",
      "image": Personal,
      "brochurelink": "https://drive.google.com/file/d/1j7cI28BxYEXcwMfp9asc2a1Bb5FfblwD/view?usp=sharing"
    },
    {
      "category": "Oil & Gas Plan",
      "text": "Tailor-made for the oil and gas industry, safeguarding your employees’ health ensures that the people critical to your business can access medical expertise wherever they live or work.",
      "image": Personal,
      "brochurelink": "https://drive.google.com/file/d/1qsatDLl35rSsHeVm2rxPde5-X1Jao2Zd/view?usp=sharing"
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

class RafflesCard extends React.Component { 
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
            <a href={this.props.brochurelink}>Download Brochure</a>
            <h2>{this.props.title}</h2>
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
  
export default RafflesCard