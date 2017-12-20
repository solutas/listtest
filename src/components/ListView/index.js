import React, {Component} from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Item from './item';

class ListView extends Component {

    select = (id) => {
        this.props.onClick(id);
    }

    componentDidUpdate() {
        if(this.props.scrollDown) {
            this.element.scrollTop = this.element.scrollHeight - this.element.clientHeight;
        }
    } 
    render() {
        return (
            <ul className="listView" ref={(ref) => this.element = ref}>
                {this.props.items.map((item, index)=> 
                        <Item active={item.active} key={item.id} id={item.id} onClick={()=> this.select(item.id)}>
                            id={item.id} {item.title} {item.active} asdf
                        </Item>
                                                
                    )}
            </ul>
        )
    }
}

export default DragDropContext(HTML5Backend)(ListView);