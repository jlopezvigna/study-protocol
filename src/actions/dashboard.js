import * as types from './types';
import { randomNumber } from '../helpers';

// Data simulation from API
export const fetchData = () => {
    return { type: types.FETCH_DATA_DASHBOARD, payload: initialState() };
};

const initialState = () => {
    return {
        markers: [
            { title: 'user online now', total: randomNumber(), average: 23, increase: null },
            { title: 'campaigns', total: randomNumber(), average: 1, increase: null },
            { title: 'sessions', total: randomNumber(), average: 4, increase: false },
            { title: 'Bounce rate', total: randomNumber(), average: 12, increase: true },
            { title: 'form interactions', total: randomNumber(), average: 12, increase: false },
            { title: 'chat interactions', total: randomNumber(), average: 9, increase: false },
            { title: 'new leads', total: randomNumber(), average: 24, increase: true },
            { title: 'Follow Up', total: randomNumber(), average: 18, increase: false },
            { title: 'Pending MR', total: randomNumber(), average: 22, increase: true },
            { title: 'Pre-Screening', total: randomNumber(), average: 23, increase: true },
            { title: 'Scheduled', total: randomNumber(), average: 94, increase: true },
            { title: 'Enrolled', total: randomNumber(), average: 83, increase: true },
        ],
        progresses: [
            { name: 'Allie Williams', progress: randomNumber() },
            { name: 'Mittie Burton', progress: randomNumber() },
            { name: 'Manson Miller', progress: randomNumber() },
            { name: 'Jimmy Warner', progress: randomNumber() },
            { name: 'Leila Cain', progress: randomNumber() },
            { name: 'Polly Black', progress: randomNumber() },
            { name: 'Rosie Morton', progress: randomNumber() },
            { name: 'Gussie Phillips', progress: randomNumber() },
            { name: 'Hilda Terry', progress: randomNumber() },
        ],
        campaigns: [
            {
                id: '3150-301-008',
                indication: "Ulcerative Colitis, Crohn's",
                site: 1,
                session: 2,
                form: 12,
                leads: 12,
                follow_up: 9,
            },
            {
                id: '263 CS201',
                indication: 'Asthma',
                site: 3,
                session: 54,
                form: 34,
                leads: 33,
                follow_up: 33,
            },
            {
                id: 'IT001-301',
                indication: 'Endometriosis',
                site: 2,
                session: 9,
                form: 5,
                leads: 5,
                follow_up: 1,
            },
            {
                id: '263 CS201',
                indication: 'Schizophrenia',
                site: 1,
                session: 6,
                form: 0,
                leads: 0,
                follow_up: 0,
            },
            {
                id: 'I6T-MC-AMAM',
                indication: 'Migranie',
                site: 1,
                session: 8,
                form: 41,
                leads: 41,
                follow_up: 12,
            },
            {
                id: 'GA28948',
                indication: 'Ulcerative Colitis',
                site: 5,
                session: 27,
                form: 13,
                leads: 13,
                follow_up: 11,
            },
            {
                id: 'IT001-301',
                indication: 'UTI',
                site: 1,
                session: 6,
                form: 4,
                leads: 3,
                follow_up: 0,
            },
            {
                id: 'I6T-MC-AMAM',
                indication: 'Pediatric Diabetes',
                site: 25,
                session: 28,
                form: 11,
                leads: 12,
                follow_up: 0,
            },
            {
                id: 'PA-102',
                indication: 'Atopic Dermatitis',
                site: 5,
                session: 41,
                form: 17,
                leads: 17,
                follow_up: 17,
            },
        ],
    };
};
