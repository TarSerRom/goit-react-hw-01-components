import PropTypes from 'prop-types';
import './StatisticsStyles.css';

export default function StatisticsList({ label, percentage }) {
  return (
    <li className="statistics_item">
      <span className="statistics_label">{label}</span>
      <span className="statistics_percentage">{percentage}</span>
    </li>
  );
}

StatisticsList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
