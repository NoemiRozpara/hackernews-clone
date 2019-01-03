import React from 'react'

class Feed extends React.Component {

    componentDidMount(){
        this.props.getFeed(this.props.currentCat);
    }

    render(){
        console.log(this.props.stories)
        // console.log(this.props.error)
        return (
            <div className="feed">
                <p>Feed {this.props.loading}</p>
                <div>
                {this.props.stories.map((story, index) => {
                    return <a key={index} href={story.url} target="_bank">
                        <p>{story.title}</p>
                    </a> 
                })}
                </div>
                
            </div>
        )
    }
}

export default Feed