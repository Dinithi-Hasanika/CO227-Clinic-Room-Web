import React, { Component } from 'react';
import firebase from '../pages/Firebase';  
 

export default class UserManagement extends Component {
 
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('mydb1');
    this.unsubscribe = null;
    this.state = {
      mydb1: [],
      original: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.delete=this.delete.bind(this);
  }

  onCollectionUpdate = (querySnapshot) => {
    const mydb1 = [];
    const original=[];
    //Values of mydb1 changes with the search bar
    querySnapshot.forEach((doc) => {
      const { username, description } = doc.data();     //{include fields}
      mydb1.push({
        key: doc.id,
        doc, // DocumentSnapshot
        username,
        description,
      });
    });
    this.setState({
      mydb1
    });
    //original variable keeps the original values of mydb1 database
   querySnapshot.forEach((doc) => {
      const { username, description } = doc.data();
      original.push({
        key: doc.id,
        doc, // DocumentSnapshot
        username,
        description,
      });
    });
    this.setState({
      original
    });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  handleChange(e) {
    let currentList = [];   // hold the original version of the list   
    let newList = [];     //hold the filtered list before putting into state
  
    if (e.target.value !== "") {    // If the search bar isn't empty       
      this.state.original.map(original=>     // Assign the original list to currentList
        currentList.push(original.username)
      );
      newList = currentList.filter(item => {           
        const lc = item.toLowerCase();    // change current item to lowercase          
        const filter = e.target.value.toLowerCase();    // change search term to lowercase
        return lc.includes(filter);
      });
      let tempList=[];
      newList.map(item=>{
        for(let i=0;i<this.state.original.length;i++){
          if (item==this.state.original[i].username){
            tempList.push({
              key: this.state.original[i].key,
              doc:this.state.original[i].doc, // DocumentSnapshot
              username:this.state.original[i].username,
              description:this.state.original[i].description,
              //add other fields of the table
            });
          }
        }
      });
      this.setState({
        mydb1: tempList
      });

    } else {    // If the search bar is empty, set newList to original task list  
      this.setState({   
        mydb1: this.state.original
      });
    }
  }

  delete(id){     //Delete the values in the database
    firebase.firestore().collection('mydb1').doc(id).delete().then(() => {
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    }); 
    document.getElementById("search").value="";
  }

  render () {
    return (
      <div>
        <div id='UserManagementContainer'>
          <div className="App-header">
              <div className="row-5">
                  <a href="back"><font color='black'>Back</font></a>
              </div>
              <div className="row-4">
              
              </div>
          </div>
          <div  className="App-header3">
            <form id="remove">
                <h1><u>Remove Users</u></h1><br></br>
                <h2>Current users</h2>
                <hr/>
                <input id="search" type="text" className="input" onChange={this.handleChange} placeholder="Search..." /> 
                 
                  
            </form>  
          </div>
            <div  className="App-header3">      
            <table className="table table-stripe" fontcolor="r#37ccd6">
                    <thead>
                        <tr>
                        <th ><font color='lightseagreen'>User Name</font></th>
                        <th><font color='lightseagreen'>Description</font></th>
                        
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.mydb1.map(mydb1 =>
                            <tr>
                                <td><font color='white'>{mydb1.username}</font></td>
                                <td><font color='white'>{mydb1.description}</font></td>
                                <button onClick={this.delete.bind(this, mydb1.key)} class="btn btn-danger">Remove</button>
                            </tr>
                    )}
                    </tbody>
                </table>    
            </div>
        </div>
      </div>
    )
  }
}