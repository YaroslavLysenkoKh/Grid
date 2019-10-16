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
        background: {}
    };

    select = (index) => {
        const { selectedIndexes , background } = this.state;
        background[index] = !background[index];
        if(selectedIndexes.includes(index)){
            this.setState(prevState => ({
                selectedIndexes : prevState.selectedIndexes.filter((e) =>  e !== index ),
                ...background
            }))
        }else{
            this.setState({
                    ...this.state.selectedIndexes.push(index),
                    ...background
                }
            )
        }
    };

    gridRender = (value) => (
        <div key={value.id} onClick={() => this.select(value.id)} className={ this.state.background[value.id] ? 'gridBack' : 'grid'}>
            <div className='name-content'>
                <h2>{value.name}</h2>
            </div>
            <div>
                <img src={value.url} alt={value.id} className='image'/>
            </div>
        </div>
    );

    onSubmit = () => {
        alert(JSON.stringify(this.state.selectedIndexes,null));
    };

    render() {
        return (
            <div className="App">
                {json.map((value) => this.gridRender(value))}
                <button onClick={this.onSubmit} className='submit'>
                    Submit
                </button>
            </div>
        );
    }
}

export default App;
