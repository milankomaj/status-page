import { locations } from '../functions/location'

export default function MonitorDayAverage({ location, avg }) {
  return (
    <>
      <br />
      <small>
      &#128681;{locations[location] || location}: {avg}ms
      </small>
    </>
  )
}
