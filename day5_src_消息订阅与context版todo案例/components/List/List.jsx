import React, { Component } from 'react'
import Item from '../Item/Item'
import context from '../../js/context'
import './List.css'
export default class List extends Component {
  render() {
    return (
      <context.Consumer>
          {(obj)=>{
            return <ul className="todo-main">
                      {obj.todos.map((item) => {
                        return  <Item key={item.id} todo={item} ></Item>
                      })}
                      {/* [<Item key={item.id} todo={{todoName:'吃饭'}}></Item>,<Item key={item.id} todo={{todoName:'睡觉'}}></Item>] */}
                    </ul>
            }}
      </context.Consumer>
    )
  }
}
