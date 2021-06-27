import { link } from 'fs'
import { stringify } from 'querystring'
import React, {Component} from 'react'


type Results ={
    result:{
        headline:{
            main: string
        },
        multimedia: string,
        snippet: string
        keywords: [],
        web_url: string
    }
}

export default class NytResults extends Component<{}, Results>{
    constructor(props: {}){
        super(props)
        this.state={
            result:{
                headline:{
                    main: ""
                },
                multimedia: "",
                snippet: "",
                keywords: [""],
                web_url: ""
            }
        }
    }
    render(){
        return(
        {this.props.results.map(result =>{
            return(
                <div key={this.result.id}>
                    <h3>{this.result.headline.main}</h3>
                    {this.result.mulitmedia.length > 1 ? <img alt='article' src={`http://nytimes.com/${this.result.mulitmedia[1]}.url`} /> : '' }
                    <p>
                        {this.result.snippet}
                        <br />
                        {this.result.keywords.length > 0? "Keywords: " : ""}
                    </p>
                    <ul>
                        {result.keywords.map(keyword => <li key={this.keyword.value}>{this.keyword.value}</li>)}
                    </ul>
                    <a href={this.result.web_url}><button>Read it</button></a>
                </div>
            )
        })}
        // <div>
        //     {/* <button onClick={(e) => this.props.changePageNumber(e, "down")}>Previous 10</button> */}
        // </div>
    )
}
}