const LogMe = (type, {color: color = 'dodgerblue', componentName}) => {
    return function (content) {
        const style = `color: white; padding: 5px; border-radius: 5px; background: ${color}`;
        console.log(`%c${componentName} ▶️`, style, content);
    };   
}

const sampleObj = {
    pos1: 'dummy text',
    pos2: 'some more dummy text',
    pos3: 'and some more'
}

const lg = LogMe('info', { componentName: 'StaffEmployees'});

lg('lets try it');
lg(sampleObj)