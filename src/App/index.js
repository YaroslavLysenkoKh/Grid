import React from 'react';
import './index.css';
import json from './test';

class App extends React.Component {

    state = {
        selectedIndexes: [],
        background: {}
    };

    select = (index) => {
        const {selectedIndexes, background} = this.state;
        background[index] = !background[index];
        if (selectedIndexes.includes(index)) {
            this.setState(prevState => ({
                selectedIndexes: prevState.selectedIndexes.filter((e) => e !== index),
                ...background
            }))
        } else {
            this.setState({
                    ...this.state.selectedIndexes.push(index),
                    ...background
                }
            )
        }
    };

    gridRender = (value) => (
        <div key={value.id} onClick={() => this.select(value.id)}
             className={this.state.background[value.id] ? 'selected-grid' : 'grid'}>
            <div className='name-content'>
                <h2>{value.name}</h2>
            </div>
            <div>
                <img src={value.url} alt={value.id} className='image'/>
            </div>
        </div>
    );

    onSubmit = () => {
        alert(JSON.stringify(this.state.selectedIndexes, null));
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
