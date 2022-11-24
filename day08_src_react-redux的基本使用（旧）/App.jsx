import { connect } from 'react-redux'
import Count from './components/Count'
export default function App () {
  // 返回的是一个新组件
  const WithCount = connect(function mapStateToProps(state){
    console.log(state);
    // return对象里有什么，Count组件中的props参数就接收什么
    return {
      count:state.count,
    }
  })(Count)
    return (
      <div>
        {/* count:state.count,作为组件props参数进行递 */}
        <WithCount></WithCount>
        <hr />
      </div>
    )
}
