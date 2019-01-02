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
                
            </div>
        )
    }
}

export default Feed