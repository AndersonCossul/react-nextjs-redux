import Page from '../components/page'
import { connect } from 'react-redux';

const index = () => (
  <div>
    <div>
      <h1>Home Page</h1>
    </div>
    <style jsx>{`
    `}</style>
  </div>
)

export default Page(connect(state=>state)(index))