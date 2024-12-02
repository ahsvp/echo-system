import React  from 'react';


class Tools extends React.Component {
    render() {
        const { children ,
            OnAction
        } = this.props;
const onlychild = React.Children.only(children)
const count = React.Children.count(onlychild.props.children)

        return <div>
            
            <div className="list-header">
                
                <select value = 'a' name="status" onChange={OnAction}>

                    <option value="all">all</option>
                    <option value="active">active</option>
                    <option value="non active">non active </option>
                </select>
               

            </div>
            {children}

            <div className="list-footer">
                <h1> total {count} items</h1>
            </div>
        </div>
    }
}




export default Tools