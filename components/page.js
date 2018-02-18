import React from 'react';
const page = (Page) => {
  return (
    class PageWrapper extends React.Component {
      render() {
        return (
          <Page />
        )
      }
    }
  )
}
export default page;