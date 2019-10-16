import React from 'react';
import './index.css';

const json = [
    {
        "id": 2,
        "url": "https://a.wattpad.com/cover/101598820-288-k582048.jpg",
        "name": "Вася"
    },
    {
        "id": 1,
        "url": "https://cs7.pikabu.ru/post_img/big/2018/07/17/8/1531833728129319373.jpg",
        "name": "Марго"
    },
    {
        "id": 4,
        "url": "http://www.xa-xa.org/uploads/posts/2010-09/1285791620_1285707391_1.jpg",
        "name": "Розо"
    },
    {
        "id": 3,
        "url": "https://f1.upet.com/DFOwu1HYVC.jpg",
        "name": "Макс"
    },
    {
        "id": 6,
        "url": "https://cs4.pikabu.ru/post_img/2016/01/07/8/1452170055137768324.jpg",
        "name": "Борис"
    },
    {
        "id": 5,
        "url": "https://cs.pikabu.ru/post_img/2013/12/09/7/1386586596_1922159988.jpg",
        "name": "Супакэт"
    }
];

class App extends React.Component {

    state = {
        selectedIndexes: [],
        background: false,
    };

    select = (e, index) => {
        let target = e.target;
        let status = target.classList.contains('active');
        let selection = [...this.state.selectedIndexes];
        if(selection.includes(index)){
            target.classList.remove(status ? 'active' : 'inactive');
            const filteredAry = selection.filter((e) =>  e !== index );
            this.setState({
                selectedIndexes : filteredAry
            })
        }else{
            target.classList.add(status ? 'inactive' : 'active');
            this.setState({
                    ...this.state.selectedIndexes.push(index),
                }
            )
        }
    };

    gridRender = (e, value, index) => (
        <div key={index} onClick={(e) => this.select(e, value.id)} className='grid'>
            <div className='name-content'>
                <h2>{value.name}</h2>
            </div>
            <div>
                <img src={value.url} alt={index} className='image'/>
            </div>
        </div>
    );
    onSubmit = () => {

    };

    render() {
        let phone = this.state.background ? "blackButton" : "whiteButton";
        console.log(this.state.selectedIndexes);
        return (
            <div className="App">
                {json.map((value, index) => this.gridRender(phone, value, index))}
                <button onClick={this.onSubmit} className='submit'>
                    Submit
                </button>
            </div>
        );
    }
}

export default App;
