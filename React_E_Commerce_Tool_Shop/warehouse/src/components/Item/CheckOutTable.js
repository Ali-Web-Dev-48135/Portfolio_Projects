

const CheckOutTable = ({item}) => {
    
    return(
        <>    
            <tr key={item.Id}>
                <td>{item.Item}</td>
                <td>${item.Price}</td>
                <td>{item.Quantity - item.Quantity + 1}</td>
            </tr>      
        </>
    )
        
};

export default CheckOutTable;   