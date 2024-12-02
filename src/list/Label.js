import React from 'react';
import './label.css'





class Label extends React.Component {
    render() {
        const props = this.props;
        const style = props.isactive ? { background: 'yellow' } : { background: 'green' };

        return (
            
                <span onClick={()=>{alert('clicked ' + props.isactive)}}
                className='list-label-item' style={style}>{props.isactive ? 'active' : 'non active'}</span>
            
        );
    }
}




export default Label