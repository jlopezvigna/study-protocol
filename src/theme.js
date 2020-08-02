import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#28a745',
        },
        secondary: {
            main: '#ffc107',
        },
        error: {
            main: '#dc3545',
        },
    },
    typography: {
        fontFamily: 'Nunito Sans',
    },
    overrides: {
        MuiAvatar: {
            colorDefault: {
                backgroundColor: '#35dec7',
            },
        },
        MuiInput: {
            underline: {
                '&&&:before': {
                    borderBottom: 'none',
                },
                '&&:after': {
                    borderBottom: 'none',
                },
            },
        },
        MuiTableHead: {
            root: {
                backgroundColor: '#f5f5f5',
            },
        },
        MuiTableBody: {
            root: {
                background: '#FFFF',
            },
        },
        MuiTableCell: {
            head: {
                fontSize: '14px',
                fontWeight: 600,
                lineHeight: 'normal',
                padding: '10px 16px',
            },
            body: {
                fontSize: '14px',
                lineHeight: 'normal',
                padding: '13px 16px',
            },
        },
    },
});

export default theme;
