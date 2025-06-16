// MoodForm.jsx
import {useState} from 'react';

function MoodForm({ mood, onSave }) {
  const [entry, setEntry]  = useState('');
  const handleSave = () => {
    if (mood && entry.trim() !== '') {
      onSave({ mood, entry, date: new Date().toLocaleDateString()});
      setEntry('');
    } else {
      alert('기분과 일기를 모두 입력해주세요!');
    }
  };
  return (
    <div>
      <textarea
        rows={3}
        placeholder='오늘의 기분을 적어보세요:)'
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        style={{ width: '100%', padding: '10px', fontSize: '1rem' }}
      />
      <button
        onClick={handleSave}
         style={{
          marginTop: '10px',
          padding: '10px 20px',
          fontSize: '1rem',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          }}
        >
          기록하기
      </button>
    </div>
  );
}

export default MoodForm;
