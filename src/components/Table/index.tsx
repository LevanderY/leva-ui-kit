import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface Props {
	rows: {
		id: number;
		lastName: string;
		firstName: string;
		age: number;
	}[];
	columns: GridColDef[];
	styles?: {
		[key: string]: string;
	}
}

const Table: React.FC<Props> = ({ rows, columns, styles }): JSX.Element => {
	return (
		<div style={styles}>
			<DataGrid
				rows={rows}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: { page: 0, pageSize: 5 },
					},
				}}
				pageSizeOptions={[5, 10]}
				checkboxSelection
			/>
		</div>
	);
}

export default Table;