import React, { Component } from 'react'
import UserService from '../services/UserService'

class ListUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                Users: []
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(id){
        UserService.deleteUser(id).then( res => {
            this.setState({Users: this.state.Users.filter(User => User.id !== id)});
        });
    }
    viewUser(id){
        this.props.history.push(`/view-User/${id}`);
    }
    editUser(id){
        this.props.history.push(`/add-User/${id}`);
    }

    componentDidMount(){
        UserService.getUsers().then((res) => {
            this.setState({ Users: res.data});
        });
    }

    addUser(){
        this.props.history.push('/add-User/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Users List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addUser}> Add User</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> User First Name</th>
                                    <th> User Last Name</th>
                                    <th> User Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Users.map(
                                        User => 
                                        <tr key = {User.id}>
                                             <td> { User.firstName} </td>   
                                             <td> {User.lastName}</td>
                                             <td> {User.emailId}</td>
                                             <td>
                                                 <button onClick={ () => this.editUser(User.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(User.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewUser(User.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListUserComponent
