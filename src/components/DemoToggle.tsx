import "./DemoToggle.css"

function DemoToggle({ enabled, onChange }) {
  return (
    <div className="demoToggle">
      <div className="demoToggle_content">
        <span className="demoToggle_label">
          Improved UI
        </span>

        <button
          type="button"
          className={`demoToggle_switch ${
            enabled ? "active" : ""
          }`}
          onClick={() => onChange(!enabled)}
          aria-pressed={enabled}
        >
          <span className="demoToggle_thumb" />
        </button>
      </div>
    </div>
  )
}

export default DemoToggle