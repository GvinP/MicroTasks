

export const NewComponent = () => {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]
    return (
        <>
            <table>
                <tr>
                    <th>index</th>
                    <th>manufacturer</th>
                    <th>model</th>
                </tr>
                {topCars.map((topCars,index)=>{
                    return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{topCars.manufacturer}</td>
                            <td>{topCars.model}</td>
                        </tr>
                    )
                })}

            </table>
        </>
    )
}