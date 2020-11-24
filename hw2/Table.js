import React from 'react';

const TableHeader = () => { 
    // boilerplate table header functional component
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>URL</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    console.log("propsBody", props);
    // boilerplate table body functional component 
    // we use Array.map to create table rows from LinkData passed via props
    const rows = props.linkData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td><a href={row.url}>{row.url}</a></td>
                <td><button onClick={() => props.removeLink(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { linkData, removeLink } = props;
  // console.log(linkData)
   console.log("propsTable", props);
    {/*TODO - return <table> component, TableHeader and TableBody  */}
return(
    <table>
    <TableHeader/>
    <TableBody linkData={linkData} removeLink={removeLink}/> 
     
    </table>
)

}

export default Table;

