//MoodList.jsx

function MoodList({ records, OnDelete }) {
    if (records.length === 0) {
        return <p>아직 기록된 일기가 없어요😞</p>;
    }

  return (
    <div>
      <h3>기록된 기분과 일기</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {records.map((record, index) => (
          <li 
            key={index} 
            style={{ 
                marginBottom: '1rem', 
                borderBottom: '1px solid #ccc', 
                paddingBottom: '0.5rem' 
                }}
            >
            <div style={{ fontSize: '1.5rem' }}>
                {record.mood} 
                <span style={{ fontSize: '0.8rem', color: '#555' }}>
                    {record.date}
                    </span>
            </div>
            <div>{record.entry}</div>
            <button
                onClick={() => OnDelete(index)}
                style={{
                    marginTop: '5px',
                    backgroundColor: '#f44336',
                    color: 'white', 
                    border: 'none',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    fontSize: '0.9rem',                    
                    cursor: 'pointer'
                }}
            >   
                삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoodList;