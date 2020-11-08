const LogMe = ({color: color = 'dodgerblue', componentName = 'Component', count = false}) => {
    return function (...content) {
        const style = `color: white; padding: 5px; border-radius: 5px; background: ${color}`;
        if(count){
            console.count('run №',console.log(`%c${componentName} ▶️`, style, ...content));
            return;
        }
        console.log(`%c${componentName} ▶️`, style, ...content);
    };   
}

const log = LogMe({ componentName: 'StaffEmployees', count: true});
const logg = LogMe({ componentName: 'StaffEmployees'});

log('lets try it', 'one more string');
logg('lets try it', 'one more string');
log('lets try it', 'one more string');
log('lets try it', 'one more string');