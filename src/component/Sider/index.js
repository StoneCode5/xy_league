import React from 'react';
import './index.css'
class Sider extends  React.Component {

    state = {
        isHover: false,
    }

    handleEnter = () => {
        this.setState({
            isHover: true,
        })
    }

    handleLeave = () => {
        this.setState({
            isHover: false,
        })
    }
    render () {
        const state = this.state
        return (
            <div className='menu'>
                <div className={state.isHover ? 'menuIterActive menuItemBox' : 'menuItemBox'} onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
                    <div className="siderItemBox" >
                        <div><img src={state.isHover ? require('../../assets/img/lol-hover.png') : require('../../assets/img/lol-normal.png')} alt="侧边栏图标" className="siderIcon"/></div>
                        <div className='siderItemName'>英雄联盟</div>
                    </div>
                </div> 
            </div> 
        )
    }
}
export default Sider