import React, { Component } from 'react';
import logo from './images/room1.jpg'; 
import {Link} from 'react-router-dom';
    

export default class Search_complete extends Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
        this.state = {
            inputValue: "",
            suggestions: this.props.suggestions,
            filteredSuggestions: null,
            hideSuggestions: true
        }
    }

    hadleChange = (inputValue) => {

        if (inputValue.trim() !== '') {

            let filteredSuggestions = this.state.suggestions.filter(
                (suggestion) => suggestion.toUpperCase().indexOf(inputValue.toUpperCase()) > -1
            );
            this.setState({
                hideSuggestions: false,
                inputValue,
                filteredSuggestions: filteredSuggestions.length === 0 ? null : filteredSuggestions
            });
        }
        else {
            this.setState({
                hideSuggestions: true,
                inputValue: '',
                filteredSuggestions: null
            });
        }
    }
    handleOnClick  = (item) => {
        //This sets the state value upon click - Hides suggestions, resets input search window (A)
        this.setState({
            hideSuggestions: true,
            inputValue: item,
            filteredSuggestions: null
        }, this.props.handleOnSelect(item))
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div class="container3">
            <div className="container1" style={{float : 'left', paddingRight : '5px'}}>                
                
            <h3>Your one stop solution to <br/> easy room rentals! </h3> 
            
            <div className="newlist"> Current Locations : Halifax, Toronto, Vancouver and Montreal </div>
            <br/><br/>
                <input 
                    type="text"
                    style={{float : 'left', paddingRight : '1px'}}
                    ref={this.inputRef}
                    onChange={e => this.hadleChange(e.target.value)}
                    value={this.state.inputValue}
                    placeholder="Enter Location to begin Search"
                    style={{ width: 'calc(250px + 1rem)' }} />
                
                <Link  className="btn btn-primary" to={"/roomlistings"} style={{marginLeft : '10px'}} >Search</Link>
                    
                {
                    this.state.filteredSuggestions !== null && this.state.hideSuggestions === false ?
                        (   <div>
                            <ul className="suggestionList">
                                {
                                    this.state.filteredSuggestions.map(
                                        (item, index) =>
                                            <li key={index} onClick={() => { this.handleOnClick(item) }}>
                                                {item}
                                            </li>
                                    )
                                }
                            </ul>
                            
                            
                            </div>
                        )
                        : 
                        <div className="newlist"> <br/> <br/> <br/> 
                        
                        </div>
                }

            </div>
            <div className="container2" style={{float : 'left', paddingRight : '5px'}} > 
            <img className="img2" src={logo} alt="Logo" />               
            <br/>
            Choose the location you want to reside in.
            
           </div>
            </div>
        )
    }
}


