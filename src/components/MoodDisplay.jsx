//MoodDisplay.jsx
function MoodDisplay({ mood, setMood }) {
    return (
        <div>
            <h3>선택한 기분</h3>
            <p style={{ fontSize: '2rem' }}>
                {mood ? mood : '아직 기분을 선택하지 않았어요!'}
            </p>
        </div>
     );
}

export default MoodDisplay;
// MoodDisplay component to display and set mood