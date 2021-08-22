import React from 'react';
import GitHubUser from '../services/GitHubUser';

class SearchUser extends React.Component {
  handleSubmit(e) {
    var self = this;
    e.preventDefault();
    console.log(this.refs.username.value);
    GitHubUser.getByUsername(this.refs.username.value).then(res => self.props.updateUser(res.data));

    GitHubUser.getReposByUsername(this.refs.username.value).then(res =>
      self.props.updateRepositories(res.data),
    );
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Github info</h1>
        <div className="row">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>Username</label>
            <input
              type="text"
              ref="username"
              className="form-control"
              placeholder="Ex: amandasz05"
            />
            <button type="submit" className="btn btn-primary">
              Buscar
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default SearchUser;
