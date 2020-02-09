import React from 'react';
import './index.css'
import FilterBox from '../FilterBox'
import Card from '../Card'
class Main extends React.Component {


    render () {
        return (
            <div className='main'>
                <FilterBox />
                <div className="cardBox">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        )
    }
}

export default Main