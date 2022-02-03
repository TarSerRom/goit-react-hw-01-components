import StatisticsList from './StatisticsList';
import PropTypes from 'prop-types';

function Statistics({ stats }) {
  return (
    <ul className="statistics">
      {stats.map(({id,label, percentage}) => (
        
          <StatisticsList
            key={id} 
            label={label}
            percentage={percentage}
          />
      ))
      }
    </ul>
  )
}
 
Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string.isRequired,
  }))
}

export default Statistics;