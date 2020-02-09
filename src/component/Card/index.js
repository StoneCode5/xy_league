import React from 'react';
import './index.css'
const LOL_LEVEL_TABLE = {
    1: '青铜',
    2: '白银',
    3: '黄金',
    4: '铂金',
    5: '钻石',
    6: '大师',
    7: '王者',
    8: '黑铁',
    9: '宗师',
}

class Card extends React.Component {

    state = {
        isAddHover: false,
    }

    handleAddEnter = () => {
        this.setState({
            isAddHover: true,
        })
    }

    handleAddLeave = () => {
        this.setState({
            isAddHover: false,
        })
    }


    copyToClip (content, message) {
        var aux = document.createElement("input");
        aux.setAttribute("value", content);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
        if (message == null) {
            alert("复制成功");
        } else {
            alert(message);
        }
    }

    copyName = () => {
        let SuccessText = '复制游戏昵称成功，快去游戏里找他开黑吧'
        this.copyToClip(this.props.item.game_name, SuccessText)
    }

    render () {
        const item = this.props.item
        const state = this.state
        return (
            <div className='card'>
                <div className="cardInnerBox">
                    <div className="cardRow">
                        <div className="cardPortraitBox">
                            <img src={item.portrait} className={item.online === 0 ? `${'gray'} ${'cardImg'} ` : 'cardImg'} alt="头像" />
                            <div className="cardCircle">
                                <img className={item.online === 0 ? 'gray' : ''} src={require('../../assets/img/quan.png')} alt="" />
                            </div>
                            <div className="cradSexBox">
                                <img className={item.online === 0 ? 'gray' : ''} src={item.sex === 0 ? require('../../assets/img/male.png') : require('../../assets/img/famale.png')} alt="性别" />
                            </div>
                        </div>
                    </div>
                    <div className="cardRow cardTitleBox">
                        <div className="cardTitle">{item.game_name}</div>
                        <div className="cardAdd" onMouseEnter={this.handleAddEnter} onMouseLeave={this.handleAddLeave}>
                            {
                                state.isAddHover ?
                                    <div className="cardCopyBox" onClick={this.copyName}>
                                        复制昵称
                                </div>
                                    :
                                    <div className="cardCopyIcon">
                                        <img src={require('../../assets/img/add.png')} alt="" className="cardIconImg" />
                                    </div>
                            }
                        </div>
                    </div>
                    <div className="cardRow cardLevelBox">
                        <div className="secondTitle" style={{ marginRight: '21px' }}><img src={require('../../assets/img/ref.png')} width='14px' height='11px' alt="" /><span>{item.game_server}</span></div>
                        <div className="secondTitle" style={{ justifyContent: 'flex-start' }}><img src={require('../../assets/img/v.png')} width='13px' height='11px' alt="" /><span>{LOL_LEVEL_TABLE[item.level]}</span></div>
                    </div>
                    <div className="cardFx mt-5" style={{ alignItems: 'baseline' }}>
                        <div className="cardLeft">
                            游戏风格
                        </div>
                        <div className="cardRight">
                            {
                                item.style.length > 0 && item.style.map((styleName, index) => <div key={index} className='cardStyleName'>{styleName}</div>)
                            }
                        </div>
                    </div>
                    <div className="cardFx mt-5" style={{ alignItems: 'baseline' }}>
                        <div className="cardLeft">
                            擅长位置
                        </div>
                        <div className="cardRight">
                            {
                                item.good_at_location.length > 0 && item.good_at_location.map((goodAt, index) => <div key={index} className='cardGoodAt'>{goodAt}</div>)
                            }
                        </div>
                    </div>
                    <div className="cardFx mt-15" style={{ alignItems: 'center' }}>
                        <div className="cardLeft">
                            擅长英雄
                        </div>
                        <div className="cardRight">
                            {
                                item.good_at_hero.length > 0 && item.good_at_hero.map((goodAtHero, index) => <img key={index} src={goodAtHero.portrait} className='cardGoodAtHeroTypeOne' style={{left: `${index * -7}px`}} alt="擅长英雄" />)
                            }

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Card.defaultProps = {
    item: {
        "portrait": 'http://thirdwx.qlogo.cn/mmopen/vi_32/kzd11B5SCOT61qWScPbHsGq2Wehd7zZlPBhd4tXUYibxfibSxSpzvAQQUKANgFkrIuv8mJ2z2ul832peg35yuA8A/132',
        "sex": 1,
        "level": 2,
        "online": 0,
        "game_server": "艾欧里亚艾欧里亚",
        "game_name": "哈哈哈这是一个长",
        "good_at_location": [						// 如果是新会员，则此项为空 
            "上路",
            "打野",
            "上路",
            "打野",
        ],
        "good_at_hero": [							// 如果是新会员，则此项为空 
            { "en": "Cassiopeia", "sc": "魔蛇之拥", "name": "卡西奥佩娅", "nickname1": "蛇女", "nickname2": "", "portrait": "http://thirdwx.qlogo.cn/mmopen/vi_32/kzd11B5SCOT61qWScPbHsGq2Wehd7zZlPBhd4tXUYibxfibSxSpzvAQQUKANgFkrIuv8mJ2z2ul832peg35yuA8A/132" },
            { "en": "Cassiopeia", "sc": "魔蛇之拥", "name": "卡西奥佩娅", "nickname1": "蛇女", "nickname2": "", "portrait": "http://thirdwx.qlogo.cn/mmopen/vi_32/kzd11B5SCOT61qWScPbHsGq2Wehd7zZlPBhd4tXUYibxfibSxSpzvAQQUKANgFkrIuv8mJ2z2ul832peg35yuA8A/132" },
            { "en": "Corki", "sc": "英勇投弹手", "name": "库奇", "nickname1": "飞机", "nickname2": "", "portrait": "http://thirdwx.qlogo.cn/mmopen/vi_32/kzd11B5SCOT61qWScPbHsGq2Wehd7zZlPBhd4tXUYibxfibSxSpzvAQQUKANgFkrIuv8mJ2z2ul832peg35yuA8A/132" }
        ],
        "style": [									// 如果是新会员，则此项为空 
            "风骚走位",
            "神机妙算",
            "神机妙算入城欧派",

        ],
    }
}
export default Card