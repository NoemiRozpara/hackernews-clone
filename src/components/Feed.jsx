import React from 'react'

class Feed extends React.Component {

    componentDidMount(){
        this.props.getFeed('newest');
    }

    render(){
        console.log(this.props.feed)
        console.log(this.props.error)
        return (
            <div className="feed">
                <p>Feed</p>
                <div>{this.props.feed.body}</div>
                
            </div>
        )
    }
}

export default Feed