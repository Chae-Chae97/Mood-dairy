import { useEffect, useState } from 'react';
import MoodSelector from './components/MoodSelector';
import MoodDisplay from './components/MoodDisplay';
import MoodForm from './components/MoodForm';
import MoodList from './components/MoodList';

import './App.css';

const themes = {
  white: {
    '--main-color': '#ffffff',
    '--main-color-dark': '#e0e0e0',
    '--bg-color': '#FFFFF0',
    '--text-color': '#222222',
    '--input-text-color': '#222222',   // 텍스트 박스 글자 색
  },
  gray: {
    '--main-color': '#999999',
    '--main-color-dark': '#777777',
    '--bg-color': '#DDDDDD',
    '--text-color': '#222222',
    '--input-text-color': '#222222',
  },
  navy: {
    '--main-color': '#0a1e3f',
    '--main-color-dark': '#06132a',
    '--bg-color': '#D0D5E5',
    '--text-color': '#666666',
    '--input-text-color': '#e0e0e0',
  },
};


function App() {
  const [mood, setMood] = useState('');
  const [theme, setTheme] = useState('white');
  const [records, setRecords] = useState(() => {
    const saved = localStorage.getItem('moodRecords');
    return saved ? JSON.parse(saved) : [];
  });

  const handleSave = (entry) => {
    setRecords([...records, entry]);
    setMood('');
  };

  const handleDelete = (index) => {
    const newRecords = records.filter((_, i) => i !== index);
    setRecords(newRecords);
  };

  useEffect(() => {
    const root = document.documentElement;
    const selectedTheme = themes[theme];
    for (const key in selectedTheme) {
      root.style.setProperty(key, selectedTheme[key]);
    }
  }, [theme]);

  // records 변경 시 로컬스토리지 저장
  useEffect(() => {
    localStorage.setItem('moodRecords', JSON.stringify(records));
  }, [records]);

  return (
    <div>
        <span>테마 선택: </span>
        {Object.keys(themes).map((themeName) => (
          <button
            key={themeName}
            style={{
              backgroundColor: themes[themeName]['--main-color'],
              color: themes[themeName]['--text-color'],
              border: theme === themeName ? '2px solid black' : 'none',
              marginRight: '0.5rem',
              padding: '0.3rem 0.8rem',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onClick={() => setTheme(themeName)}
          >
            {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
          </button>
        ))}
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>오늘의 기분은?</h1>
      <MoodSelector mood={mood} setMood={setMood} />
      <MoodDisplay mood={mood} />
      <MoodForm mood={mood} onSave={handleSave} />
      <MoodList records={records} onDelete={handleDelete} />
      <p>선택한 기분: {mood}</p>

      

        <h2>기록된 일기</h2>
        {records.length > 0 ? (
          <ul>
            {records.map((record, index) => (
              <li key={index}>
                <strong>{record.date}</strong>: {record.mood} - {record.entry}
              </li>
            ))}
          </ul>
        ) : (
          <p>아직 기록된 일기가 없어요.</p>
        )}
      </div>
    </div>
  );
}

export default App;
