/*
    Utility functions 
    v.0.0.1
*/

/**
 * Log key...val pairs in log group
 * params: 
 *  title:REQUIRED
 *  ...{}
 */
const logGroup = data =>{
    let props = Object.keys(data);
    if (data.title){
        console.group(data.title);
    } else {
        console.group("logGroup");
    }
    
    props.map((key)=>{
        let val = data[key];
        return console.log(key,"...",val); 
    });
    console.groupEnd();
}

/**
 * Prepare raw table data 
 * params: 
 *  colDef: array of objects (according to mui table defs) 
 *  rawData: array of objects 
 */
const prepTableData = ({colDef, rawData}) =>{
    //debugger 
    let tableData=[];
    //map over data rows
    rawData.map((row, rid)=>{
        let dataRow = {
            id: rid 
        }
        //map over columns
        colDef.map((col)=>{
            let colId = col.id
            if (row[colId]){
                dataRow[colId] = row[colId];
            } else {
                dataRow[colId] = null;
            }
        })
        //add to tableData collection
        tableData.push(dataRow);
    });
    //return all table data
    return tableData;
}

const sortTableData = (array, cmp) =>{
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);   
}

export {
    logGroup,
    prepTableData,
    sortTableData
}