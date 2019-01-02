import React from 'react'

class Feed extends React.Component {

    componentDidMount(){
        this.props.getFeed('newest');
    }

    render(){
        // console.log(typeof this.props.stories.body)
        // console.log(this.props.error)
        return (
            <div className="feed">
                <p>Feed</p>
                <div>{this.props.stories.body}</div>
                
            </div>
        )
    }
}

export default Feed