import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './Table.module.scss';

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }} className={styles.paginationActions}>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, calories, fat, carbs, protein, fiber, sodium) {
  return { name, calories, fat, carbs, protein, fiber, sodium };
}

const rows = [
  createData('Cupcake', 305, 3.7, 67, 4.3, 1.2, 120),
  createData('Donut', 452, 25.0, 51, 4.9, 0.7, 210),
  createData('Eclair', 262, 16.0, 24, 6.0, 1.0, 95),
  createData('Frozen yoghurt', 159, 6.0, 22, 3.5, 0.5, 80),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.3, 150),
  createData('Honeycomb', 408, 3.2, 87, 6.5, 2.1, 180),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.2, 0.8, 110),
  createData('Jelly Bean', 375, 0.0, 94, 0.0, 0.2, 60),
  createData('KitKat', 518, 26.0, 65, 7.0, 1.5, 200),
  createData('Lollipop', 392, 0.2, 98, 0.0, 0.1, 55),
  createData('Marshmallow', 318, 0, 81, 2.1, 0.3, 70),
  createData('Nougat', 360, 19.0, 45, 4.3, 1.0, 130),
  createData('Oreo', 437, 18.0, 63, 5.2, 1.4, 170),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const rowsPerPage = 5; // Fixed value
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <TableContainer component={Paper} className={styles.tableContainer}>
      <div className={styles.scrollWrapper}>
        <Table className={styles.table} aria-label="custom pagination table">
          <TableHead>
            <TableRow className={styles.tableheader}>
              <TableCell align="center" className={styles.tableCell}><strong>Action</strong></TableCell>
              <TableCell className={styles.tableCell}><strong>Dessert (100g serving)</strong></TableCell>
              <TableCell align="right" className={styles.tableCell}><strong>Calories</strong></TableCell>
              <TableCell align="right" className={styles.tableCell}><strong>Fat&nbsp;(g)</strong></TableCell>
              <TableCell align="right" className={styles.tableCell}><strong>Carbs&nbsp;(g)</strong></TableCell>
              <TableCell align="right" className={styles.tableCell}><strong>Protein&nbsp;(g)</strong></TableCell>
              <TableCell align="right" className={styles.tableCell}><strong>Fiber&nbsp;(g)</strong></TableCell>
              <TableCell align="right" className={styles.tableCell}><strong>Sodium&nbsp;(mg)</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.name} className={styles.tableRow}>
                <TableCell align="center" className={styles.tableCell}>
                  <button className={styles.editButton}><EditIcon /></button>
                  <button className={styles.deleteButton}><DeleteIcon /></button>
                </TableCell>
                <TableCell component="th" scope="row" className={styles.tableCell}>
                  {row.name}
                </TableCell>
                <TableCell align="right" className={styles.tableCell}>
                  {row.calories}
                </TableCell>
                <TableCell align="right" className={styles.tableCell}>
                  {row.fat}
                </TableCell>
                <TableCell align="right" className={styles.tableCell}>
                  {row.carbs}
                </TableCell>
                <TableCell align="right" className={styles.tableCell}>
                  {row.protein}
                </TableCell>
                <TableCell align="right" className={styles.tableCell}>
                  {row.fiber}
                </TableCell>
                <TableCell align="right" className={styles.tableCell}>
                  {row.sodium}
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 40 * emptyRows }}>
                <TableCell colSpan={8} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className={styles.footerRight}>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[]}
              colSpan={8}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </div>
    </TableContainer>
  );
}