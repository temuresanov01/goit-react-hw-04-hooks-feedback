import s from './section.module.css';
import PropTypes from 'prop-types';

export default function Section({ title, children }) {
    return (
        <section className={s.section}>
            <p className={s.title}>{title}</p>
            {children}
        </section>
    );
};
Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  };