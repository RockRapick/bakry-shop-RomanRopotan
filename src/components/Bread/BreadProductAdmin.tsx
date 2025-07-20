import {useAppSelector} from "../../redux/hooks.ts";
import {DataGrid, GridActionsCellItem, type GridColDef} from "@mui/x-data-grid";
import {Avatar, Box} from "@mui/material";
import RemoveIcon from "../templates/CustomIcons.tsx";
import {removeProduct} from "../../firebase/firebaseDBService.ts";


const BreadProductAdmin = () => {
    const rows = useAppSelector(state => state.products.currProds);
    const colums: GridColDef<(typeof rows)[number]>[] = [
        {field: 'id', headerName: 'ID', width: 90, flex: 0.3},
        {field: 'title', headerName: 'Product Name', width: 150, flex: 1},
        {field: 'category', headerName: 'Category', width: 90, flex: 0.4},
        {field: 'unit', headerName: 'Unit', width: 90, flex: 0.4,editable:true},
        {field: 'cost', headerName: 'Price in ILS', width: 90, flex: 0.4,editable:true},
        {
            field: 'img', width: 200, flex: 0.5, renderCell: (params) => {
                return (
                    <Avatar src={'/images/' + params.value}/>
                )}},
        {
            field: 'actions', type: 'actions', flex: 0.3,
            getActions: ({id}) => [
                <GridActionsCellItem label={'remove'} icon={<RemoveIcon/>}
                                     onClick={() => removeProduct( id as string)}/>
            ]
        }
    ]

    return (
        <Box>
            <DataGrid columns={colums} rows={rows}/>
        </Box>
    );
};

export default BreadProductAdmin;