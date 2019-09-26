import React, {Component} from 'react'
import MainArticleCard from '../MainArticleCard/index.js'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import ArticleCard1 from '../ArticleCard1/index.js'
import ArticleCard2 from '../ArticleCard2/index.js'
import ArticleCard3 from '../ArticleCard3/index.js'

class LatestNewsCluster extends Component{
    render(){
        return (            
            <div className='row bg-light container m-auto'>
                <div className='col-8 bg-light p-0'>
                    <MainArticleCard/>
                </div>
                <div className='col-4 bg-dark p-0'>
                    <div className='row bg-light m-0 container '>
                        <ArticleCard1/>
                    </div>
                    <div className='row bg-light m-0 container'>
                        <ArticleCard2/>
                    </div>
                    <div className='row bg-light m-0 container'>
                        <ArticleCard3/>
                    </div>
                </div>
            </div>
        )
    }
}

export default LatestNewsCluster