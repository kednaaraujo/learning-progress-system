type ProgressBarProps = {
  value: number
}

function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}

export default ProgressBar