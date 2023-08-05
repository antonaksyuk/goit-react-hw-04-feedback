import PropTypes from 'prop-types'

import style from './Statistics.module.css'


export default function Statistics ({data, total, positivePercentage}) {
    const convertToArray = () => {
        const obj = data
        const result = Object.keys(obj).map((key) => ({ name: key, value: obj[key] }));
        return result;
    };
    
    
        return (
            <div className={style.statisticsBlock}>
                {convertToArray().map(elm => {
                    return (
                        <p key={elm.name}>{elm.name.toUpperCase()}: {elm.value}</p>
                    )
                })}
                <p>Total: {total()}</p>
                <p>Positive feedback: {positivePercentage()}%</p>
            </div>
        );
}

Statistics.propTypes = {
    data: PropTypes.object.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
}