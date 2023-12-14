const colors = [{
    color: '#E5A443',
    backgroundColor: '#FCEED3'
}, {
    color: '#43B78D',
    backgroundColor: '#D2F2EA'
}];


export const setChatColor = (origin) => {
    for (let i = 0; i < origin.length; i++) {
        let data = origin[i].data;
        const unique = data.filter(
            (obj, index) =>
                data.findIndex((item) => item.userId === obj.userId) === index
        );
        origin[i].data = unique
    }
    console.log(origin)
    console.log(origin.message)
    let manipulated = []
    for (let i = 0; i < origin.message.length; i++) {
        console.log(origin.message[i].data)
        manipulated.push(...origin.message[i].data)
    }
    console.log(manipulated)
    const noDuplicateIds = manipulated.filter(
        (obj, index) =>
            manipulated.findIndex((item) => item.userId === obj.userId) === index
    );
    console.log(noDuplicateIds)
    let temp = [];
    noDuplicateIds.forEach(item => {
        temp.push({
            userId: item.userId,
            colors: colors[Math.floor(Math.random() * 2)]
        })
    });
    localStorage.setItem(`inbox-${origin.id}`, JSON.stringify(temp))
}