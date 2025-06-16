// MoodSelector.jsx
function MoodSelector({ mood, setMood }) {
  const moods = ['😊', '😐', '😞', '😡', '😴'];

  return (
    <div className="mood-selector">
      <h3>오늘의 기분을 선택해보세요 :)</h3>
      <div className="mood-buttons">
        {moods.map((emoji, index) => (
          <button
            key={index}
            className={mood === emoji ? 'selected' : ''}
            onClick={() => setMood(emoji)}
            aria-label={`기분 ${emoji} 선택`}
            type="button"  // 기본 버튼 타입 명시
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MoodSelector;
