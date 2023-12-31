import moment from "moment";

const now = moment();

export const inboxData = [
    {
        id: '1',
        title: 'I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]',
        date: moment(now).subtract(10, 'minutes').format('MMMM DD, YYYY hh:mm'),
        isSupport: false,
        isRead: false,
        participantNumber: 3,
        message: [
            {
                date: moment(now).subtract(1, 'day'),
                data: [{
                    messageId: 1,
                    userId: 3,
                    userName: 'Mary Hilda',
                    message: 'Just Fill me in for his updates yea?',
                    createdAt: moment(now).subtract(1, 'day').subtract(14, 'minutes').format('MMMM DD, YYYY hh:mm'),
                    isRead: true

                },{
                    messageId: 2,
                    userId: 2,
                    userName: 'Claren',
                    message: 'No worries. It will be completed ASAP. I\'ve asked him yesterday.',
                    createdAt: moment(now).subtract(1, 'day').format('MMMM DD, YYYY hh:mm'),
                    isRead: true
                }]
            }, {
                date: moment(now),
                data: [{
                    messageId: 3,
                    userId: 3,
                    userName: 'Mary Hilda',
                    message: 'Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.',
                    createdAt: moment(now).subtract(14, 'minutes').format('MMMM DD, YYYY hh:mm'),
                    isRead: true

                }, {
                    messageId: 4,
                    userId: 2,
                    userName: 'Claren',
                    message: 'Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.',
                    createdAt: moment(now).subtract(12, 'minutes').format('MMMM DD, YYYY hh:mm'),
                    isRead: true
                }, {
                    messageId: 5,
                    userId: 3,
                    userName: 'Mary Hilda',
                    message: 'Sure thing, Claren',
                    createdAt: moment(now).subtract(11, 'minutes').format('MMMM DD, YYYY hh:mm'),
                    isRead: true
                }, {
                    messageId: 6,
                    userId: 4,
                    userName: 'Obaidullah Amarkhil',
                    message: 'Morning. I’ll try to do them. Thanks',
                    createdAt: moment(now).subtract(10, 'minutes').format('MMMM DD, YYYY hh:mm'),
                    isRead: false
                }]
            }
        ]
    }, {
        id: '2',
        title: '109220-Naturalization',
        date: moment(now).subtract(1, 'days').format('MMMM DD, YYYY hh:mm'),
        isSupport: false,
        isRead: false,
        participantNumber: 3,
        message: [
            {
                date: moment(now).subtract(1, 'day'),
                data: [{
                    messageId: 7,
                    userId: 5,
                    userName: 'Cameron Phillips',
                    message: 'Please check this out!',
                    createdAt: moment(now).subtract(1, 'days').format('MMMM DD, YYYY hh:mm'),
                    isRead: true
                }]
            }
        ]
    }, {
        id: '3',
        title: 'Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]',
        date: moment(now).subtract(1, 'days').subtract(3, 'hours').format('MMMM DD, YYYY hh:mm'),
        isSupport: false,
        isRead: true,
        participantNumber: 5,
        message: [
            {
                date: moment(now).subtract(1, 'days').subtract(3, 'hours'),
                data: [{
                    messageId: 8,
                    userId: 6,
                    userName: 'Ellen',
                    message: 'Hey, please read.',
                    createdAt: moment(now).subtract(1, 'days').subtract(3, 'hours').format('MMMM DD, YYYY hh:mm'),
                    isRead: true
                }]
            }
        ]
    }, {
        id: '4',
        title: '8405-Diana SALAZAR MUNGUIA',
        isSupport: false,
        isRead: true,
        date: moment(now).subtract(3, 'days').format('MMMM DD, YYYY hh:mm'),
        participantNumber: 3,
        message: [
            {
                date: moment(now).subtract(3, 'days'),
                data: [{
                    messageId: 9,
                    userId: 5,
                    userName: 'Cameron Phillips',
                    message: 'I understand your initial concerns and thats very valid, Elizabeth. But you should checkout the documentation about that problem.',
                    createdAt: moment(now).subtract(3, 'days').format('MMMM DD, YYYY hh:mm'),
                    isRead: true
                }]
            }
        ]
    }, {
        id: '5',
        title: 'FastVisa Support',
        isSupport: true,
        isRead: true,
        date: moment(now).subtract(5, 'days').format('MMMM DD, YYYY hh:mm'),
        participantNumber: 2,
        message: [
            {
                date: moment(now).subtract(5, 'days'),
                data: [{
                    messageId: 10,
                    userId: 1,
                    userName: 'FastVisa Support',
                    message: 'Hey there! Welcome to your inbox.',
                    createdAt: moment(now).subtract(5, 'days').format('MMMM DD, YYYY hh:mm'),
                    isRead: true
                },{
                    messageId: 2,
                    userId: 2,
                    userName: 'Claren',
                    message: 'Hi, I need help with something can you help me?',
                    createdAt: moment(now).subtract(5, 'days').format('MMMM DD, YYYY hh:mm'),
                    isRead: true
                }]
            }
        ]
    }
];

export const badgeData = [
    {
        id: 1,
        name: 'Important ASAP',
        backgroundColor: '#E5F1FF'
    },{
        id: 2,
        name: 'Offline Meeting',
        backgroundColor: '#FDCFA4'
    },{
        id: 3,
        name: 'Virtual Meeting',
        backgroundColor: '#F9E9C3'
    },{
        id: 4,
        name: 'ASAP',
        backgroundColor: '#AFEBDB'
    },{
        id: 5,
        name: 'Client Related',
        backgroundColor: '#CBF1C2'
    },{
        id: 6,
        name: 'Self Task',
        backgroundColor: '#CFCEF9'
    },{
        id: 7,
        name: 'Appointments',
        backgroundColor: '#F9E0FD'
    },{
        id: 8,
        name: 'Court Related',
        backgroundColor: '#9DD0ED'
    }
]

export const taskData = [
    {
        id: 1,
        title: 'Close off Case #012920- RODRIGUES, Amiguel',
        dueDate: moment(now).add(3, 'days'),
        description: 'Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!',
        completed: false,
        createdAt: moment(now).subtract(5, 'days')
    },{
        id: 2,
        title: 'Set up documentation report for several Cases : Case 145443, Case 192829 and Case 182203',
        dueDate: moment(now).add(4, 'days'),
        description: 'All Cases must include all payment transactions, all documents and forms filled. All conversations in comments and messages in channels and emails should be provided as well in.',
        completed: false,
        createdAt: moment(now).subtract(5, 'days')
    },{
        id: 3,
        title: 'Set up appointment with Dr Blake',
        dueDate: moment(now).add(6, 'days'),
        description: null,
        completed: false,
        createdAt: moment(now).subtract(7, 'days')
    },{
        id: 4,
        title: 'Contact Mr Caleb - video conference?',
        dueDate: moment(now).add(1, 'days'),
        description: null,
        completed: true,
        createdAt: moment(now).subtract(8, 'days')
    },{
        id: 5,
        title: 'Assign 3 homework to Client A',
        dueDate: moment(now).add(2, 'days'),
        description: null,
        completed: true,
        createdAt: moment(now).subtract(8, 'days')
    }
]