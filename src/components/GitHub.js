import React from 'react';
import SearchUser from './SearchUser';
import UserInfo from './UserInfo';
class GitHub extends React.Component {
    state = {
      user : null,
      repos : []
    }

    updateUser(user) {
      this.setState({user : user})
    }

    updateRepositories(repos) {
      this.setState({repos : repos})
    }

    render() {
        return (  
            <div className="container">
                <SearchUser updateUser={this.updateUser.bind(this)} 
                            updateRepositories={this.updateRepositories.bind(this)}/>
                <UserInfo user={this.state.user} 
                          repos={this.repos}/>
            </div>
        );
    }
}
export default GitHub;