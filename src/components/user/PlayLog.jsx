import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap'
import moment from 'moment/moment'

import styles from './UserPanel.module.scss'

function PlayLog ({ playlog, current }) {
  function getTimeStamp (time) {
    const duration = moment.duration(time, 'seconds')
    return duration.humanize()
  }

  return (
    <div className={styles.Panel}>
      <div className={styles.PanelHeader}>Play Log</div>
      <div className={styles.PanelBody}>
        <Table style={{ color: 'white' }}>
          <thead>
            <tr>
              <th>Game / ID</th>
              <th>Play Time</th>
              <th>Play Count</th>
              <th>Last Played</th>
            </tr>
          </thead>
          <tbody>
            {playlog.map((log) => (
              <tr key={log.game.game_id}>
                <td>{log.game.name === null ? log.game.game_id : log.game.name}</td>
                <td>{log.play_time > 0 ? `${getTimeStamp(log.play_time)}` : 'Not Tracked'}</td>
                <td>{log.play_count} times</td>
                <td>{current && current.game_id === log.game.game_id ? 'Now' : moment(log.played_on).from()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

PlayLog.propTypes = {
  playlog: PropTypes.array,
  current: PropTypes.object.isRequired
}

PlayLog.defaultProps = {
  updated_at: null
}

export default PlayLog
