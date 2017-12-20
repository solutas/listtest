import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';


/**
 * Implements the drag source contract.
 */
const itemSource = {
    beginDrag(props) {
      return {
        props
      };
    }
  };


 /**
  * Specifies the props to inject into your component.
  */
 function collect(connect, monitor) {
   return {
     connectDragSource: connect.dragSource(),
     isDragging: monitor.isDragging()
   };
 }

 
const propTypes = {
    
  
    // Injected by React DnD:
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired
  };



class Item extends Component {

    render() {
        return this.props.connectDragSource(
            <li className={`${this.props.active ? "active" : ""}`} 
                key={this.props.id} 
                onClick={this.props.onClick}>
                    {this.props.children}
                    <hr/>
                    isDragging: {this.props.isDragging ? "i am dragging" : "not dragging"}
                    {this.props.isDragging && ' (and I am being dragged now)'}
            </li>
        )
    }
}


Item.propTypes = propTypes;

export default DragSource("ITEM", itemSource, collect)(Item);

//export default Item;