import React from 'react';

class Tabs extends React.Component {

  constructor(props) {
    super(props);
    debugger
    this.state = { tab: 0 };
  }

  render() {
    debugger
    const titles = this.props.tabs;
    // debugger
    return (
      <div className='tab-container'>
        <ul className='tab-headers flashit'>
          {titles.map(pane => {
            return <li key={pane.title}>{pane.title}</li>
          })}
        </ul>
      </div>
    )
  }
}
// this.props.tabs[this.state.tab].content

export default Tabs;