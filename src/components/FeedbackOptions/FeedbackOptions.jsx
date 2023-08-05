import PropTypes from 'prop-types'

import style from './FeedbackOptions.module.css'

export default function FeedbackOptions ({options, onLeaveFeedback}) {
    console.log(options);
        return (
            <div className={style.buttonsBlock}>
                {options.map(elm => {

                    return (
                        <button className={style.button} key={elm} type='button' onClick={onLeaveFeedback} data-name={elm}>{elm.toUpperCase()}</button>
                    )
                })}
            </div>
        );
    }


FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}