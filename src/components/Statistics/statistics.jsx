import s from './statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <section className={s.statistics}>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
        </section>
    );
};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,

};